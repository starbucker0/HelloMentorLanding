import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

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

export default function ProcessPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">How HelloMentor Works</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          From profile creation to career transformation - see how our AI-powered mentorship platform guides you every step of the way.
        </p>
      </div>

      <div className="space-y-20">
        {processSteps.map((step, index) => (
          <div 
            key={step.step}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}
          >
            {/* Content */}
            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  {step.step}
                </div>
                <Badge variant="secondary" className="text-sm">
                  {step.highlight}
                </Badge>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                {step.title}
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Screenshot */}
            <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <Card className="overflow-hidden shadow-2xl">
                <CardContent className="p-0">
                  <Image
                    src={step.screenshot}
                    alt={`${step.title} - HelloMentor Process Step ${step.step}`}
                    width={762}
                    height={1364}
                    className="w-auto h-auto object-cover max-h-80 mx-auto"
                    data-ai-hint={`app screenshot showing ${step.title.toLowerCase()} interface`}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20 py-16 bg-muted rounded-2xl">
        <h3 className="text-2xl md:text-3xl font-bold font-headline mb-4">
          Ready to Start Your Mentorship Journey?
        </h3>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Join thousands of professionals who are already transforming their careers with AI-powered mentorship.
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
