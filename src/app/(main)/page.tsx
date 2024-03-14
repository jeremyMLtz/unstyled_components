import Header from "@/app/components/ui/header";
import HeroSection from "../components/ui/hero";
import { TestCard } from "../components/ui/TestCard";
import TestDialog from "../components/ui/TestDialog";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection
        title='Start building now'
        subtitle='An open source library providing simple, accessible, and customizable components with a simple copy and paste.'
      />

      <div className='flex flex-col justify-center items-center space-y-3 w-full my-4'>
        <TestCard />
        <TestDialog />
      </div>

      {/* <div className='border-solid h-[2000px] w-96 border-muted-foreground rounded m-auto border-2' /> */}
    </main>
  );
}
