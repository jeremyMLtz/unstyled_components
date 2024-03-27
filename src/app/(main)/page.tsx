import Header from "@/app/components/Header";
import HeroSection from "../components/ui/hero";
import { TestCard } from "../components/ui/TestCard";
import TestDialog from "../components/ui/TestDialog";
import ExampleApplication from "../components/example-application/ExampleApplication";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection
        title='Start building now'
        subtitle='An open source library providing simple, accessible, and customizable components with a simple copy and paste.'
      />
      <ExampleApplication />
    </main>
  );
}
