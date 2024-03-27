import { notFound } from "next/navigation";
import { allDocs } from "contentlayer/generated";

import "@/app/styles/mdx.css";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";

import { Mdx } from "@/app/components/MDXComponents";
import { badgeVariants } from "@/registry/ui/badge/badge";
import { DocsNavigator } from "@/app/components/DocsNavigator";
import getComponentSource from "@/app/lib/getComponentSource";

interface DocPageProps {
  params: {
    slug: string[];
  };
}

function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    return null;
  }

  return doc;
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(doc.slug),
    },
  };
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    notFound();
  }

  const sourceCode = getComponentSource(doc.title.toLowerCase());

  return (
    <main className='relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]'>
      <div className='mx-auto w-full min-w-0'>
        <div className='mb-4 flex items-center space-x-1 text-sm text-muted-foreground'>
          <div className='overflow-hidden text-ellipsis whitespace-nowrap'>
            Docs
          </div>
          <ChevronRight className='h-4 w-4' />
          <div className='font-medium text-foreground'>{doc.title}</div>
        </div>
        <div className='space-y-2'>
          <h1 className='scroll-m-20 text-4xl font-bold tracking-tight'>
            {doc.title}
          </h1>
          {doc.description && (
            <p className='text-lg text-muted-foreground'>{doc.description}</p>
          )}
        </div>
        {doc.links ? (
          <div className='flex items-center space-x-2 pt-4'>
            {doc.links?.doc && (
              <Link
                href={doc.links.doc}
                target='_blank'
                rel='noreferrer'
                className={badgeVariants({ variant: "secondary" })}>
                Docs
                <ExternalLink className='h-3 w-3' />
              </Link>
            )}
            {doc.links?.api && (
              <Link
                href={doc.links.api}
                target='_blank'
                rel='noreferrer'
                className={badgeVariants({ variant: "secondary" })}>
                API Reference
                <ExternalLink className='h-3 w-3' />
              </Link>
            )}
          </div>
        ) : null}
        <div className='pb-12 pt-8'>
          <Mdx sourceCode={sourceCode} code={doc.body.code} />
        </div>
        <DocsNavigator doc={doc} />
      </div>
    </main>
  );
}
