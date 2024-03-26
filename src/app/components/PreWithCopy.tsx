"use client";
import * as React from "react";
import { CopyButton } from "@/app/components/CopyButton";

interface PreProps extends React.HTMLAttributes<HTMLDivElement> {}

const Pre = ({ children, ...props }: PreProps) => {
  const codeRef = React.useRef<HTMLDivElement>(null);
  const [copyValue, setCopyValue] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (codeRef.current) {
      setCopyValue(codeRef.current.textContent);
    }
  }, [children]);
  return (
    <div className='relative' {...props}>
      <pre className='mb-4 mt-6 p-4 max-h-[650px] overflow-x-auto rounded-lg border border-border bg-zinc-950 py-4 dark:bg-zinc-900'>
        <code ref={codeRef}>{children}</code>
      </pre>
      <CopyButton value={copyValue} className='absolute right-4 top-4' />
    </div>
  );
};

export default Pre;
