import Link from "next/link";
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

const trustItems = [
  {
    icon: Shield,
    title: "Aadhar Verified",
    description: "Every helper is identity-verified for your safety",
    stat: "100%",
    statLabel: "Verified",
  },
  {
    icon: Heart,
    title: "Social Impact",
    description: "Supporting students through meaningful part-time work",
    stat: "500+",
    statLabel: "Students Helped",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Quality services at student-friendly rates",
    stat: "₹99",
    statLabel: "Starting From",
  },
];

const services = [
  {
    icon: HeartHandshake,
    title: "Caretaking for Seniors",
    description:
      "Compassionate care for your loved ones — companionship, daily activities, and peace of mind.",
    items: [
      "Daily companionship",
      "Meal assistance",
      "Medicine reminders",
      "Light housekeeping",
      "Mobility support",
    ],
    color: "from-emerald-500/10 to-teal-500/10",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  {
    icon: BookOpen,
    title: "Home Tutoring",
    description:
      "Personalized tutoring at your home. Helping children build a strong academic foundation.",
    items: [
      "Math tutoring",
      "Science tutoring",
      "Language tutoring",
      "Homework help",
      "Exam preparation",
    ],
    color: "from-blue-500/10 to-indigo-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Monitor,
    title: "Computer & Tech Work",
    description:
      "Technology made simple. Our tech-savvy students handle all your digital needs.",
    items: [
      "Software installation",
      "Phone/tablet setup",
      "Virus removal",
      "Data backup",
      "Online form filling",
    ],
    color: "from-violet-500/10 to-purple-500/10",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
  },
];

const steps = [
  {
    icon: ClipboardList,
    title: "Post Your Work",
    description:
      "Tell us what you need — your area, timing, and budget",
    num: "01",
  },
  {
    icon: Search,
    title: "We Match You",
    description:
      "Verified student helpers in your area are instantly notified",
    num: "02",
  },
  {
    icon: CheckCircle,
    title: "Get It Done",
    description:
      "Your helper arrives and completes the work. Pay only after satisfaction",
    num: "03",
  },
];

export default function Home() {
  return (
    <ScrollRevealProvider>
      <div className="flex flex-col overflow-x-hidden">
        {/* ─── HERO ─── */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 bg-linear-to-br from-secondary/5 via-background to-accent/10" />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/20 blur-3xl" />

          <div className="container mx-auto px-4 py-16 md:py-0 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              {/* Left - text */}
              <div className="space-y-8 max-w-xl">
                <div className="section-badge">
                  <Sparkles className="h-3.5 w-3.5" />
                  By Students, For Students, To The Society
                </div>

                <h1 className="text-[2.5rem] leading-[1.1] font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                  Your Work,
                  <br />
                  Our <span className="gradient-text">Help</span>
                </h1>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Work4U provides <strong className="text-foreground">Aadhar-verified student helpers</strong> for
                  Pune residents who need assistance with daily work at home.
                  Taking our services means you&apos;re helping a student earn while they learn.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-white hover:bg-primary-dark h-14 px-8 font-semibold rounded-xl text-base shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
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
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white h-14 px-8 font-semibold rounded-xl text-base transition-all hover:-translate-y-0.5"
                  >
                    <Link href="/be-a-tasker">Apply For Work</Link>
                  </Button>
                </div>

                {/* Mini social proof */}
                <div className="flex items-center gap-4 pt-2">
                  <div className="flex -space-x-2">
                    {["bg-primary", "bg-blue-500", "bg-amber-500", "bg-pink-500"].map((bg, i) => (
                      <div
                        key={i}
                        className={`h-9 w-9 rounded-full ${bg} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
                      >
                        {["A", "V", "S", "R"][i]}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="flex items-center gap-1 text-warning">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground">Trusted by <strong className="text-foreground">500+</strong> families</p>
                  </div>
                </div>
              </div>

              {/* Right - visual card */}
              <div className="hidden lg:flex justify-center">
                <div className="relative">
                  {/* Main card */}
                  <div className="w-[400px] h-[460px] rounded-3xl bg-linear-to-br from-secondary/10 via-surface to-accent/20 overflow-hidden border border-border shadow-2xl shadow-primary/10">
                    <div className="h-full flex flex-col items-center justify-center p-8">
                      <div className="w-28 h-28 rounded-full bg-secondary/10 flex items-center justify-center mb-6 animate-float">
                        <HeartHandshake className="h-14 w-14 text-secondary" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground text-center">
                        Connecting Hearts
                      </h3>
                      <p className="text-sm text-muted-foreground text-center mt-2 max-w-[260px]">
                        Students helping seniors, families helping dreams
                      </p>
                      <div className="grid grid-cols-3 gap-4 mt-8 w-full">
                        {[
                          { n: "500+", l: "Helpers" },
                          { n: "1000+", l: "Tasks" },
                          { n: "11", l: "Areas" },
                        ].map((s) => (
                          <div key={s.l} className="text-center">
                            <p className="text-lg font-bold text-secondary">{s.n}</p>
                            <p className="text-xs text-muted-foreground">{s.l}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -left-6 glass rounded-2xl px-5 py-3 shadow-lg border border-white/40 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-success/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Aadhar Verified</p>
                      <p className="text-xs text-muted-foreground">100% Safe & Secure</p>
                    </div>
                  </div>

                  {/* Floating badge top right */}
                  <div className="absolute -top-3 -right-4 glass rounded-2xl px-4 py-2.5 shadow-lg border border-white/40 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold text-foreground">500+ Students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TRUST BAR ─── */}
        <section className="py-16 md:py-20 relative">
          <div className="absolute inset-0 bg-linear-to-b from-surface to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid gap-5 sm:grid-cols-3 stagger-children">
              {trustItems.map((item) => (
                <div
                  key={item.title}
                  className="group relative bg-card rounded-2xl border border-border p-6 sm:p-8 text-center hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                    <item.icon className="h-8 w-8 text-primary" strokeWidth={2} />
                  </div>
                  <p className="text-3xl font-extrabold text-primary mb-1">{item.stat}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">{item.statLabel}</p>
                  <h3 className="text-lg font-bold text-foreground mb-1.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SERVICES ─── */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 fade-up">
              <span className="section-badge mb-4">Our Services</span>
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mt-4">
                What We Offer
              </h2>
              <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
                From elder care to tech support, our student helpers are trained and ready
              </p>
            </div>

            <div className="grid gap-6 lg:gap-8 md:grid-cols-3 stagger-children">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Gradient top strip */}
                  <div className={`h-1.5 bg-linear-to-r ${service.color}`} />

                  <div className="p-6 sm:p-8">
                    <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.iconBg}`}>
                      <service.icon className={`h-7 w-7 ${service.iconColor}`} strokeWidth={2} />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <ul className="space-y-2.5 mb-6">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0" strokeWidth={2.5} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all"
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
        <section className="py-20 md:py-28 bg-surface relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/3 blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-10 fade-up">
              <span className="section-badge mb-4">Coverage</span>
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mt-4">
                Areas We Serve in Pune
              </h2>
              <p className="mt-3 text-muted-foreground">
                Currently available in these neighborhoods
              </p>
            </div>
            <div className="fade-up">
              <ServiceAreaSearch />
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 fade-up">
              <span className="section-badge mb-4">Simple Process</span>
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mt-4">
                How It Works
              </h2>
              <p className="mt-3 text-muted-foreground">
                Get help in 3 simple steps
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 stagger-children relative">
              {steps.map((step, index) => (
                <div key={step.title} className="relative text-center">
                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <div className="step-connector hidden md:block" />
                  )}

                  <div className="mx-auto mb-5 relative">
                    <div className="h-[72px] w-[72px] rounded-2xl bg-primary/10 flex items-center justify-center mx-auto relative z-10">
                      <step.icon className="h-8 w-8 text-primary" strokeWidth={2} />
                    </div>
                    <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center z-20 shadow-md">
                      {step.num.slice(-1)}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2">
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
        <section className="py-20 md:py-28 bg-surface">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 fade-up">
              <span className="section-badge mb-4">Testimonials</span>
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mt-4">
                What Our Users Say
              </h2>
              <p className="mt-3 text-muted-foreground">
                Real stories from real people
              </p>
            </div>
            <div className="fade-up">
              <TestimonialsCarousel />
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-linear-to-br from-secondary-dark via-secondary to-primary-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,122,87,0.3),transparent_60%)]" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto">
              Whether you need help at home or want to earn as a student helper — we&apos;ve got you covered
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-secondary-dark hover:bg-white/90 h-14 px-10 font-bold rounded-xl text-base shadow-xl transition-all hover:-translate-y-0.5"
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
                className="border-2 border-white/30 text-white hover:bg-white/10 h-14 px-10 font-bold rounded-xl text-base transition-all hover:-translate-y-0.5"
              >
                <Link href="/be-a-tasker">Become a Helper</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </ScrollRevealProvider>
  );
}
