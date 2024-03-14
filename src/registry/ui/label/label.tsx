import React from "react";
import styles from "./label.module.css";

type LabelProps = React.HTMLProps<HTMLLabelElement> & {
  className?: string;
};

const Label: React.FC<LabelProps> = ({ className, ...props }) => {
  return <label className={`${styles.base} ${className ?? ""}`} {...props} />;
};

Label.displayName = "Label";

export { Label };
