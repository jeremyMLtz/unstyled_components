import { docsConfig } from "@/app/lib/docsHelpers";
import { DocsSideNav } from "@/app/components/DocsSideNav";
import "@/app/styles/mdx.css";
import Header from "@/app/components/Header";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div>
      <Header />
      <div className='container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10'>
        <aside className='fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block border-r border-border/40'>
          <div className='h-full py-6 pr-6 lg:py-8'>
            <DocsSideNav items={docsConfig.sidebarNav} />
          </div>
        </aside>
        {children}
      </div>
    </div>
  );
}
