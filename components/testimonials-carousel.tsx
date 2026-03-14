"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Shivraj Deshpande",
    location: "Pune",
    rating: 5,
    text: "Work4U-Services has been a lifesaver! As a busy professional, I don't always have time to take care of household chores. The student helpers are polite, punctual, and very hardworking. I feel good knowing that I'm also helping students earn while they study.",
  },
  {
    name: "Yuvraj Kokate",
    location: "Pune",
    rating: 4,
    text: "I've been using Work4U for tutoring services, and I'm extremely satisfied with the experience. The tutor assigned to my daughter was patient, knowledgeable, and made learning fun. The fact that they are college students brings a fresh and relatable approach to teaching.",
  },
  {
    name: "Komal Ghadage",
    location: "Pune",
    rating: 4.5,
    text: "Work4U has provided me with a flexible way to earn extra income while pursuing my studies. The platform is easy to use, and I love the variety of tasks available. It's rewarding to help families while gaining real-world experience.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-5 w-5 ${
            star <= Math.floor(rating)
              ? "text-warning fill-warning"
              : star - 0.5 <= rating
              ? "text-warning fill-warning/50"
              : "text-gray-300"
          }`}
          strokeWidth={2}
        />
      ))}
    </div>
  );
}

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Desktop: show all cards */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>

      {/* Mobile: carousel */}
      <div className="md:hidden">
        <TestimonialCard testimonial={testimonials[current]} />
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === current ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <Card className="border border-border">
      <CardContent className="pt-6 pb-6 px-6">
        <Quote className="h-8 w-8 text-primary/30 mb-4" strokeWidth={2} />
        <p className="text-sm text-foreground leading-relaxed mb-6">
          &ldquo;{testimonial.text}&rdquo;
        </p>
        <StarRating rating={testimonial.rating} />
        <div className="mt-3">
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">
            {testimonial.location}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
