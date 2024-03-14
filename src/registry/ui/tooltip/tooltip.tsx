import React, { useState, createContext, useContext } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./tooltip.module.css";

interface TooltipContextValue {
  isVisible: boolean;
  setVisible: (visible: boolean) => void;
}

const TooltipContext = createContext<TooltipContextValue | undefined>(
  undefined
);

interface TooltipContainerProps {
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipContainerProps> = ({ children }) => {
  const [isVisible, setVisible] = useState(false);

  const contextValue: TooltipContextValue = {
    isVisible,
    setVisible,
  };

  return (
    <TooltipContext.Provider value={contextValue}>
      <div className={styles.tooltipBase}>{children}</div>
    </TooltipContext.Provider>
  );
};

const useTooltip = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error("useTooltip must be used within a Tooltip");
  }
  return context;
};

/* -------------------------------------------------------------------------------------------------
 * TOOLTIP TRIGGER
 * -----------------------------------------------------------------------------------------------*/

const TRIGGER_NAME = "TooltipTrigger";

interface TooltipTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const TooltipTrigger = React.forwardRef<HTMLDivElement, TooltipTriggerProps>(
  ({ children, className, ...props }, ref) => {
    const { setVisible } = useTooltip();

    const handleMouseEnter = () => {
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    return (
      <div
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={ref}
        {...props}>
        {children}
      </div>
    );
  }
);

TooltipTrigger.displayName = TRIGGER_NAME;

/* -------------------------------------------------------------------------------------------------
 * TOOLTIP CONTENT
 * -----------------------------------------------------------------------------------------------*/

const CONTENT_NAME = "TooltipContent";

const tooltipVariants = cva(styles.tooltipContent, {
  variants: {
    position: {
      top: styles.top,
      bottom: styles.bottom,
    },
  },
  defaultVariants: {
    position: "top",
  },
});

interface TooltipContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tooltipVariants> {
  children: React.ReactNode;
  className?: string;
}

const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ children, className, position, ...props }, ref) => {
    const { isVisible } = useTooltip();

    return (
      <div
        className={tooltipVariants({ position, className })}
        id='tooltip-content'
        role='tooltip'
        ref={ref}
        style={{ opacity: isVisible ? "1" : "0" }}
        {...props}>
        {children}
      </div>
    );
  }
);

TooltipContent.displayName = CONTENT_NAME;

export { Tooltip, TooltipTrigger, TooltipContent };
