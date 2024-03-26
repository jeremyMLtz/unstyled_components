"use client";

import { Button } from "@/registry/ui/button/button";
import * as React from "react";

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string;
}

export function CodeBlockWrapper({
  expandButtonTitle = "View Code",
  children,
  ...props
}: CodeBlockProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      data-state={isOpen}
      className={`relative overflow-hidden rounded-lg ${!isOpen && "max-h-32"}`}
      {...props}>
      <div
        className={`[&_pre]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[100px] ${
          !isOpen ? "[&_pre]:overflow-hidden" : "[&_pre]:overflow-auto"
        }`}>
        {children}
      </div>
      <div
        className={`absolute flex items-center justify-center bg-gradient-to-b from-zinc-700/30 to-zinc-950/90 p-2
            ${
              isOpen
                ? "inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-transparent"
                : "inset-0"
            }
          `}>
        <Button onClick={() => setIsOpen(!isOpen)} variant='secondary'>
          {isOpen ? "Collapse" : expandButtonTitle}
        </Button>
      </div>
    </div>
  );
}
