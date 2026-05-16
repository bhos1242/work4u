import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Heart,
  ShieldCheck,
  Clock,
  Award,
  Users,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { ScrollRevealProvider } from "@/components/scroll-reveal-provider";

export const metadata: Metadata = {
  title: "Become a Student Caregiver — Join the Movement",
  description:
    "Safe, flexible, meaningful work for college students in Pune — especially girls. Hands-on elder care experience, certificate, small stipend, real community.",
};

const gains = [
  { icon: Heart, t: "Real Elder Care Experience", d: "Hands-on work that no classroom can give you." },
  { icon: Award, t: "Certificate of Social Service", d: "Official Work4U certificate to carry forward." },
  { icon: Clock, t: "Flexible Hours", d: "Morning, evening, weekend slots — fits college life." },
  { icon: GraduationCap, t: "Personal Training", d: "Trained by Amol Pawar before your first assignment." },
  { icon: Users, t: "A Real Community", d: "100+ young caregivers across Pune doing meaningful work." },
  { icon: Sparkles, t: "A Story Worth Telling", d: "Goes in every interview, every application." },
];

const girlsPoints = [
  "Work4U commits to 50%+ girl caregivers in every batch",
  "Every family and caregiver is Aadhaar-screened",
  "Co-founder Sakshi Thorat personally leads the girl community",
  "Flexible, dignified work that fits your college schedule",
  "Empathy and care — strengths you already have, valued here",
  "A growing sisterhood of 100+ caregivers across Pune",
];

const steps = [
  { num: "01", t: "Apply Online", d: "Quick form — name, college, area, availability." },
  { num: "02", t: "Verification & Training", d: "Aadhaar verified. Personally trained by Amol Pawar." },
  { num: "03", t: "Your First Visit", d: "Matched with a family near you. Care begins. Stipend follows." },
];

export default function ForStudentsPage() {
  return (
    <ScrollRevealProvider>
      <div className="flex flex-col overflow-x-hidden">
        {/* HERO */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-violet-500/5 via-background to-pink-500/10" />
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-5 fade-up">
                <span className="section-badge">For Students & Girls</span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-foreground">
                  Be someone&apos;s reason to <span className="gradient-text">smile</span> today.
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
                  Real hands-on experience. A certificate. A small stipend. A community of young people
                  doing something that actually matters. Especially for girls in Pune who want
                  safe, flexible, meaningful work during college.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="bg-primary text-white hover:bg-primary-dark h-12 px-6 font-semibold rounded-xl shadow-lg shadow-primary/25">
                    <Link href="/be-a-tasker">
                      Be Part of This
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white h-12 px-6 font-semibold rounded-xl">
                    <a href="https://wa.me/918421502803" target="_blank" rel="noopener noreferrer">
                      WhatsApp Sakshi
                    </a>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  Aadhaar verified · Trained before first visit · Safe by design
                </p>
              </div>
              <div className="hidden lg:block relative w-full max-w-[500px] aspect-[6/5] rounded-3xl overflow-hidden border border-border shadow-2xl shadow-primary/10 fade-up">
                <Image src="/images/student-caregiver.png" alt="Student caregivers" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-lg font-bold text-white">Care. Confidence. Community.</h3>
                  <p className="text-sm text-white/90 mt-1">Built for college students in Pune — especially girls.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT YOU GAIN */}
        <section className="py-10 md:py-14 bg-surface">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 fade-up">
              <span className="section-badge mb-3">What You Gain</span>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mt-3">
                More Than Work. A Whole Experience.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
              {gains.map((g) => (
                <div key={g.t} className="bg-card rounded-2xl border border-border p-5">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <g.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-1.5">{g.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{g.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY GIRLS */}
        <section className="py-10 md:py-14">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="fade-up">
                <span className="section-badge mb-3">Why Girls Are at the Heart of This</span>
                <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mt-3 mb-4">
                  Built to be a Safe Space for Girls
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Work4U values empathy — a strength women bring naturally. Sakshi Thorat,
                  our co-founder and a health-and-wellness creator with 20,000+ followers,
                  leads the girl caregiver community personally.
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/5 rounded-2xl border border-pink-200 p-6 fade-up">
                <ul className="space-y-2.5">
                  {girlsPoints.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                      <Heart className="h-4 w-4 text-pink-600 shrink-0 mt-0.5" strokeWidth={2} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* HOW TO APPLY */}
        <section className="py-10 md:py-14 bg-surface">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 fade-up">
              <span className="section-badge mb-3">3 Simple Steps</span>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mt-3">
                How to Join the Movement
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
              Join 100+ Young Caregivers in Pune
            </h2>
            <p className="mt-3 text-sm text-white/85">
              Apply once. Be matched fast. Start making a difference next week.
            </p>
            <div className="mt-6 flex justify-center">
              <Button asChild size="lg" className="bg-white text-secondary-dark hover:bg-white/90 h-12 px-7 font-bold rounded-xl shadow-xl">
                <Link href="/be-a-tasker">
                  Be Part of This
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
