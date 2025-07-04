import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenText, Palette, BarChartHorizontal, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Hyper-specific Matching",
    description: "Think of it as “Tinder + Duolingo for mentorship” — emotionally intelligent and personalized.",
  },
  {
    icon: <BookOpenText className="w-8 h-8 text-primary" />,
    title: "AI-assisted Mentorship Journey Design",
    description: "Mentors get suggested frameworks (“Your mentee is 6 weeks from graduation. Focus on XYZ this week”), so they aren’t just chatting — they’re driving outcomes.",
  },
  {
    icon: <Palette className="w-8 h-8 text-primary" />,
    title: "Trackable Transformation",
    description: "Instead of loose “coffee chats,” mentees can set goals (e.g. land 3 interviews, write 1 targeted resume) and track real progress — making impact visible.",
  },
  {
    icon: <BarChartHorizontal className="w-8 h-8 text-primary" />,
    title: "Mentorship-as-a-Ritual",
    description: "It’s not transactional. It's social. Weekly prompts, shared reflections, and even group challenges make it sticky.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Key Features</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to build a successful career.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6">
              <CardHeader>
                {feature.icon}
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardDescription>{feature.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
