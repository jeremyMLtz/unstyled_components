"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Github } from "lucide-react";
import { Badge } from "@/registry/ui/badge/badge";
import { Button } from "@/registry/ui/button/button";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className='sticky z-40 top-0 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <Link className='flex items-center' href='/'>
          <span className='text-lg tracking-wide font-semibold'>unstyled</span>
          <Badge className='mx-2'>BETA</Badge>
        </Link>

        <nav className='flex flex-1 items-center justify-between space-x-4 md:justify-end'>
          <Link
            href='/docs/introduction'
            className={`
              transition-colors hover:text-foreground/80 ${
                pathname === "/docs/introduction" ||
                pathname === "/docs/installation"
                  ? "text-foreground"
                  : "text-foreground/60"
              }
              
            `}>
            Docs
          </Link>
          <Link
            href='/docs/components/avatar'
            className={`
              transition-colors hover:text-foreground/80 ${
                pathname?.startsWith("/docs/components")
                  ? "text-foreground"
                  : "text-foreground/60"
              }  
            `}>
            Components
          </Link>
          <Button size='small' variant='ghost'>
            <Link
              href='https://github.com/jeremyMLtz/unstyled_components'
              className='hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block'
              target='_blank'
              rel='noopener noreferrer'>
              <Github className='h-5 w-5' />
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
