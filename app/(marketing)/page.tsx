import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Heart,
  HeartHandshake,
  BookOpen,
  Monitor,
  ArrowRight,
  Users,
  Award,
  Sparkles,
  Clock,
  MapPin,
  GraduationCap,
  ShieldCheck,
  HandHeart,
} from "lucide-react";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { ScrollRevealProvider } from "@/components/scroll-reveal-provider";

const ctas = [
  {
    href: "/post-work",
    title: "Request Care for My Loved One",
    desc: "Families looking for trusted, verified care for their senior loved ones.",
    icon: Heart,
    accent: "from-rose-500/15 to-pink-500/10",
    iconColor: "text-rose-600",
    iconBg: "bg-rose-500/10",
    label: "For Families",
  },
  {
    href: "/for-students",
    title: "Become a Student Caregiver",
    desc: "College students — especially girls — looking for safe, meaningful, flexible work.",
    icon: GraduationCap,
    accent: "from-violet-500/15 to-indigo-500/10",
    iconColor: "text-violet-600",
    iconBg: "bg-violet-500/10",
    label: "For Students",
  },
  {
    href: "/impact",
    title: "Support the Movement",
    desc: "Donors, CSR teams, NGOs, and well-wishers who want to contribute.",
    icon: HandHeart,
    accent: "from-emerald-500/15 to-teal-500/10",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-500/10",
    label: "For Supporters",
  },
];

const impactStats = [
  { label: "Seniors Supported", value: "500+" },
  { label: "Student Caregivers", value: "Growing" },
  { label: "Hours of Care Given", value: "Live" },
  { label: "Pune Areas Covered", value: "11+" },
];

const movementPoints = [
  "Real hands-on elder care experience",
  "Official Work4U Certificate of Social Service",
  "Flexible hours — morning, evening, weekend",
  "Small stipend — contribution from the family",
  "Personally trained by Amol Pawar (5 yrs caretaking)",
  "A community of like-minded, caring young people",
];

const girlPoints = [
  "50%+ girl caregivers in every batch",
  "Safe, Aadhaar-verified homes — every family screened",
  "Co-founder Sakshi Thorat leads the girl community",
  "Flexible, dignified work that fits college life",
  "Be the reason an elder feels less alone today",
  "100+ girl caregivers across Pune & growing",
];

const services = [
  {
    icon: HeartHandshake,
    image: "/images/elder-companion.png",
    title: "Elder Care & Companionship",
    description:
      "Daily companionship, meal help, medicine reminders, and doctor visits — so your loved ones feel safe and valued.",
  },
  {
    icon: BookOpen,
    image: "/images/tutoring.png",
    title: "Home Tutoring",
    description:
      "College students who make learning personal. One-on-one tutoring at your doorstep.",
  },
  {
    icon: Monitor,
    image: "/images/student-caregiver.png",
    title: "Tech Help for Seniors",
    description:
      "Phones, UPI, video calls — patient students teach elders to stay connected with family.",
  },
];

const team = [
  {
    name: "Ajay Pathade",
    role: "Founder",
    initials: "AP",
    bg: "bg-orange-500",
    quote:
      "I started Work4U because I saw two problems no one was connecting — lonely elders and purposeless students. We just needed to bridge them.",
  },
  {
    name: "Sakshi Thorat",
    role: "Co-Founder",
    initials: "ST",
    bg: "bg-pink-500",
    quote:
      "Care is a language everyone understands. I want Work4U to speak it louder than anyone — especially for the girls who join us.",
  },
  {
    name: "Vivek Bhos",
    role: "Co-Founder",
    initials: "VB",
    bg: "bg-blue-500",
    quote:
      "Technology should serve people, not the other way around. Work4U is proof of that.",
  },
  {
    name: "Amol Pawar",
    role: "Head of Operations",
    initials: "AP",
    bg: "bg-emerald-500",
    quote:
      "I have seen what loneliness does to elders. Work4U is the answer I wished had existed years ago.",
  },
  {
    name: "Avdhut Atre",
    role: "Advisor",
    initials: "AA",
    bg: "bg-violet-500",
    quote:
      "Social change needs both heart and system. Work4U has both.",
  },
];

