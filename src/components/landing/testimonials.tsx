import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "I don't know what questions they'll ask in interviews.",
    name: "Sarah Johnson",
    title: "Recent Graduate",
    initials: "SJ",
  },
  {
    quote: "I feel emotionally broken after ghosting.",
    name: "Michael Chen",
    title: "Job Seeker",
    initials: "MC",
  },
  {
    quote: "I don't even know what I don't know.",
    name: "Emily Rodriguez",
    title: "Career Changer",
    initials: "ER",
  },
  {
    quote: "I don't trust career services or agencies.",
    name: "Johnny Joestar",
    title: "Freelancer",
    initials: "JJ",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Does this sound familiar to you?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real thoughts from people looking for mentorship.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Mobile: Stack vertically */}
          <div className="block md:hidden space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full max-w-sm mx-auto">
                <TestimonialBubble testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Desktop: Scattered positioning */}
          <div className="hidden md:block min-h-[420px]">
            {/* First testimonial - top left */}
            <div className="absolute top-0 left-16">
              <TestimonialBubble testimonial={testimonials[0]} />
            </div>
            
            {/* Second testimonial - top right */}
            <div className="absolute top-8 right-20">
              <TestimonialBubble testimonial={testimonials[1]} />
            </div>
            
            {/* Third testimonial - middle left */}
            <div className="absolute top-44 left-36">
              <TestimonialBubble testimonial={testimonials[2]} />
            </div>
            
            {/* Fourth testimonial - bottom right */}
            <div className="absolute top-56 right-12">
              <TestimonialBubble testimonial={testimonials[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialBubble({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex items-start gap-4 max-w-sm">
      <Avatar className="w-14 h-14 flex-shrink-0">
        <AvatarFallback className="bg-primary/10 text-primary text-lg">
          {testimonial.initials}
        </AvatarFallback>
      </Avatar>
      
      <div className="relative">
        <div className="bg-card border rounded-2xl p-5 shadow-md">
          <p className="text-lg font-medium text-foreground leading-relaxed">
            "{testimonial.quote}"
          </p>
        </div>
        
        {/* Speech bubble tail */}
        <div className="absolute -left-2 top-5 w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-card border-b-[10px] border-b-transparent"></div>
        <div className="absolute -left-[11px] top-5 w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-border border-b-[10px] border-b-transparent"></div>
        
        <div className="mt-3 ml-4">
          <p className="text-base font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
}
