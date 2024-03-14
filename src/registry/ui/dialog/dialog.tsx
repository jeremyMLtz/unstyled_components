import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import ReactDOM from "react-dom";
import { Button, ButtonProps } from "@/registry/ui/button/button";
import styles from "./dialog.module.css";
import { useRefs } from "@/registry/lib/useRefs";

/* -------------------------------------------------------------------------------------------------
 * DIALOG CONTEXT
 * -----------------------------------------------------------------------------------------------*/

type DialogContextValue = {
  open: boolean;
  triggerRef: React.RefObject<HTMLButtonElement>;
  contentRef: React.RefObject<HTMLDivElement>;
  onOpenChange(open: boolean): void;
  onOpenToggle(): void;
};

const DialogContext = createContext<DialogContextValue | undefined>(undefined);

const Dialog: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
    contentRef,
    triggerRef,
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

const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};

/* -------------------------------------------------------------------------------------------------
 * DIALOG TRIGGER
 * -----------------------------------------------------------------------------------------------*/

const TRIGGER_NAME = "DialogTrigger";

type DialogTriggerElement = React.ElementRef<typeof Button>;

interface DialogTriggerProps extends ButtonProps {}

const DialogTrigger = React.forwardRef<
  DialogTriggerElement,
  DialogTriggerProps
>((props, ref) => {
  const { ...triggerProps } = props;
  const { open, onOpenToggle, triggerRef } = useDialog();
  const combinedRefs = useRefs(ref, triggerRef);
  return (
    <Button
      type='button'
      aria-haspopup='dialog'
      aria-expanded={open}
      aria-controls='Dialog'
      data-state={open}
      {...triggerProps}
      onClick={onOpenToggle}
      ref={combinedRefs}
    />
  );
});

DialogTrigger.displayName = TRIGGER_NAME;

const DialogClose: React.FC = () => {
  const { onOpenToggle } = useDialog();

  return (
    <Button
      className={styles.dialogClose}
      variant='ghost'
      size='small'
      onClick={onOpenToggle}
      aria-label='Close dialog'>
      X
    </Button>
  );
};

/* -------------------------------------------------------------------------------------------------
 * DIALOG PORTAL
 * -----------------------------------------------------------------------------------------------*/

const PORTAL_NAME = "DialogPortal";

interface DialogPortalProps {
  children?: React.ReactNode;
  container?: Element;
}

const DialogPortal: React.FC<DialogPortalProps> = (props) => {
  const { children, container } = props;
  const c = container ?? globalThis?.document?.body;
  const { open } = useDialog();
  if (!open) {
    return null;
  }
  return c
    ? ReactDOM.createPortal(
        <div className={styles.dialogBase} {...props}>
          {children}
        </div>,
        c
      )
    : null;
};

DialogPortal.displayName = PORTAL_NAME;

/* -------------------------------------------------------------------------------------------------
 * DIALOG OVERLAY
 * -----------------------------------------------------------------------------------------------*/

const OVERLAY_NAME = "DialogOverlay";

const DialogOverlay = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  return <div {...props} className={styles.dialogOverlay} ref={ref} />;
});

DialogOverlay.displayName = OVERLAY_NAME;

/* -------------------------------------------------------------------------------------------------
 * DIALOG CONTENT
 * -----------------------------------------------------------------------------------------------*/

const CONTENT_NAME = "DialogContent";

interface DialogContentProps {
  children?: React.ReactNode;
  className?: String;
}

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, className }, ref) => {
    const { open, onOpenToggle, contentRef } = useDialog();
    const combinedRefs = useRefs(contentRef, ref);
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onOpenToggle();
        }
      };

      open && document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [open, onOpenToggle]);

    useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }, [open]);

    return (
      <DialogPortal>
        <DialogOverlay />
        <div
          className={`${styles.dialogContent} ${className ?? ""}`}
          role='dialog'
          aria-labelledby='dialogTitle'
          data-state={open ? "open" : "closed"}
          ref={combinedRefs}>
          {children}
          <DialogClose />
        </div>
      </DialogPortal>
    );
  }
);

DialogContent.displayName = CONTENT_NAME;

/* -------------------------------------------------------------------------------------------------
 * DIALOG HHEADER
 * -----------------------------------------------------------------------------------------------*/

const HEADER_NAME = "DialogHeader";

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`${styles.dialogHeader} ${className ?? ""}`} {...props} />
);
DialogHeader.displayName = HEADER_NAME;

/* -------------------------------------------------------------------------------------------------
 * DIALOG TITLE
 * -----------------------------------------------------------------------------------------------*/

const TITLE_NAME = "DialogTitle";

const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    className={`${styles.dialogTitle} ${className ?? ""}`}
    {...props}
    ref={ref}
  />
));
DialogTitle.displayName = TITLE_NAME;

/* -------------------------------------------------------------------------------------------------
 * DIALOG DESCRIPTION
 * -----------------------------------------------------------------------------------------------*/

const DESCRIPTION_NAME = "DialogDescription";

const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    className={`${styles.dialogDescription} ${className ?? ""}`}
    {...props}
    ref={ref}
  />
));
DialogDescription.displayName = DESCRIPTION_NAME;

/* -------------------------------------------------------------------------------------------------
 * DIALOG FOOTER
 * -----------------------------------------------------------------------------------------------*/

const FOOTER_NAME = "DialogFooter";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`${styles.dialogFooter} ${className ?? ""}`} {...props} />
);
DialogFooter.displayName = FOOTER_NAME;

export {
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogClose,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogDescription,
  DialogFooter,
};

export { Dialog, useDialog };
