import type { Metadata } from "next";
import {
  Clock,
  IndianRupee,
  TrendingUp,
  Heart,
  Sparkles,
  CheckCircle,
  GraduationCap,
  Shield,
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
    description: "Work around your class schedule",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: IndianRupee,
    title: "Fair Pay",
    description: "Competitive rates, paid after completion",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: TrendingUp,
    title: "Skill Building",
    description: "Gain real-world professional experience",
    color: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description: "Make a real difference in people's lives",
    color: "bg-pink-500/10 text-pink-600",
  },
];

const steps = [
  { num: "1", text: "Fill the registration form below" },
  { num: "2", text: "Verify your Aadhar & college ID" },
  { num: "3", text: "Get matched with tasks in your area" },
  { num: "4", text: "Complete tasks & get paid" },
];

export default function BeATaskerPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-10 md:py-14 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-secondary/8 via-background to-primary/5" />
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-secondary/8 blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-white text-xs font-semibold tracking-wide uppercase mb-4">
              <GraduationCap className="h-3 w-3" />
              For Students
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
              Earn While You <span className="gradient-text">Learn</span>
            </h1>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              Join 500+ college students earning through flexible, meaningful part-time work in Pune
            </p>
          </div>

          {/* Benefits row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex flex-col items-center text-center bg-card rounded-xl border border-border p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${b.color.split(" ")[0]} mb-2`}>
                  <b.icon className={`h-5 w-5 ${b.color.split(" ")[1]}`} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-0.5">{b.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-8 md:py-12 bg-surface">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">How to Join</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <span className="flex items-center justify-center h-9 w-9 rounded-full bg-primary text-white text-sm font-bold mb-2 shadow-md">
                    {step.num}
                  </span>
                  <p className="text-xs text-muted-foreground leading-snug">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What you need */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-5 w-5 text-primary" strokeWidth={2} />
                <h3 className="text-sm font-bold text-foreground">Requirements</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Currently enrolled in a Pune college",
                  "Valid Aadhar card for verification",
                  "College ID proof",
                  "Smartphone with WhatsApp",
                  "Available at least 2 hours/day",
                  "Good communication skills",
                ].map((req) => (
                  <div key={req} className="flex items-start gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-success shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-xs text-muted-foreground">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-8 md:py-12 bg-surface">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">
              Register as a Helper
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill out the form below to get started
            </p>
          </div>
          <TaskerRegistrationForm />
        </div>
      </section>
    </div>
  );
}
