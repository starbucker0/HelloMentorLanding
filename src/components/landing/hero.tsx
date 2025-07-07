import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 gap-10 items-center py-20 md:py-32">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline leading-tight">
          Precision Matching for Real-World Career Readiness
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          HelloMentor is a mentorship platform designed for international students, offering structured, emotionally-aware, and insider-informed career coaching through AI-assisted mentor-matching and outcome-driven mentorship journeys
        </p>
        <div className="flex gap-4">
          <Button size="lg">Get Mentor for Free</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
      <div>
        <Image
          src="/images/hero.jpg"
          alt="Hero Image"
          width={600}
          height={400}
          className="rounded-lg shadow-2xl"
          data-ai-hint="web app dashboard"
        />
      </div>
    </section>
  );
}
