import { Hero } from "@/components/landing/hero";
import { Process } from "@/components/landing/process";
import { Testimonials } from "@/components/landing/testimonials";
import { Cta } from "@/components/landing/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Process />
      <Testimonials />
      <Cta />
    </>
  );
}
