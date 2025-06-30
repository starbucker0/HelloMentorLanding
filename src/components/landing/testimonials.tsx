import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "This landing page template is a game-changer. The AI copy generator saved me hours of work, and the final result is stunning!",
    name: "Sarah Johnson",
    title: "Founder of TechNova",
    avatar: "https://placehold.co/40x40.png",
    initials: "SJ",
  },
  {
    quote: "I'm not a designer, but with this template, I was able to create a professional-looking site for my app in just a day. Highly recommended.",
    name: "Michael Chen",
    title: "Indie Developer",
    avatar: "https://placehold.co/40x40.png",
    initials: "MC",
  },
  {
    quote: "The clean layout and mobile-responsive design are top-notch. Our user engagement has visibly increased since we launched the new site.",
    name: "Emily Rodriguez",
    title: "Marketing Manager at InnovateCo",
    avatar: "https://placehold.co/40x40.png",
    initials: "ER",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Users Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real stories from developers and marketers who love our template.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-start gap-4 p-6">
                      <p className="text-muted-foreground">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
