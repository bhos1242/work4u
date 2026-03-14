import type { Metadata } from "next";
import { PostWorkForm } from "@/components/post-work-form";

export const metadata: Metadata = {
  title: "Post a Work",
  description:
    "Post your work requirement and get matched with a verified student helper in your area.",
};

export default function PostWorkPage() {
  return (
    <div className="flex flex-col">
      <section className="py-12 bg-linear-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Post Your Work Requirement
          </h1>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Tell us what you need, and we&apos;ll match you with the perfect
            student helper
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <PostWorkForm />
        </div>
      </section>
    </div>
  );
}
