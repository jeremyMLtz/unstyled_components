"use client";
import * as React from "react";

import { CodeBlockWrapper } from "@/app/components/CodeBlockWrapper";
import Pre from "@/app/components/PreWithCopy";

interface ComponentSourceProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  sourceCode: string[] | null;
  type?: "code" | "styles";
}

export function ComponentSource({
  children,
  className,
  name,
  sourceCode,
  type = "code",
  ...props
}: ComponentSourceProps) {
  if (!sourceCode) {
    return null;
  }
  return (
    <CodeBlockWrapper expandButtonTitle='Expand'>
      <Pre {...props}>{type === "code" ? sourceCode[0] : sourceCode[1]}</Pre>
    </CodeBlockWrapper>
  );
}
