import type { Metadata } from "next";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
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
  Eye,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Work4U's mission to connect Pune residents with Aadhar-verified student helpers. By students, for students, to the society.",
};

const studentModelCards = [
  {
    icon: GraduationCap,
    title: "Earn While You Learn",
    description:
      "Students earn income to fund their education without disrupting their studies",
  },
  {
    icon: Shield,
    title: "Verified & Trained",
    description:
      "Every helper submits Aadhar card and college ID for verification",
  },
  {
    icon: Users,
    title: "Community Bond",
    description:
      "Intergenerational connections between students and seniors create lasting relationships",
  },
  {
    icon: TrendingUp,
    title: "Skill Development",
    description:
      "Helpers gain real-world professional skills and work experience",
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "High Security Standards",
    description:
      "Thorough background checks and verification for every helper",
  },
  {
    icon: BadgeCheck,
    title: "Aadhar Verified Helpers",
    description:
      "Government ID verified for your complete peace of mind",
  },
  {
    icon: Heart,
    title: "Social Impact",
    description:
      "Every service booking directly supports a student's education",
  },
  {
    icon: IndianRupee,
    title: "Affordable Rates",
    description:
      "Student helpers offer quality service at budget-friendly prices",
  },
];

const team = [
  { name: "Ajay Pathade", title: "Founder & CEO" },
  { name: "Vivek Bhos", title: "Co-Founder & CTO" },
  { name: "Vishnu Palaskar", title: "Co-Founder & COO" },
  { name: "Rahul Mane", title: "Co-Founder & CFO" },
  { name: "Sudarshan Pathade", title: "Co-Founder & SMM" },
  { name: "Shreya Sathe", title: "Co-Founder & CMO" },
  { name: "Prerana Shevale", title: "Co-Founder & SMM" },
  { name: "Vaishnavi Badhe", title: "Co-Founder & SMM" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="py-20 bg-linear-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            About <span className="text-primary">Work4U</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Bridging communities through service and opportunity
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm aspect-square rounded-2xl bg-linear-to-br from-primary/20 via-secondary/30 to-accent/40 flex items-center justify-center">
                <HeartHandshake className="h-24 w-24 text-primary/60" strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Work4u is not just a platform — we are your helping hand,
                connecting hearts through transformative services. Our
                compassionate team ensures that your everyday tasks are handled
                with care, offering affordable and reliable solutions. We believe
                in creating meaningful connections and making a positive impact
                on both students and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Work4u, we envision a world where every task becomes an
                opportunity for growth and connection. By empowering students and
                fostering collaboration, we strive to make home services
                accessible to all, creating a ripple effect of positivity.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm aspect-square rounded-2xl bg-linear-to-br from-accent/40 via-secondary/30 to-primary/20 flex items-center justify-center">
                <Eye className="h-24 w-24 text-primary/60" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Helper Model */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Why Student Helpers?
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {studentModelCards.map((card) => (
              <Card
                key={card.title}
                className="text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <card.icon className="h-7 w-7 text-primary" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Why Choose Us
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((card) => (
              <Card
                key={card.title}
                className="text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/30">
                    <card.icon className="h-7 w-7 text-primary" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Our Team
            </h2>
          </div>
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Card
                key={member.name}
                className="text-center hover:shadow-lg transition-shadow duration-200"
              >
                <CardContent className="pt-8 pb-6 px-4">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary text-2xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {member.title}
                  </p>
                  <a
                    href="#"
                    aria-label={`${member.name}'s LinkedIn`}
                    className="inline-flex mt-3 h-8 w-8 items-center justify-center rounded-full bg-surface hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-muted-foreground" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Contact Us
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
