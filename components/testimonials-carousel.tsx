"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Shivraj Deshpande",
    location: "Pune",
    rating: 5,
    text: "Work4U-Services has been a lifesaver! As a busy professional, I don't always have time to take care of household chores. The student helpers are polite, punctual, and very hardworking. I feel good knowing that I'm also helping students earn while they study.",
    initials: "SD",
    color: "bg-emerald-500",
  },
  {
    name: "Yuvraj Kokate",
    location: "Pune",
    rating: 4,
    text: "I've been using Work4U for tutoring services, and I'm extremely satisfied with the experience. The tutor assigned to my daughter was patient, knowledgeable, and made learning fun. The fact that they are college students brings a fresh and relatable approach to teaching.",
    initials: "YK",
    color: "bg-blue-500",
  },
  {
    name: "Komal Ghadage",
    location: "Pune",
    rating: 4.5,
    text: "Work4U has provided me with a flexible way to earn extra income while pursuing my studies. The platform is easy to use, and I love the variety of tasks available. It's rewarding to help families while gaining real-world experience.",
    initials: "KG",
    color: "bg-violet-500",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= Math.floor(rating)
              ? "text-warning fill-warning"
              : star - 0.5 <= rating
              ? "text-warning fill-warning/50"
              : "text-gray-200"
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

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
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

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-8" : "bg-border w-2.5"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
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
    <div className="relative bg-card rounded-2xl border border-border p-6 sm:p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
      {/* Quote icon */}
      <Quote className="h-10 w-10 text-primary/10 mb-4" strokeWidth={2} fill="currentColor" />

      <p className="text-sm text-foreground leading-relaxed mb-6">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`h-11 w-11 rounded-full ${testimonial.color} flex items-center justify-center text-white text-sm font-bold shadow-md`}>
            {testimonial.initials}
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.location}</p>
          </div>
        </div>
        <StarRating rating={testimonial.rating} />
      </div>
    </div>
  );
}
