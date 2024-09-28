"use client";
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import { Button, ButtonProps } from "@/registry/ui/button/button";
import styles from "./select.module.css";
import { useRefs } from "@/registry/lib/useRefs";

/* -------------------------------------------------------------------------------------------------
 * SELECT CONTEXT
 * -----------------------------------------------------------------------------------------------*/

type Option = {
  value: string;
  display: string;
};

type SelectContextValue = {
  open: boolean;
  selectedItem: string | null;
  options: Option[];
  triggerRef: React.RefObject<HTMLButtonElement>;
  contentRef: React.RefObject<HTMLDivElement>;
  onOpenChange(open: boolean): void;
  onOpenToggle(): void;
  onSelectItem(value: string): void;
  registerOption(option: Option): void;
};

const SelectContext = createContext<SelectContextValue | undefined>(undefined);

interface SelectProps {
  value: string;
  onSelectItem: (value: string) => void;
  children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({
  value,
  onSelectItem,
  children,
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const onOpenToggle = () => setOpen((prevOpen) => !prevOpen);

  const registerOption = (option: Option) => {
    setOptions((prevOptions) => [...prevOptions, option]);
  };

  const selectedItem = options.find((option) => option.value === value);

  const contextValue: SelectContextValue = {
    contentRef,
    triggerRef,
    open,
    selectedItem: value ?? selectedItem, // Current selected value
    onOpenChange: setOpen,
    onOpenToggle,
    onSelectItem: (selectedValue: string) => {
      onSelectItem(selectedValue);
      setOpen(false); // Close the dropdown after selection
    },
    options,
    registerOption,
  };

  return (
    <SelectContext.Provider value={contextValue}>
      {children}
    </SelectContext.Provider>
  );
};

const useSelect = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("useSelect must be used within a SelectProvider");
  }
  return context;
};

/* -------------------------------------------------------------------------------------------------
 * SELECT TRIGGER
 * -----------------------------------------------------------------------------------------------*/

const TRIGGER_NAME = "SelectTrigger";

type SelectTriggerElement = React.ElementRef<typeof Button>;

interface SelectTriggerProps extends ButtonProps {
  placeholder?: string;
}

const SelectTrigger = React.forwardRef<
  SelectTriggerElement,
  SelectTriggerProps
>((props, ref) => {
  const { open, onOpenToggle, selectedItem, triggerRef, options } = useSelect();
  const combinedRefs = useRefs(ref, triggerRef);

  const selectedOption = options.find(
    (option) => option.value === selectedItem
  );

  const defaultPlaceholder = props.placeholder ?? "Select an option";

  return (
    <Button
      type='button'
      aria-haspopup='dialog'
      aria-expanded={open}
      aria-controls='Dialog'
      className={styles.trigger}
      onClick={onOpenToggle}
      ref={combinedRefs}
      {...props}>
      {selectedOption ? selectedOption.display : defaultPlaceholder}
    </Button>
  );
});

SelectTrigger.displayName = TRIGGER_NAME;

/* -------------------------------------------------------------------------------------------------
 * SELECT CONTENT
 * -----------------------------------------------------------------------------------------------*/

const CONTENT_NAME = "SelectContent";

const SelectContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { open, contentRef } = useSelect();

  return open ? (
    <div
      ref={contentRef}
      id='select-content'
      role='listbox'
      aria-labelledby='select-trigger'
      className={styles.content}>
      {children}
    </div>
  ) : null;
};

SelectContent.displayName = CONTENT_NAME;

/* -------------------------------------------------------------------------------------------------
 * SELECT ITEM
 * -----------------------------------------------------------------------------------------------*/

const ITEM_NAME = "SelectItem";

interface SelectItemProps {
  value: string;
  display: string;
}

const SelectItem: React.FC<SelectItemProps> = ({ value, display }) => {
  const { onSelectItem, selectedItem, registerOption } = useSelect();
  const isSelected = selectedItem === value;

  useEffect(() => {
    registerOption({ value, display });
  }, [value, display]);

  return (
    <div
      role='option'
      aria-selected={isSelected}
      tabIndex={0}
      onClick={() => onSelectItem(value)}
      className={`${styles.option} ${isSelected ? styles.selected : ""}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelectItem(value);
        }
      }}>
      {display}
    </div>
  );
};

SelectItem.displayName = ITEM_NAME;

export { SelectTrigger, SelectItem, SelectContent };
export { Select, useSelect };
