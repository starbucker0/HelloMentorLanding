import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 gap-10 items-center py-20 md:py-32">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline leading-tight">
          Launch Your Web App with a Stunning Landing Page
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Our template provides everything you need to create a professional,
          high-converting landing page for your new application.
        </p>
        <div className="flex gap-4">
          <Button size="lg">Get Freaky for Free</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
      <div>
        <Image
          src="https://placehold.co/600x400.png"
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
