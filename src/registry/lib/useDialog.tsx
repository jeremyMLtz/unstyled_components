import React, { createContext, useContext, useState, useRef } from "react";

type DialogContextValue = {
  triggerRef: React.RefObject<HTMLButtonElement>;
  contentRef: React.RefObject<HTMLDivElement>;
  open: boolean;
  onOpenChange(open: boolean): void;
  onOpenToggle(): void;
};

const DialogContext = createContext<DialogContextValue | undefined>(undefined);

export const DialogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const onOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  const onOpenToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const contextValue: DialogContextValue = {
    triggerRef,
    contentRef,
    open,
    onOpenChange,
    onOpenToggle,
  };

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};
