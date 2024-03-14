import Header from "@/app/components/ui/header";
import HeroSection from "../components/ui/hero";
import TestDialog from "../components/ui/TestDialog";
import { TestCard } from "../components/ui/TestCard";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection
        title='Start building now'
        subtitle='An open source library providing simple, accessible, and customizable components with a simple copy and paste.'
      />

      <div className='flex justify-center w-full my-4'>
        <TestCard />
      </div>

      <div className='border-solid h-[2000px] w-96 border-muted-foreground rounded m-auto border-2' />
    </main>
  );
}
