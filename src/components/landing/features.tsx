import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenText, Palette, BarChartHorizontal, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "AI-Powered Copy",
    description: "Generate compelling marketing copy instantly with our integrated AI writing tool.",
  },
  {
    icon: <BookOpenText className="w-8 h-8 text-primary" />,
    title: "SEO-Optimized Blog",
    description: "Attract organic traffic with a built-in, content-rich blog platform.",
  },
  {
    icon: <Palette className="w-8 h-8 text-primary" />,
    title: "Modern UI/UX",
    description: "A visually appealing, mobile-responsive design that looks great on any device.",
  },
  {
    icon: <BarChartHorizontal className="w-8 h-8 text-primary" />,
    title: "Easy to Customize",
    description: "Built with Next.js and Tailwind CSS, making it simple to adapt to your brand.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Key Features</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to build and launch your application's website.
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
