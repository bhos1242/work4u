import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights and stories about senior care, student employment, and community impact in Pune.",
};

const blogPosts = [
  {
    title: "Empowering Students with Part-Time Opportunities in Pune",
    excerpt:
      "Inspired by Bhaurao Patil's 'Earn and Learn' philosophy, Work4U bridges the gap between Pune residents who need reliable home services and hardworking students seeking meaningful part-time work.",
    category: "Community Impact",
    date: "December 15, 2024",
    content: `India's education system has long celebrated the concept of 'Earn and Learn,' a philosophy championed by visionaries like Karmaveer Bhaurao Patil. At Work4U, we bring this timeless principle into the digital age.

Every day in Pune, thousands of residents — especially senior citizens and busy professionals — need reliable help with daily tasks. At the same time, college students face financial pressures that often force them to choose between their studies and earning a living.

Work4U bridges this gap. Our platform connects verified student helpers with families who need assistance, creating a win-win ecosystem where:

- Students earn flexible income without disrupting their education
- Families get affordable, trustworthy help from young, energetic helpers
- Senior citizens gain companionship along with practical assistance
- The community grows stronger through intergenerational connections

By choosing Work4U, you're not just getting a service — you're investing in a student's future.`,
  },
  {
    title: "The Importance of Companionship for Senior Citizens",
    excerpt:
      "Loneliness among elderly is a growing concern. Learn how Work4U's student helpers provide not just services, but genuine human connection and companionship.",
    category: "Senior Care",
    date: "January 10, 2025",
    content:
      "As families become nuclear and children move to different cities for work, many senior citizens find themselves living alone. Work4U's student helpers bridge this gap by providing daily companionship alongside practical assistance.",
  },
  {
    title: "How Technology is Changing Home Services in India",
    excerpt:
      "From booking a helper online to verified profiles, discover how Work4U is leveraging technology to make home services safer and more accessible for everyone.",
    category: "Technology",
    date: "February 5, 2025",
    content:
      "The home services industry in India is undergoing a digital transformation. Work4U is at the forefront, using Aadhar verification and digital platforms to build trust between service providers and families.",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-linear-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            Insights & Stories
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Read about senior care, student life, and community impact
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card
                key={post.title}
                className="group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 border border-border overflow-hidden"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-linear-to-br from-primary/20 via-secondary/20 to-accent/30 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-primary/40" strokeWidth={1.5} />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <button
                    className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
