import * as React from "react";
import styles from "./card.module.css";

/* -------------------------------------------------------------------------------------------------
 * CARD
 * -----------------------------------------------------------------------------------------------*/

const CARD_NAME = "Card";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`${styles.cardBase} ${className ?? ""}`}
    {...props}
  />
));
Card.displayName = CARD_NAME;

/* -------------------------------------------------------------------------------------------------
 * CARD HEADER
 * -----------------------------------------------------------------------------------------------*/

const HEADER_NAME = "CardHeader";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`${styles.cardHeader} ${className ?? ""}`}
    {...props}
  />
));
CardHeader.displayName = HEADER_NAME;

/* -------------------------------------------------------------------------------------------------
 * CARD TITLE
 * -----------------------------------------------------------------------------------------------*/

const TITLE_NAME = "CardTitle";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={`${styles.cardTitle} ${className ?? ""}`}
    {...props}
  />
));
CardTitle.displayName = TITLE_NAME;

/* -------------------------------------------------------------------------------------------------
 * CARD DESCRIPTION
 * -----------------------------------------------------------------------------------------------*/

const DESCRIPTION_NAME = "CardDescription";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={`${styles.cardDescription} ${className ?? ""}`}
    {...props}
  />
));
CardDescription.displayName = DESCRIPTION_NAME;

/* -------------------------------------------------------------------------------------------------
 * CARD CONTENT
 * -----------------------------------------------------------------------------------------------*/

const CONTENT_NAME = "CardContent";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`${styles.cardContent} ${className ?? ""}`}
    {...props}
  />
));
CardContent.displayName = CONTENT_NAME;

/* -------------------------------------------------------------------------------------------------
 * CARD FOOTER
 * -----------------------------------------------------------------------------------------------*/

const FOOTER_NAME = "CardFooter";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`${styles.cardFooter} ${className ?? ""}`}
    {...props}
  />
));
CardFooter.displayName = FOOTER_NAME;

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
