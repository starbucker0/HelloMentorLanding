import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenText, Palette, BarChartHorizontal, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Hyper-specific Matching",
    description: "Think of it as 'Tinder + Duolingo for mentorship' — emotionally intelligent and personalized.",
  },
  {
    icon: <BookOpenText className="w-8 h-8 text-primary" />,
    title: "AI-assisted Mentorship Journey Design",
    description: "Mentors get suggested frameworks ('Your mentee is 6 weeks from graduation. Focus on XYZ this week'), so they aren't just chatting — they're driving outcomes.",
  },
  {
    icon: <Palette className="w-8 h-8 text-primary" />,
    title: "Trackable Transformation",
    description: "Instead of loose 'coffee chats,' mentees can set goals (e.g. land 3 interviews, write 1 targeted resume) and track real progress — making impact visible.",
  },
  {
    icon: <BarChartHorizontal className="w-8 h-8 text-primary" />,
    title: "Mentorship-as-a-Ritual",
    description: "It's not transactional. It's social. Weekly prompts, shared reflections, and even group challenges make it sticky.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Key Features</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Everything you need to build a successful career through AI-powered mentorship.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col items-center text-center p-8 h-full">
            <CardHeader className="flex flex-col items-center">
              <div className="mb-4">
                {feature.icon}
              </div>
              <CardTitle className="text-xl md:text-2xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardDescription className="text-base leading-relaxed">
              {feature.description}
            </CardDescription>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20 py-16 bg-muted rounded-2xl">
        <h3 className="text-2xl md:text-3xl font-bold font-headline mb-4">
          Ready to Experience These Features?
        </h3>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Join thousands of professionals who are already transforming their careers with our innovative mentorship platform.
        </p>
        <a
          href="https://forms.gle/wjXgHh9WWozQHtJG7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          Get Early Access
        </a>
      </div>
    </div>
  );
}
