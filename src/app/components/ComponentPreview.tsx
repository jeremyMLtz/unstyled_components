import * as React from "react";
import { Index } from "@/app/__registry__";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

export function ComponentPreview({
  name,
  children,
  className,
  ...props
}: ComponentPreviewProps) {
  const Preview = React.useMemo(() => {
    const Component = Index[name]?.component;

    if (!Component) {
      return (
        <p className='text-sm text-muted-foreground'>
          Component{" "}
          <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm'>
            {name}
          </code>{" "}
          not found in registry.
        </p>
      );
    }

    return <Component />;
  }, [name]);

  return (
    <div
      className='group relative my-4 flex flex-col space-y-2 border border-border rounded-lg'
      {...props}>
      <div className='preview flex min-h-[350px] w-full justify-center items-center p-10'>
        <React.Suspense
          fallback={
            <div className='flex items-center text-sm text-muted-foreground'>
              Loading...
            </div>
          }>
          {Preview}
        </React.Suspense>
      </div>
    </div>
  );
}