export default function Home() {
  return (
    <ScrollRevealProvider>
      <div className="flex flex-col overflow-x-hidden">
        {/* ─── HERO ─── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-secondary/5 via-background to-accent/10" />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/20 blur-3xl" />

          <div className="max-w-6xl mx-auto px-4 pt-10 pb-12 md:pt-16 md:pb-16 relative z-10">
            {/* Award badge */}
            <div className="flex justify-center mb-6 fade-up">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber-700">
                <Award className="h-4 w-4" />
                2nd Place · Azim Premji University National Social Enterprise Challenge
              </div>
            </div>

            {/* Hero headline */}
            <div className="text-center max-w-3xl mx-auto space-y-4 fade-up">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-foreground">
                Every elder deserves <span className="gradient-text">company</span>.
                <br className="hidden sm:block" />
                Every student deserves <span className="gradient-text">purpose</span>.
                <br className="hidden sm:block" />
                We connect both.
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Work4U is a Pune-born social movement — not a company, not an app.
                A community of young people standing with elders who deserve warmth, not loneliness.
              </p>
              <p className="text-xs text-muted-foreground/80 italic">
                Social Initiative · No Profit, No Loss · Since Feb 2024
              </p>
            </div>

            {/* 3 CTAs */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-5xl mx-auto stagger-children">
              {ctas.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="group relative bg-card rounded-2xl border border-border p-5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1 flex flex-col"
                >
                  <div className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-linear-to-r ${c.accent}`} />
                  <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-3">
                    {c.label}
                  </span>
                  <div className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl ${c.iconBg}`}>
                    <c.icon className={`h-5 w-5 ${c.iconColor}`} strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-1">
                    {c.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    Join the Movement
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── LIVE IMPACT COUNTER ─── */}
        <section className="py-10 md:py-14 bg-surface relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 fade-up">
              <span className="section-badge mb-3">Our Impact So Far</span>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mt-3">
                Real People. Real Care. Real Change.
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto">
                Numbers updated as the movement grows across Pune.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 stagger-children">
              {impactStats.map((s) => (
                <div
                  key={s.label}
                  className="bg-card rounded-xl border border-border p-5 text-center hover:border-primary/30 transition-colors"
                >
                  <p className="text-2xl md:text-3xl font-extrabold text-primary">{s.value}</p>
                  <p className="text-[11px] md:text-xs text-muted-foreground uppercase tracking-wider mt-1.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── THE PROBLEM ─── */}
        <section className="py-10 md:py-14">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 fade-up">
              <span className="section-badge mb-3">Two Sides. One Solution.</span>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mt-3">
                The Problem Work4U Solves
              </h2>
            </div>
            <div className="grid gap-4 md:gap-6 md:grid-cols-2 stagger-children">
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-rose-500/10 mb-4">
                  <Heart className="h-5 w-5 text-rose-600" strokeWidth={2} />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">For Senior Citizens</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Lonely. Unsupported. Family living far away or too busy.
                  No trusted person to talk to, help with meals, or accompany to the doctor.
                  <span className="text-foreground font-semibold"> They deserve warmth, not loneliness.</span>
                </p>
              </div>
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 mb-4">
                  <GraduationCap className="h-5 w-5 text-violet-600" strokeWidth={2} />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">For Students & Youth</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Talented but underutilised. Especially girls and young women who want safe,
                  meaningful, flexible work during college.
                  <span className="text-foreground font-semibold"> They deserve opportunity, purpose, and a way to contribute.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── THE MOVEMENT ─── */}
        <section className="py-10 md:py-14 bg-surface relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="text-center mb-8 fade-up">
              <span className="section-badge mb-3">The Movement</span>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mt-3">
                Why Every Student Should Join
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
                Not an internship. Not a side hustle. A movement that puts care at the heart of growth.
              </p>
            </div>

            <div className="grid gap-4 md:gap-6 md:grid-cols-2 stagger-children">
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h3 className="text-base font-bold text-foreground">What You Gain as a Caregiver</h3>
                </div>
                <ul className="space-y-2.5">
                  {movementPoints.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/5 rounded-2xl border border-pink-200 p-6">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Heart className="h-5 w-5 text-pink-600" />
                  <h3 className="text-base font-bold text-foreground">Why Girls Are at the Heart of This</h3>
                </div>
                <ul className="space-y-2.5">
                  {girlPoints.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-pink-600 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center fade-up">
              <Button
                asChild
                size="lg"
                className="bg-primary text-white hover:bg-primary-dark h-12 md:h-13 px-7 font-semibold rounded-xl text-sm md:text-base shadow-lg shadow-primary/25"
              >
                <Link href="/for-students">
                  Become a Student Caregiver
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ─── WHAT WE DO ─── */}
        <section className="py-10 md:py-14">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 fade-up">
              <span className="section-badge mb-3">What We Do</span>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mt-3">
                Care That Feels Like Family
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto">
                Contribution-based. Free where the family cannot afford. Always rooted in care.
              </p>
            </div>
            <div className="grid gap-4 md:gap-6 md:grid-cols-3 stagger-children">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1"
                >
                  <div className="relative h-40 overflow-hidden bg-muted">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 backdrop-blur-sm shadow-md">
                      <s.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-foreground mb-1.5">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TRUST / SAFETY ─── */}
        <section className="py-10 md:py-14 bg-surface">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 fade-up">
              <span className="section-badge mb-3">Why Families Trust Us</span>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mt-3">
                Safety is Non-Negotiable
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 stagger-children">
              {[
                { icon: ShieldCheck, t: "Aadhaar Verified", d: "Every student caregiver is government-ID verified before joining." },
                { icon: Award, t: "National Recognition", d: "2nd Place at Azim Premji University Social Enterprise Challenge." },
                { icon: Users, t: "500+ Families Served", d: "Real proof of impact, not a promise. Updated live." },
              ].map((x) => (
                <div key={x.t} className="bg-card rounded-2xl border border-border p-6 text-center">
                  <div className="mx-auto mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <x.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-1.5">{x.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TEAM ─── */}
        <section className="py-10 md:py-14">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 fade-up">
              <span className="section-badge mb-3">The Team</span>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mt-3">
                Real People. Real Mission.
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto">
                Young Pune founders who believe care and opportunity should never be in short supply.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
              {team.map((m) => (
                <div key={m.name} className="bg-card rounded-2xl border border-border p-5 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`h-12 w-12 rounded-full ${m.bg} flex items-center justify-center text-white font-bold text-sm shadow`}>
                      {m.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{m.name}</p>
                      <p className="text-xs text-muted-foreground">{m.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    “{m.quote}”
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section className="py-10 md:py-14 bg-surface">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 fade-up">
              <span className="section-badge mb-3">Stories</span>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mt-3">
                Real Faces. Real Change.
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Seniors who found companionship. Students whose lives shifted.
              </p>
            </div>
            <div className="fade-up">
              <TestimonialsCarousel />
            </div>
          </div>
        </section>

        {/* ─── TRANSPARENCY ─── */}
        <section className="py-10 md:py-14">
          <div className="max-w-3xl mx-auto px-4 text-center fade-up">
            <div className="inline-flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-primary" />
              <span className="section-badge">Fully Social, Fully Open</span>
            </div>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              We do not earn profit from your care.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Contribution-based — free where the family cannot afford.
              Annual impact report published openly once registration completes (July–August 2026).
              Section 8 Company registration in process. Transparent on every step.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 text-emerald-700 px-3 py-1.5 font-semibold">
                <Clock className="h-3.5 w-3.5" /> Since Feb 2024
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1.5 font-semibold">
                <MapPin className="h-3.5 w-3.5" /> Pune, Maharashtra
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 text-amber-700 px-3 py-1.5 font-semibold">
                <Award className="h-3.5 w-3.5" /> Azim Premji 2nd Place
              </span>
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-secondary-dark via-secondary to-primary-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,122,87,0.3),transparent_60%)]" />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              Be Part of This
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/85 max-w-xl mx-auto">
              Whether you need care for a loved one, want meaningful work, or want to back the mission — there is a door for you.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-white text-secondary-dark hover:bg-white/90 h-12 md:h-13 px-7 font-bold rounded-xl text-sm md:text-base shadow-xl"
              >
                <Link href="/post-work">
                  Request Care
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 bg-transparent h-12 md:h-13 px-7 font-bold rounded-xl text-sm md:text-base"
              >
                <Link href="/for-students">
                  Become a Caregiver
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
