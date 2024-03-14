import * as React from "react";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form";

import { Label } from "@/registry/ui/label/label";
import styles from "./form.module.css";

const Form = FormProvider;

type FormFieldContextValue<
  _FieldValues extends FieldValues = FieldValues,
  _Name extends FieldPath<_FieldValues> = FieldPath<_FieldValues>
> = {
  name: _Name;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const FormField = <
  _FieldValues extends FieldValues = FieldValues,
  _Name extends FieldPath<_FieldValues> = FieldPath<_FieldValues>
>({
  ...props
}: ControllerProps<_FieldValues, _Name>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField must be used in a <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

/* -------------------------------------------------------------------------------------------------
 * FORM ITEM
 * -----------------------------------------------------------------------------------------------*/

const ITEM_NAME = "FormItem";

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        ref={ref}
        className={`${styles.formItem} ${className ?? ""}`}
        {...props}
      />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = ITEM_NAME;

/* -------------------------------------------------------------------------------------------------
 * FORM LABEL
 * -----------------------------------------------------------------------------------------------*/

const LABEL_NAME = "FormLabel";

type LabelProps = React.HTMLProps<HTMLLabelElement> & {
  className?: string;
};

const FormLabel: React.FC<LabelProps> = ({ className, ...props }) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      className={`${error && styles.error} ${className ?? ""}`}
      htmlFor={formItemId}
      {...props}
    />
  );
};
FormLabel.displayName = LABEL_NAME;

/* -------------------------------------------------------------------------------------------------
 * FORM CONTROL
 * -----------------------------------------------------------------------------------------------*/

const CONTROL_NAME = "FormControl";

const FormControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <div
      ref={ref}
      id={formItemId}
      className={styles.formItem}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = CONTROL_NAME;

/* -------------------------------------------------------------------------------------------------
 * FORM DESCRIPTION
 * -----------------------------------------------------------------------------------------------*/

const DESCRIPTION_NAME = "FormDescription";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={`${styles.description} ${className ?? className}`}
      {...props}
    />
  );
});
FormDescription.displayName = DESCRIPTION_NAME;

/* -------------------------------------------------------------------------------------------------
 * FORM MESSAGE
 * -----------------------------------------------------------------------------------------------*/

const MESSAGE_NAME = "FormMessage";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={`${styles.message} ${className ?? ""}`}
      {...props}>
      {body}
    </p>
  );
});
FormMessage.displayName = MESSAGE_NAME;

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
