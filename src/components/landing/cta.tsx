import { Button } from "@/components/ui/button";
import Link from "next/link";

// Replace this with your actual Google Form URL
const GOOGLE_FORM_URL = "https://forms.google.com/d/e/1FAIpQLSe_REPLACE_WITH_YOUR_FORM_ID/viewform";

export function Cta() {
  return (
    <section className="py-20 md:py-24 bg-muted">
      <div className="container text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Find the Right Mentor?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start today and find your mentor who can guide you through your career journey. Our platform connects you with experienced professionals ready to share their knowledge and insights.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                Request for early access
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
