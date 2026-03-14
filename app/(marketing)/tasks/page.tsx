import type { Metadata } from "next";
import { TasksBrowser } from "@/components/tasks-browser";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Browse Available Tasks",
  description:
    "Browse and find available work opportunities near you. Filter by area, category, and pay.",
};

export default function TasksPage() {
  return (
    <div className="flex flex-col">
      <section className="relative py-8 md:py-10 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/8 via-background to-secondary/5" />
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl text-foreground">
            Available Work
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground max-w-md mx-auto">
            Find tasks that match your skills and schedule
          </p>
        </div>
      </section>

      <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4">
          <TasksBrowser />
        </div>
      </section>
    </div>
  );
}
