import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="py-20 md:py-24 bg-muted">
      <div className="container text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Build Your Perfect Landing Page?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start today and launch your web app with a site that converts. No credit card required.
          </p>
          <div className="mt-8">
            <Button size="lg">Get Started for Free</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
