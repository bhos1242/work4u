import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Heart,
  IndianRupee,
  HeartHandshake,
  BookOpen,
  Monitor,
  ClipboardList,
  Search,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Users,
  Star,
} from "lucide-react";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { ServiceAreaSearch } from "@/components/service-area-search";
import { ScrollRevealProvider } from "@/components/scroll-reveal-provider";
import { ApplyWorkButton } from "@/components/apply-work-button";

const trustItems = [
  {
    icon: Shield,
    title: "Aadhar Verified",
    description: "Every caregiver is government ID-verified so your family stays safe",
    stat: "100%",
    statLabel: "Verified",
  },
  {
    icon: Heart,
    title: "Trained Caregivers",
    description: "Students trained in elder care — patience, empathy, and respect come first",
    stat: "500+",
    statLabel: "Families Served",
  },
  {
    icon: IndianRupee,
    title: "Affordable Care",
    description: "Quality elder care that doesn't burden your family's budget",
    stat: "₹99",
    statLabel: "Starting From",
  },
];

const services = [
  {
    icon: HeartHandshake,
    image: "/images/elder-companion.png",
    title: "Elder Care & Companionship",
    description:
      "Your parents deserve warmth, not loneliness. Our trained student caregivers provide daily companionship, meal help, and gentle care so your loved ones feel safe and valued.",
    items: [
      "Daily companionship & conversation",
      "Meal prep & feeding assistance",
      "Medicine reminders",
      "Mobility & walking support",
      "Doctor visit accompaniment",
    ],
    color: "from-emerald-500/10 to-teal-500/10",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  {
    icon: BookOpen,
    image: "/images/tutoring.png",
    title: "Home Tutoring",
    description:
      "College students who make learning personal. One-on-one tutoring at your doorstep for children of all ages.",
    items: [
      "Math & Science",
      "English & Languages",
      "Homework guidance",
      "Exam preparation",
      "Skill-based learning",
    ],
    color: "from-blue-500/10 to-indigo-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Monitor,
    image: "/images/student-caregiver.png",
    title: "Tech Help for Seniors",
    description:
      "Smartphones, UPI, video calls — our tech-savvy students patiently teach and troubleshoot so elders stay connected with family.",
    items: [
      "Phone & tablet setup",
      "UPI & online banking help",
      "Video calling setup",
      "Online form filling",
      "Virus removal & security",
    ],
    color: "from-violet-500/10 to-purple-500/10",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
  },
];

const steps = [
  {
    icon: ClipboardList,
    title: "Tell Us What You Need",
    description:
      "Share what care or help your family needs — area, timing, and budget",
    num: "01",
  },
  {
    icon: Search,
    title: "We Match a Caregiver",
    description:
      "A verified, trained student caregiver in your area is assigned within hours",
    num: "02",
  },
  {
    icon: CheckCircle,
    title: "Care Begins",
    description:
      "Your caregiver arrives and your family gets the help they deserve. Pay after satisfaction",
    num: "03",
  },
];

export default function Home() {
  return (
    <ScrollRevealProvider>
      <div className="flex flex-col overflow-x-hidden">
        {/* ─── HERO ─── */}
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 bg-linear-to-br from-secondary/5 via-background to-accent/10" />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/20 blur-3xl" />

          <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 relative z-10 w-full">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              {/* Left - text */}
              <div className="space-y-5 md:space-y-6 max-w-xl">
             
                <h1 className="text-3xl leading-[1.15] font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                  Trusted Care for
                  <br />
                  Your <span className="gradient-text">Loved Ones</span>
                </h1>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Work4U connects Pune families with <strong className="text-foreground">Aadhar-verified student caregivers</strong> who
                  provide compassionate elder care, daily companionship, and home assistance.
                  Every booking supports a student&apos;s education.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-white hover:bg-primary-dark h-12 md:h-14 px-6 md:px-8 font-semibold rounded-xl text-sm md:text-base shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                  >
                    <Link href="/post-work">
                      Post a Work
                      <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                    </Link>
                  </Button>
                  <ApplyWorkButton className="border-2 border-primary text-primary hover:bg-primary hover:text-white h-12 md:h-14 px-6 md:px-8 font-semibold rounded-xl text-sm md:text-base transition-all hover:-translate-y-0.5">
                    Apply For Work
                  </ApplyWorkButton>
                </div>

                {/* Mini social proof */}
                <div className="flex items-center gap-3 pt-1">
                  <div className="flex -space-x-2">
                    {["bg-primary", "bg-blue-500", "bg-amber-500", "bg-pink-500"].map((bg, i) => (
                      <div
                        key={i}
                        className={`h-8 w-8 rounded-full ${bg} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
                      >
                        {["A", "V", "S", "R"][i]}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="flex items-center gap-0.5 text-warning">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">Trusted by <strong className="text-foreground">500+</strong> Pune families</p>
                  </div>
                </div>
              </div>

              {/* Right - visual card */}
              <div className="hidden lg:flex justify-center w-full">
                <div className="relative w-full max-w-[500px] aspect-[6/5] rounded-3xl overflow-hidden border border-border shadow-2xl shadow-primary/10">
                  <Image
                    src="/images/services-hero.png"
                    alt="Trusted Care Services"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
                      <HeartHandshake className="h-7 w-7 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1.5 shadow-sm">
                      Care That Feels Like Family
                    </h3>
                    <p className="text-sm text-white/90">
                      Trained student caregivers your parents will love
                    </p>
                  </div>

                  {/* Floating badge top right */}
                  <div className="absolute top-6 right-6 glass rounded-2xl px-3.5 py-2 shadow-lg border border-white/40 flex items-center gap-2 bg-white/80 backdrop-blur-md">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm font-bold text-slate-900">500+ Caregivers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TRUST BAR ─── */}
        <section className="py-8 md:py-12 relative">
          <div className="absolute inset-0 bg-linear-to-b from-surface to-background" />
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid gap-4 sm:grid-cols-3 stagger-children">
              {trustItems.map((item) => (
                <div
                  key={item.title}
                  className="group relative bg-card rounded-xl border border-border p-5 sm:p-6 text-center hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" strokeWidth={2} />
                  </div>
                  <p className="text-2xl font-extrabold text-primary mb-0.5">{item.stat}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">{item.statLabel}</p>
                  <h3 className="text-base font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SERVICES ─── */}
        <section className="py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 md:mb-10 fade-up">
              <span className="section-badge mb-3">Our Services</span>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mt-3">
                Care & Help Your Family Deserves
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto">
                Elder care is our heart. We also help with tutoring and tech — all by trained, verified students.
              </p>
            </div>

            <div className="grid gap-4 md:gap-6 md:grid-cols-3 stagger-children">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative bg-card rounded-xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  {/* Gradient top strip */}
                  <div className={`h-1 bg-linear-to-r ${service.color} relative z-20`} />

                  <div className="relative w-full h-48 overflow-hidden bg-muted">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className={`absolute bottom-4 left-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${service.iconBg} bg-background/95 backdrop-blur-sm shadow-md`}>
                      <service.icon className={`h-5 w-5 ${service.iconColor}`} strokeWidth={2} />
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    <h3 className="text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors mt-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-4 flex-1">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" strokeWidth={2.5} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all mt-auto"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SERVICE AREAS ─── */}
        <section className="py-8 md:py-12 bg-surface relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/3 blur-3xl" />
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="text-center mb-6 md:mb-8 fade-up">
              <span className="section-badge mb-3">Coverage</span>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mt-3">
                Areas We Serve in Pune
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Currently available in these neighborhoods
              </p>
            </div>
            <div className="fade-up">
              <ServiceAreaSearch />
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 md:mb-10 fade-up">
              <span className="section-badge mb-3">Simple Process</span>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mt-3">
                How It Works
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Get help in 3 simple steps
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 stagger-children relative">
              {steps.map((step, index) => (
                <div key={step.title} className="relative text-center">
                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <div className="step-connector hidden md:block" />
                  )}

                  <div className="mx-auto mb-4 relative">
                    <div className="h-14 w-14 md:h-16 md:w-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto relative z-10">
                      <step.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" strokeWidth={2} />
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 h-6 w-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center z-20 shadow-md">
                      {step.num.slice(-1)}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-foreground mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section className="py-8 md:py-12 bg-surface">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 md:mb-10 fade-up">
              <span className="section-badge mb-3">Testimonials</span>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mt-3">
                Families Trust Us
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Hear from families who found the right care for their loved ones
              </p>
            </div>
            <div className="fade-up">
              <TestimonialsCarousel />
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="relative py-10 md:py-16 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-linear-to-br from-secondary-dark via-secondary to-primary-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,122,87,0.3),transparent_60%)]" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />

          <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/80 max-w-xl mx-auto">
              Whether your parents need a caring companion or you&apos;re a student who wants to make a difference — we&apos;re here
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-white text-secondary-dark hover:bg-white/90 h-12 md:h-14 px-8 md:px-10 font-bold rounded-xl text-sm md:text-base shadow-xl transition-all hover:-translate-y-0.5"
              >
                <Link href="/post-work">
                  Post a Work
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <ApplyWorkButton className="border-2 border-white text-white hover:bg-white/10 h-12 md:h-14 px-8 md:px-10 font-bold rounded-xl text-sm md:text-base transition-all hover:-translate-y-0.5">
                Become a Helper
              </ApplyWorkButton>
            </div>
          </div>
        </section>
      </div>
    </ScrollRevealProvider>
  );
}
