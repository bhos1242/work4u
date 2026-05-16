import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Heart,
  ShieldCheck,
  UserCheck,
  ArrowRight,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { ScrollRevealProvider } from "@/components/scroll-reveal-provider";

export const metadata: Metadata = {
  title: "For Seniors & Families — Trusted Care in Pune",
  description:
    "Aadhaar-verified student caregivers for your senior loved ones in Pune. Daily companionship, meal help, doctor visits. Contribution-based. Trusted by 500+ families.",
};

const visitIncludes = [
  "Warm conversation and company",
  "Meal preparation and feeding help",
  "Medicine reminders and health check-ins",
  "Walks, mobility support, light housekeeping",
  "Doctor visit accompaniment",
  "Reading aloud — newspaper, books, letters",
];

const safetyPoints = [
  { icon: ShieldCheck, t: "Aadhaar Verified", d: "Every caregiver submits government ID before joining." },
  { icon: UserCheck, t: "Personally Trained", d: "Each student trained by Amol Pawar — 5 years of caretaking expertise." },
  { icon: Heart, t: "Code of Conduct", d: "Every caregiver signs a respect-and-safety pledge before their first visit." },
];

const steps = [
  { num: "01", t: "Tell Us About Your Loved One", d: "Share area, timings, and what kind of care you need — via the form or WhatsApp." },
  { num: "02", t: "We Match a Verified Caregiver", d: "A trained student caregiver in your area is matched within hours." },
  { num: "03", t: "Care Begins", d: "Caregiver arrives, builds a bond with your loved one. Contribution-based — pay what feels right after care." },
];

export default function ForSeniorsPage() {
  return (
    <ScrollRevealProvider>
      <div className="flex flex-col overflow-x-hidden">
        {/* HERO */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-rose-500/5 via-background to-pink-500/10" />
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-5 fade-up">
                <span className="section-badge">For Families</span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-foreground">
                  Your parents deserve <span className="gradient-text">warmth</span>, not loneliness.
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
                  When family lives far away or stays busy, your elders shouldn&apos;t face the day alone.
                  Work4U brings a trusted, verified student caregiver to their side — for companionship,
                  daily help, and the small things that mean everything.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="bg-primary text-white hover:bg-primary-dark h-12 px-6 font-semibold rounded-xl shadow-lg shadow-primary/25">
                    <Link href="/post-work">
                      Request Care for My Loved One
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white h-12 px-6 font-semibold rounded-xl">
                    <a href="https://wa.me/918421502803" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  Contribution-based · Free where the family cannot afford
                </p>
              </div>
              <div className="hidden lg:block relative w-full max-w-[500px] aspect-[6/5] rounded-3xl overflow-hidden border border-border shadow-2xl shadow-primary/10 fade-up">
                <Image src="/images/elder-companion.png" alt="Elder care companion" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-lg font-bold text-white">Care That Feels Like Family</h3>
                  <p className="text-sm text-white/90 mt-1">Trained students. Verified homes. Real bonds.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT A VISIT INCLUDES */}
        <section className="py-10 md:py-14 bg-surface">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 fade-up">
              <span className="section-badge mb-3">What to Expect</span>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mt-3">
                A Caregiver Visit Includes
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto">
                Every visit is shaped around your loved one&apos;s needs and routine.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto stagger-children">
              {visitIncludes.map((v) => (
                <div key={v} className="flex items-start gap-3 bg-card rounded-xl border border-border p-4">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-sm text-foreground leading-relaxed">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SAFETY */}
        <section className="py-10 md:py-14">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 fade-up">
              <span className="section-badge mb-3">Safety First</span>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mt-3">
                Why Families Trust Us
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 stagger-children">
              {safetyPoints.map((s) => (
                <div key={s.t} className="bg-card rounded-2xl border border-border p-6 text-center">
                  <div className="mx-auto mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <s.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-1.5">{s.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW TO ENROLL */}
        <section className="py-10 md:py-14 bg-surface">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 fade-up">
              <span className="section-badge mb-3">3 Simple Steps</span>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mt-3">
                How to Enroll
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3 stagger-children">
              {steps.map((s) => (
                <div key={s.num} className="bg-card rounded-2xl border border-border p-6 text-center">
                  <p className="text-3xl font-extrabold text-primary mb-2">{s.num}</p>
                  <h3 className="text-base font-bold text-foreground mb-1.5">{s.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-secondary-dark via-secondary to-primary-dark" />
          <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Bring Care Home Today
            </h2>
            <p className="mt-3 text-sm text-white/85">
              WhatsApp us — we respond within the hour during the day.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Button asChild size="lg" className="bg-white text-secondary-dark hover:bg-white/90 h-12 px-7 font-bold rounded-xl shadow-xl">
                <a href="https://wa.me/918421502803" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp +91 84215 02803
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 bg-transparent h-12 px-7 font-bold rounded-xl">
                <Link href="/post-work">
                  Request Care
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </ScrollRevealProvider>
  );
}
