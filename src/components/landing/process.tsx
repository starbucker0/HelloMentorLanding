import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const processSteps = [
  {
    step: 1,
    title: "Profile Setup",
    description: "Create your profile with goals, interests, and background. Our AI analyzes your needs to find the perfect mentor match.",
    screenshot: "/images/process/step1-profile.png",
    highlight: "Smart matching algorithm"
  },
  {
    step: 2,
    title: "AI-Powered Matching",
    description: "Get matched with mentors based on your specific goals, industry, and personality. Like Tinder, but for meaningful career connections.",
    screenshot: "/images/process/step2-matching.png",
    highlight: "Hyper-specific matching"
  },
  {
    step: 3,
    title: "Structured Mentorship",
    description: "Follow AI-suggested frameworks and weekly goals. Your mentor gets guidance on what to focus on each session for maximum impact.",
    screenshot: "/images/process/step3-sessions.png",
    highlight: "AI-assisted journey design"
  },
  {
    step: 4,
    title: "Track Progress",
    description: "Set concrete goals like 'land 3 interviews' or 'write targeted resume' and track real progress with measurable outcomes.",
    screenshot: "/images/process/step4-progress.png",
    highlight: "Trackable transformation"
  },
  {
    step: 5,
    title: "Community & Growth",
    description: "Join group challenges, share reflections, and build lasting connections. Make mentorship a habit, not just occasional chats.",
    screenshot: "/images/process/step5-community.png",
    highlight: "Mentorship-as-a-ritual"
  }
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">How HelloMentor Works</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From profile creation to career transformation - see how our AI-powered mentorship platform guides you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step) => (
            <Card key={step.step} className="p-6 shadow-lg h-full">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {step.step}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {step.highlight}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold font-headline">
                  {step.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/process">
              See Detailed Walkthrough
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
