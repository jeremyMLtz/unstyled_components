import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./badge.module.css";

const badgeVariants = cva(styles.badgeBase, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
      destructive: styles.destructive,
      outline: styles.outline,
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={badgeVariants({ variant, className })} {...props} />;
}

export { Badge, badgeVariants };
