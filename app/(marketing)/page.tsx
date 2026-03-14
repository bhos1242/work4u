import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Shield,
  Heart,
  IndianRupee,
  HeartHandshake,
  BookOpen,
  Monitor,
  MapPin,
  ClipboardList,
  Search,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { ServiceAreaSearch } from "@/components/service-area-search";

const trustItems = [
  {
    icon: Shield,
    title: "Aadhar Verified Helpers",
    description: "Every helper is identity-verified for your safety",
  },
  {
    icon: Heart,
    title: "Social Impact",
    description: "Supporting students through meaningful part-time work",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Quality services at student-friendly rates",
  },
];

const services = [
  {
    icon: HeartHandshake,
    title: "Caretaking for Seniors",
    description:
      "Compassionate care for your loved ones. Our trained student helpers provide companionship, assistance with daily activities, and peace of mind for families.",
    items: [
      "Daily companionship",
      "Meal assistance",
      "Medicine reminders",
      "Light housekeeping",
      "Mobility support",
    ],
  },
  {
    icon: BookOpen,
    title: "Home Tutoring",
    description:
      "Personalized tutoring sessions at your home. Our student helpers excel in academics and can help children build a strong foundation.",
    items: [
      "Math tutoring",
      "Science tutoring",
      "Language tutoring",
      "Homework help",
      "Exam preparation",
    ],
  },
  {
    icon: Monitor,
    title: "Computer & Tech Work",
    description:
      "Technology made simple. Our tech-savvy students help seniors and families with all their digital needs.",
    items: [
      "Software installation",
      "Phone/tablet setup",
      "Virus removal",
      "Data backup",
      "Online form filling",
    ],
  },
];

const steps = [
  {
    icon: ClipboardList,
    title: "Post Your Work",
    description:
      "Tell us what you need help with, your area, and preferred timing",
  },
  {
    icon: Search,
    title: "We Match You",
    description:
      "Our verified student helpers in your area are notified of your request",
  },
  {
    icon: CheckCircle,
    title: "Get It Done",
    description:
      "Your matched helper arrives and completes the work. Pay only after satisfaction",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Section 1 - Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-light to-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-5 items-center">
            <div className="md:col-span-3 space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
                Your Work, Our{" "}
                <span className="text-primary">Help</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Work4U provides verified student Helpers for Pune residents who
                need assistance with daily work at home. Most of our Helpers are
                college students — taking our services means you&apos;re helping
                a student earn while they learn.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary-dark min-h-12 px-8 font-semibold rounded-lg text-base"
                >
                  <Link href="/post-work">
                    Post a Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground min-h-12 px-8 font-semibold rounded-lg text-base"
                >
                  <Link href="/be-a-tasker">Apply For Work</Link>
                </Button>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <div className="relative w-full max-w-sm aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/40 flex items-center justify-center">
                <HeartHandshake
                  className="h-32 w-32 text-primary/60"
                  strokeWidth={1.5}
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-xl p-4 shadow-sm">
                  <p className="text-sm font-semibold text-foreground">
                    By Students, For Students, To The Society
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Trust Bar */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-3">
            {trustItems.map((item) => (
              <Card
                key={item.title}
                className="text-center border border-border hover:shadow-md transition-shadow duration-200"
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <item.icon
                      className="h-7 w-7 text-primary"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              From elder care to tech support, our student helpers are here for
              you
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 border border-border"
              >
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <service.icon
                      className="h-6 w-6 text-primary"
                      strokeWidth={2.5}
                    />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-success shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Service Areas */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Areas We Serve in Pune
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Currently available in these neighborhoods
            </p>
          </div>
          <ServiceAreaSearch />
        </div>
      </section>

      {/* Section 5 - How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              How It Works
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 relative z-10">
                  <step.icon
                    className="h-10 w-10 text-primary"
                    strokeWidth={2}
                  />
                </div>
                <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - Testimonials */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              What Our Users Say
            </h2>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Section 7 - CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
            Whether you need help at home or want to earn as a student helper
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 min-h-12 px-8 font-semibold rounded-lg text-base"
            >
              <Link href="/post-work">Post a Work</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 min-h-12 px-8 font-semibold rounded-lg text-base"
            >
              <Link href="/be-a-tasker">Become a Helper</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
