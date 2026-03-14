import type { Metadata } from "next";
import {
  GraduationCap,
  Shield,
  Users,
  TrendingUp,
  BadgeCheck,
  Heart,
  IndianRupee,
  Linkedin,
  HeartHandshake,
  Sparkles,
  Target,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "About Us - Our Mission for Elder Care",
  description:
    "Work4U bridges generations — connecting caring college students with senior citizens who need daily help and companionship in Pune. Learn our story.",
};

const studentModelCards = [
  {
    icon: GraduationCap,
    title: "Earn While You Learn",
    description: "Students fund their education through meaningful caregiving work",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Shield,
    title: "Aadhar Verified",
    description: "Every caregiver submits Aadhar card and college ID — your family's safety comes first",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Users,
    title: "Generational Bond",
    description: "Young caregivers and seniors build real, lasting relationships based on respect",
    color: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: TrendingUp,
    title: "Trained in Elder Care",
    description: "Students learn patience, empathy, and professional caregiving skills",
    color: "bg-amber-500/10 text-amber-600",
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Background Checked",
    description: "Thorough identity verification and background checks for every caregiver",
  },
  {
    icon: BadgeCheck,
    title: "100% Aadhar Verified",
    description: "Government ID-verified caregivers for your family's complete peace of mind",
  },
  {
    icon: Heart,
    title: "Care with Purpose",
    description: "Every booking gives a senior companionship and helps a student fund their education",
  },
  {
    icon: IndianRupee,
    title: "Affordable for Families",
    description: "Quality elder care starting at ₹99 — because good care shouldn't be a luxury",
  },
];

const team = [
  { name: "Ajay Pathade", title: "Founder & CEO", color: "bg-primary" },
  { name: "Vivek Bhos", title: "Co-Founder & CTO", color: "bg-blue-600" },
  { name: "Vishnu Palaskar", title: "Co-Founder & COO", color: "bg-emerald-600" },
  { name: "Rahul Mane", title: "Co-Founder & CFO", color: "bg-violet-600" },
  { name: "Sudarshan Pathade", title: "Co-Founder & SMM", color: "bg-amber-600" },

];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-10 md:py-14 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/8 via-background to-secondary/5" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold tracking-wide uppercase mb-4">
            <Sparkles className="h-3 w-3" />
            Our Story
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            About <span className="text-primary">Work4U</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
            Bridging generations through compassionate elder care
          </p>
        </div>
      </section>

      {/* Mission & Vision - combined compact */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Who We Are */}
            <div className="rounded-2xl border border-border bg-card p-5 md:p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <HeartHandshake className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <h2 className="text-lg font-bold text-foreground">Who We Are</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Work4U was born from a simple observation — too many senior citizens
                in Pune live alone while their children work in other cities. We connect
                these elders with caring, Aadhar-verified college students who provide
                daily companionship, help with meals and medicines, and bring warmth
                to their everyday lives. Every service also supports a student&apos;s education.
              </p>
            </div>

            {/* Our Vision */}
            <div className="rounded-2xl border border-border bg-card p-5 md:p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10">
                  <Target className="h-5 w-5 text-secondary" strokeWidth={2} />
                </div>
                <h2 className="text-lg font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We envision a Pune where no senior citizen feels lonely or helpless at home.
                By building a trusted network of young, trained caregivers, we aim to make
                compassionate elder care accessible and affordable for every family —
                while giving students the dignity of earning through meaningful work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Student Helpers */}
      <section className="py-8 md:py-12 bg-surface">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Why Student Helpers?
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              A model that benefits everyone
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {studentModelCards.map((card) => (
              <div
                key={card.title}
                className="text-center bg-card rounded-xl border border-border p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className={`mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl ${card.color.split(" ")[0]}`}>
                  <card.icon className={`h-5 w-5 ${card.color.split(" ")[1]}`} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Why Choose Us
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Trust, quality, and impact in every service
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((card) => (
              <div
                key={card.title}
                className="flex items-start gap-3 bg-card rounded-xl border border-border p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <card.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-0.5">
                    {card.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-8 md:py-12 bg-surface">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Meet Our Team
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              The people behind Work4U
            </p>
          </div>
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="text-center bg-card rounded-xl border border-border p-4 hover:shadow-lg transition-shadow duration-200 group"
              >
                <div className={`mx-auto mb-2.5 flex h-14 w-14 items-center justify-center rounded-full ${member.color} text-white text-base font-bold shadow-md`}>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="text-sm font-semibold text-foreground leading-tight">
                  {member.name}
                </h3>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  {member.title}
                </p>
                <a
                  href="#"
                  aria-label={`${member.name}'s LinkedIn`}
                  className="inline-flex mt-2 h-7 w-7 items-center justify-center rounded-full bg-surface hover:bg-primary/10 transition-colors"
                >
                  <Linkedin className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Get In Touch
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Have questions? We&apos;d love to hear from you
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
