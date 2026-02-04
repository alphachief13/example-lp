import Hero from "@/components/Home/1-Hero/Hero";
import ExampleSection from "@/components/Home/2-ExampleSection/ExampleSection";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center px-4 md:px-10 lg:px-32">
      <Hero />
      <ExampleSection />
    </div>
  );
}
