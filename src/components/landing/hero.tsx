import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 gap-10 items-center py-20 md:py-32">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold font-headline leading-tight">
          <span className="whitespace-nowrap">No random matches.</span> <br /> No awkward convos. <br />No zero outcomes.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Just mentors who get you, powered by AI, not guesswork.<br /> <br />
          Tired of awkward coffee chats that lead nowhere? <br /> <br />HelloMentor is the first AI-powered mentorship matching platform built for students and young professionals who want real guidance — not generic advice. We ditch the randomness and connect you with mentors who actually get your goals, your background, and your next move. No small talk. No ghosting. Just smart, meaningful connections that move you forward.
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
