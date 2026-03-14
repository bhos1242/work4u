import type { Metadata } from "next";
import { TasksBrowser } from "@/components/tasks-browser";

export const metadata: Metadata = {
  title: "Browse Available Tasks",
  description:
    "Browse and find available work opportunities near you. Filter by area, category, and pay.",
};

export default function TasksPage() {
  return (
    <div className="flex flex-col">
      <section className="py-12 bg-linear-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Available Work Opportunities
          </h1>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Find tasks that match your skills and schedule
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <TasksBrowser />
        </div>
      </section>
    </div>
  );
}
