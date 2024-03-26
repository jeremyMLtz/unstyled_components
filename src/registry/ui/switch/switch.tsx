import * as React from "react";
import styles from "./switch.module.css";

export interface SwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onCheckedChange: (checked: boolean) => void;
  checked?: boolean | undefined;
  id?: string;
}

const SWITCH_NAME = "Switch";

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, onCheckedChange, checked = false, id, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    // We only want to handle the enter key when the Switch is focused,
    // this prevents bubbling issues when Switch is a form field
    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    const handleButtonClick = () => {
      onCheckedChange(!checked);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleButtonClick();
      }
    };
    return (
      <span className={styles.switchContainer}>
        <button
          role='switch'
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={isFocused ? handleButtonClick : undefined}
          onKeyDown={handleKeyDown}
          aria-checked={checked}
          aria-required={props.required}
          data-state={checked}
          data-disabled={props.disabled ? "" : undefined}
          disabled={props.disabled}
          tabIndex={0}
          className={styles.switchTrack}>
          <div className={styles.switchThumb} />
        </button>
        <input
          type='checkbox'
          className={styles.switchInput}
          checked={checked}
          onChange={(e) => onCheckedChange(e.target.checked)}
          ref={ref}
          aria-hidden
          tabIndex={-1}
          id={id}
          {...props}
        />
      </span>
    );
  }
);

Switch.displayName = SWITCH_NAME;

export { Switch };
