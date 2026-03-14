import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our range of home services including senior caretaking, home tutoring, and computer/tech support by verified student helpers in Pune.",
};

const activeServices = [
  {
    icon: HeartHandshake,
    title: "Caretaking for Seniors",
    description:
      "Compassionate, trained student helpers provide daily care and companionship for senior citizens. Our helpers are patient, respectful, and committed to making every day comfortable for your loved ones.",
    subServices: [
      "Daily companionship and conversation",
      "Meal preparation and feeding assistance",
      "Medicine reminders and health monitoring",
      "Light housekeeping and organizing",
      "Mobility support and walking assistance",
      "Reading newspapers/books aloud",
      "Accompanying to doctor visits",
    ],
    cta: "/post-work?category=Senior+Citizens+Caretaking",
    ctaLabel: "Book Caretaking",
    featured: true,
  },
  {
    icon: BookOpen,
    title: "Home Tutoring",
    description:
      "Personalized one-on-one tutoring at your home by college students who excel in academics.",
    subServices: [
      "Math tutoring (all levels)",
      "Science tutoring (Physics, Chemistry, Biology)",
      "Language tutoring (English, Hindi, Marathi)",
      "Homework help and assignment guidance",
      "Exam preparation and study planning",
    ],
    cta: "/post-work?category=Personal+Home+Tutor",
    ctaLabel: "Book Tutoring",
    featured: false,
  },
  {
    icon: Monitor,
    title: "Computer & Tech Work",
    description:
      "Tech-savvy student helpers make technology stress-free for seniors and families.",
    subServices: [
      "Software installation and updates",
      "Virus removal and security setup",
      "Phone and tablet troubleshooting",
      "Data backup and recovery",
      "Online form filling (government, banking)",
      "Email and social media setup",
    ],
    cta: "/post-work?category=Computer%2FTech+Work",
    ctaLabel: "Book Tech Help",
    featured: false,
  },
];

const comingSoonServices = [
  {
    icon: Flower2,
    title: "Yoga Training",
    description: "Personal yoga sessions at home for seniors and families.",
  },
  {
    icon: Sprout,
    title: "Gardening",
    description: "Garden maintenance and plant care services.",
  },
  {
    icon: PawPrint,
    title: "Pet Care",
    description: "Pet walking, feeding, and basic care services.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-linear-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive home services by verified student helpers
          </p>
        </div>
      </section>

      {/* Active Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-8">
          {activeServices.map((service) => (
            <Card
              key={service.title}
              className={`overflow-hidden ${
                service.featured ? "border-2 border-primary" : "border border-border"
              }`}
            >
              <div className="grid md:grid-cols-3">
                <CardHeader className="md:col-span-1 bg-surface flex flex-col items-center justify-center py-10">
                  {service.featured && (
                    <Badge className="mb-4 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <service.icon
                      className="h-10 w-10 text-primary"
                      strokeWidth={2}
                    />
                  </div>
                  <CardTitle className="mt-4 text-xl text-center">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="md:col-span-2 py-8 px-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2 mb-6">
                    {service.subServices.map((sub) => (
                      <div
                        key={sub}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-success shrink-0" />
                        {sub}
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary-dark min-h-12 px-6 font-semibold rounded-lg"
                  >
                    <Link href={service.cta}>
                      {service.ctaLabel}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Coming Soon
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              We&apos;re expanding our service offerings
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {comingSoonServices.map((service) => (
              <Card
                key={service.title}
                className="text-center border border-border opacity-80"
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <Badge variant="secondary" className="mb-4">
                    Coming Soon
                  </Badge>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                    <service.icon
                      className="h-7 w-7 text-muted-foreground"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Don&apos;t see what you need?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] text-white hover:bg-[#20BD5A] min-h-12 px-8 font-semibold rounded-lg text-base"
          >
            <a
              href="https://wa.me/918421502803?text=Hi,%20I%20need%20help%20with..."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact us on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
