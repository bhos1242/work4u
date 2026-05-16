import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Award,
  Users,
  Heart,
  MapPin,
  TrendingUp,
  HandHeart,
  ArrowRight,
  Sparkles,
  Building2,
  GraduationCap,
} from "lucide-react";
import { ScrollRevealProvider } from "@/components/scroll-reveal-provider";

export const metadata: Metadata = {
  title: "Impact — How Work4U is Changing Lives in Pune",
  description:
    "500+ families served. 100+ student caregivers. Stories, numbers, and the road ahead for Work4U — a social initiative born in Pune.",
};

const numbers = [
  { v: "500+", l: "Seniors Supported", icon: Heart },
  { v: "100+", l: "Student Caregivers", icon: Users },
  { v: "Live", l: "Hours of Care", icon: TrendingUp },
  { v: "11+", l: "Pune Areas", icon: MapPin },
];

const milestones = [
  {
    date: "Feb 2024",
    t: "Work4U is Born",
    d: "Young people in Pune set out to bridge two problems no one was connecting — lonely elders and purposeless students.",
  },
  {
    date: "2024",
    t: "2nd Place — Azim Premji University",
    d: "National Social Enterprise Idea Challenge. Validated nationally as a real solution worth building.",
  },
  {
    date: "2024",
    t: "500+ Families Served",
    d: "First run delivers real care across 11+ Pune neighborhoods. Real bonds. Real impact.",
  },
  {
    date: "2026",
    t: "Relaunch as Social Initiative",
    d: "No profit, no loss. Section 8 Company in process. Full transparency, full commitment.",
  },
  {
    date: "Jul–Aug 2026",
    t: "First Annual Impact Report",
    d: "Open, public, audited. Every rupee accounted for.",
  },
];

const supportWays = [
  {
    icon: HandHeart,
    t: "Individual Donations",
    d: "Any contribution fuels caregiver stipends, training, and the team that keeps the movement going.",
  },
  {
    icon: Building2,
    t: "CSR Partnerships",
    d: "Infosys, TCS, Bajaj CSR — we welcome partners who want measurable, transparent social impact in Pune.",
  },
  {
    icon: GraduationCap,
    t: "College Partnerships",
    d: "Bring Work4U to your campus. Build a caregiver chapter. Open meaningful work for your students.",
  },
];

export default function ImpactPage() {
  return (
    <ScrollRevealProvider>
      <div className="flex flex-col overflow-x-hidden">
        {/* HERO */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 via-background to-teal-500/10" />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-4 fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber-700">
              <Award className="h-4 w-4" />
              2nd Place · Azim Premji University National Social Enterprise Challenge
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-foreground">
              Real <span className="gradient-text">Impact</span>. Real Numbers. Real People.
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Work4U is a Pune-born social initiative — no profit, no loss. Here is what the
              movement has done, and where it is going next.
            </p>
          </div>
        </section>

        {/* NUMBERS */}
        <section className="py-10 md:py-14 bg-surface">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 fade-up">
              <span className="section-badge mb-3">By the Numbers</span>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mt-3">
                What We&apos;ve Done So Far
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 stagger-children">
              {numbers.map((n) => (
                <div key={n.l} className="bg-card rounded-2xl border border-border p-5 text-center">
                  <div className="mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <n.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                  </div>
                  <p className="text-2xl md:text-3xl font-extrabold text-primary">{n.v}</p>
                  <p className="text-[11px] md:text-xs text-muted-foreground uppercase tracking-wider mt-1.5">
                    {n.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MILESTONES */}
        <section className="py-10 md:py-14">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-8 fade-up">
              <span className="section-badge mb-3">Milestones</span>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mt-3">
                Two Years. One Movement.
              </h2>
            </div>
            <div className="space-y-4 stagger-children">
              {milestones.map((m) => (
                <div key={m.t} className="bg-card rounded-2xl border border-border p-5 sm:p-6 flex gap-4">
                  <div className="shrink-0">
                    <div className="inline-flex flex-col items-center justify-center h-16 w-16 rounded-xl bg-primary/10 text-primary">
                      <span className="text-[10px] font-semibold uppercase tracking-wider">
                        {m.date.split(" ")[0]}
                      </span>
                      <span className="text-sm font-bold leading-none mt-0.5">
                        {m.date.split(" ")[1] || ""}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1">{m.t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STORIES PLACEHOLDER */}
        <section className="py-10 md:py-14 bg-surface">
          <div className="max-w-3xl mx-auto px-4 text-center fade-up">
            <span className="section-badge mb-3">Stories Coming Soon</span>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mt-3">
              Faces Behind the Numbers
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Real seniors who found companionship. Real students — especially girls — whose lives
              changed through meaningful work. Updated monthly with photos and names (with permission).
            </p>
            <p className="mt-3 text-xs text-muted-foreground italic">
              Have a story to share? WhatsApp us at +91 84215 02803.
            </p>
          </div>
        </section>

        {/* TRANSPARENCY */}
        <section className="py-10 md:py-14">
          <div className="max-w-3xl mx-auto px-4 text-center fade-up">
            <span className="section-badge mb-3">Fully Social, Fully Open</span>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mt-3">
              Where Every Rupee Goes
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Work4U does not earn profit from your care. Contribution-based, free where the family
              cannot afford. Every donation and CSR rupee goes to caregiver stipends, training,
              and operations. Annual impact report published openly once Section 8 registration completes.
            </p>
          </div>
        </section>

        {/* WAYS TO SUPPORT */}
        <section className="py-10 md:py-14 bg-surface">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 fade-up">
              <span className="section-badge mb-3">Support the Movement</span>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mt-3">
                Three Ways to Stand With Us
              </h2>
            </div>
            <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
              {supportWays.map((s) => (
                <div key={s.t} className="bg-card rounded-2xl border border-border p-6">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <s.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-1.5">{s.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center fade-up">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary-dark h-12 px-7 font-semibold rounded-xl shadow-lg shadow-primary/25">
                <a href="https://wa.me/918421502803" target="_blank" rel="noopener noreferrer">
                  Talk to the Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FUTURE */}
        <section className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-secondary-dark via-secondary to-primary-dark" />
          <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <Sparkles className="h-5 w-5 text-white" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                Where We&apos;re Going
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              From Pune to Every City That Needs This.
            </h2>
            <p className="mt-3 text-sm text-white/85 max-w-xl mx-auto">
              The mission is bigger than us. Help us scale care without losing heart.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Button asChild size="lg" className="bg-white text-secondary-dark hover:bg-white/90 h-12 px-7 font-bold rounded-xl shadow-xl">
                <Link href="/for-students">
                  Become a Caregiver
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
