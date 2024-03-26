"use client";

import * as React from "react";

interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "center" | "start" | "end";
  src?: string;
}

export function ComponentExample({
  children,
  align = "center",
  src: _,
  ...props
}: ComponentExampleProps) {
  const [Example] = React.Children.toArray(children) as React.ReactElement[];

  return (
    <div
      className='group relative my-4 flex flex-col space-y-2 border border-border rounded-lg'
      {...props}>
      <div className='flex min-h-[350px] items-center justify-center p-10'>
        {Example}
      </div>
    </div>
  );
}
