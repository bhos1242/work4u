import type { Metadata } from "next";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Clock,
  IndianRupee,
  TrendingUp,
  Heart,
} from "lucide-react";
import { TaskerRegistrationForm } from "@/components/tasker-registration-form";

export const metadata: Metadata = {
  title: "Become a Helper",
  description:
    "Join Work4U as a student helper. Earn while you learn with flexible part-time work opportunities in Pune.",
};

const benefits = [
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Work around your class schedule. You choose when and how much you work.",
  },
  {
    icon: IndianRupee,
    title: "Fair Pay",
    description: "Earn competitive rates for your services. Get paid directly after task completion.",
  },
  {
    icon: TrendingUp,
    title: "Skill Building",
    description: "Gain real-world experience and build professional skills while still in college.",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description: "Make a real difference in people's lives while supporting your own education.",
  },
];

export default function BeATaskerPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-linear-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            Become a Work4U Helper
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Earn while you learn — join our community of student helpers
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <Card key={b.title} className="text-center border border-border">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <b.icon className="h-7 w-7 text-primary" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {b.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Register as a Helper
            </h2>
            <p className="mt-3 text-muted-foreground">
              Fill out the form below to get started
            </p>
          </div>
          <TaskerRegistrationForm />
        </div>
      </section>
    </div>
  );
}
