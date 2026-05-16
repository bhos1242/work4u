import type { Metadata } from "next";
import { PostWorkForm } from "@/components/post-work-form";

export const metadata: Metadata = {
  title: "Request Care for Your Loved One",
  description:
    "Tell us what care your family needs. A verified student caregiver in your Pune area will be matched within hours.",
};

export default function PostWorkPage() {
  return (
    <div className="flex flex-col">
      <section className="py-12 bg-linear-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Request Care for Your Loved One
          </h1>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Share what your family needs — a verified, trained student caregiver
            in your area will be matched within hours.
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
