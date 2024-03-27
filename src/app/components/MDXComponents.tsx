"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

import { CodeBlockWrapper } from "@/app/components/CodeBlockWrapper";
import { ComponentExample } from "@/app/components/ComponentExample";
import { ComponentPreview } from "@/app/components/ComponentPreview";
import { ComponentSource } from "@/app/components/ComponentSource";
import Pre from "@/app/components/PreWithCopy";

const components = {
  h1: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className='font-heading mt-2 scroll-m-20 text-4xl font-bold'
      {...props}
    />
  ),
  h2: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className='font-heading mt-12 scroll-m-20 border-border border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0'
      {...props}
    />
  ),
  h3: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className='font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight'
      {...props}
    />
  ),
  h4: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className='font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight'
      {...props}
    />
  ),
  h5: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className='mt-8 scroll-m-20 text-lg font-semibold tracking-tight'
      {...props}
    />
  ),
  h6: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className='mt-8 scroll-m-20 text-base font-semibold tracking-tight'
      {...props}
    />
  ),
  a: ({ ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a className='font-medium underline underline-offset-4' {...props} />
  ),
  p: ({ ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className='leading-7 [&:not(:first-child)]:mt-6' {...props} />
  ),
  ul: ({ ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className='my-6 ml-6 list-disc' {...props} />
  ),
  ol: ({ ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className='my-6 ml-6 list-decimal' {...props} />
  ),
  li: ({ ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className='mt-2' {...props} />
  ),
  blockquote: ({ ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className='mt-6 border-l-2 border-border pl-6 italic'
      {...props}
    />
  ),
  img: ({ alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className='rounded-md' alt={alt} {...props} />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className='my-4 md:my-8' {...props} />
  ),
  table: ({ ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className='my-6 w-full overflow-y-auto'>
      <table className='w-full' {...props} />
    </div>
  ),
  tr: ({ ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className='m-0 border-t border-border p-0 even:bg-muted' {...props} />
  ),
  th: ({ ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className='border border-border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'
      {...props}
    />
  ),
  td: ({ ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className='border border-border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right'
      {...props}
    />
  ),
  pre: ({ ...props }) => <Pre {...props} />,
  code: ({ ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm'
      {...props}
    />
  ),
  Image,
  ComponentPreview,
  ComponentExample,
  ComponentSource,
  CodeBlockWrapper: ({ ...props }) => <CodeBlockWrapper {...props} />,
  Step: ({ ...props }: React.ComponentProps<"h3">) => (
    <h3
      className='font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight'
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className='[&>h3]:step steps mb-12 ml-4 border-l border-border pl-8 [counter-reset:step]'
      {...props}
    />
  ),
  Link: ({ ...props }: React.ComponentProps<typeof Link>) => (
    <Link className='font-medium underline underline-offset-4' {...props} />
  ),
  LinkedCard: ({ ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className='flex w-full flex-col items-center rounded-xl border-border border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10'
      {...props}
    />
  ),
};

interface MdxProps {
  code: string;
  sourceCode: string[] | null;
}

export function Mdx({ code, sourceCode }: MdxProps) {
  const Component = useMDXComponent(code);
  const allComponents = {
    ...components,
    ComponentSource: ({ ...props }) => (
      <ComponentSource {...props} sourceCode={sourceCode} />
    ),
  };

  return (
    <div className='mdx'>
      <Component components={allComponents} />
    </div>
  );
}
