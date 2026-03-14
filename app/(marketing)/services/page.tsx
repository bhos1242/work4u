import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  HeartHandshake,
  BookOpen,
  Monitor,
  Flower2,
  Sprout,
  PawPrint,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Elder Care & Home Services in Pune",
  description:
    "Compassionate elder care, home tutoring, and tech help by Aadhar-verified student caregivers in Pune. Trusted by 500+ families. Starting at ₹99.",
};

const activeServices = [
  {
    icon: HeartHandshake,
    title: "Elder Care & Companionship",
    description:
      "Your parents deserve more than just physical help — they need someone who listens, cares, and shows up every day. Our Aadhar-verified student caregivers are trained in patience, empathy, and elder-friendly communication. Whether it's sharing chai and conversation or helping with daily routines, we bring warmth to your loved one's day.",
    subServices: [
      "Daily companionship and meaningful conversation",
      "Meal preparation and feeding assistance",
      "Medicine reminders and health check-ins",
      "Light housekeeping and organizing",
      "Mobility support and morning/evening walks",
      "Reading newspapers and books aloud",
      "Accompanying to doctor visits and errands",
    ],
    cta: "/post-work?category=Senior+Citizens+Caretaking",
    ctaLabel: "Book Elder Care",
    featured: true,
    gradient: "from-emerald-500 to-teal-600",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  {
    icon: BookOpen,
    title: "Home Tutoring",
    description:
      "College students who bring fresh energy to learning. One-on-one tutoring at your doorstep, tailored to your child's pace and school curriculum.",
    subServices: [
      "Math tutoring (all levels)",
      "Science (Physics, Chemistry, Biology)",
      "Language coaching (English, Hindi, Marathi)",
      "Homework help and assignment guidance",
      "Exam preparation and study planning",
    ],
    cta: "/post-work?category=Personal+Home+Tutor",
    ctaLabel: "Book Tutoring",
    featured: false,
    gradient: "from-blue-500 to-indigo-600",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Monitor,
    title: "Tech Help for Seniors",
    description:
      "Smartphones, UPI payments, video calls with family — our patient, tech-savvy students help seniors stay connected and independent in the digital world.",
    subServices: [
      "Smartphone and tablet setup and training",
      "UPI, online banking, and bill payments",
      "Video calling setup (WhatsApp, Google Meet)",
      "Online form filling (government, banking, medical)",
      "Virus removal and phone security",
      "Email and social media guidance",
    ],
    cta: "/post-work?category=Computer%2FTech+Work",
    ctaLabel: "Book Tech Help",
    featured: false,
    gradient: "from-violet-500 to-purple-600",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
  },
];

const comingSoonServices = [
  {
    icon: Flower2,
    title: "Yoga & Gentle Exercise",
    description: "Personal yoga and light exercise sessions designed for seniors at home.",
  },
  {
    icon: Sprout,
    title: "Gardening Help",
    description: "Garden upkeep and plant care for seniors who love their green spaces.",
  },
  {
    icon: PawPrint,
    title: "Pet Care",
    description: "Pet walking, feeding, and companionship when seniors need a helping hand.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-10 md:py-14 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/8 via-background to-secondary/5" />
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-secondary/8 blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold tracking-wide uppercase mb-4">
            <Sparkles className="h-3 w-3" />
            Verified Student Helpers
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Elder Care & Home Services
          </h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
            Compassionate care for your loved ones by Aadhar-verified student caregivers in Pune
          </p>
        </div>
      </section>

      {/* Active Services */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 space-y-6">
          {activeServices.map((service) => (
            <div
              key={service.title}
              className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 ${
                service.featured
                  ? "border-primary/30 bg-card"
                  : "border-border bg-card"
              }`}
            >
              {/* Gradient accent bar */}
              <div className={`h-1 bg-linear-to-r ${service.gradient}`} />

              <div className="grid md:grid-cols-[280px_1fr] gap-0">
                {/* Left panel */}
                <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-linear-to-b from-surface to-card md:border-r border-border">
                  {service.featured && (
                    <Badge className="mb-3 bg-primary/10 text-primary border-0 text-xs font-semibold">
                      <Star className="h-3 w-3 mr-1 fill-primary" />
                      Most Popular
                    </Badge>
                  )}
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${service.iconBg} group-hover:scale-105 transition-transform`}>
                    <service.icon className={`h-8 w-8 ${service.iconColor}`} strokeWidth={1.8} />
                  </div>
                  <h2 className="mt-3 text-lg font-bold text-foreground text-center">
                    {service.title}
                  </h2>
                </div>

                {/* Right content */}
                <div className="p-5 md:p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-5">
                    {service.subServices.map((sub) => (
                      <div
                        key={sub}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-success shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="leading-snug">{sub}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary-dark h-10 px-5 font-semibold rounded-lg text-sm"
                  >
                    <Link href={service.cta}>
                      {service.ctaLabel}
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-8 md:py-12 bg-surface">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Coming Soon
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              We&apos;re expanding our service offerings
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {comingSoonServices.map((service) => (
              <div
                key={service.title}
                className="relative text-center bg-card rounded-xl border border-border p-5 opacity-75 hover:opacity-100 transition-opacity"
              >
                <Badge variant="secondary" className="mb-3 text-[10px] uppercase tracking-wider">
                  Coming Soon
                </Badge>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                  <service.icon className="h-6 w-6 text-muted-foreground" strokeWidth={2} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Don&apos;t see what you need?
          </p>
          <Button
            asChild
            size="sm"
            className="bg-[#25D366] text-white hover:bg-[#20BD5A] h-10 px-6 font-semibold rounded-lg text-sm"
          >
            <a
              href="https://wa.me/918421502803?text=Hi,%20I%20need%20help%20with..."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-1.5 h-4 w-4" />
              Contact us on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
