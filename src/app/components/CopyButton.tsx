"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "@/registry/ui/button/button";

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value?: string | undefined | null;
}

export async function copyToClipboardWithMeta(
  value: string | undefined | null
) {
  if (!value) {
    return;
  }
  navigator.clipboard.writeText(value);
}

export function CopyButton({ value, className, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <Button
      size='small'
      id='copy-to-clipboard'
      variant='ghost'
      className={`z-10 ${className}`}
      onClick={() => {
        copyToClipboardWithMeta(value);
        setHasCopied(true);
      }}
      {...props}>
      <span className='sr-only'>Copy</span>
      {hasCopied ? <Check className='h-3 w-3' /> : <Copy className='h-3 w-3' />}
    </Button>
  );
}
