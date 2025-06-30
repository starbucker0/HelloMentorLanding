import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Testimonials } from "@/components/landing/testimonials";
import { Cta } from "@/components/landing/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
