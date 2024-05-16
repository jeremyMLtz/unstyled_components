import Header from "@/app/components/Header";
import HeroSection from "../components/ui/hero";
import { TestCard } from "../components/ui/TestCard";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection
        title='Start building now'
        subtitle='An open source UI library providing simple, accessible, and customizable components with a simple copy and paste.'
      />
      {/* <section className='flex justify-center pt-3 pb-10'>
        <TestCard />
      </section> */}
    </main>
  );
}
