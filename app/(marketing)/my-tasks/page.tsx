import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma_db } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ClipboardList, 
  MapPin, 
  CalendarDays, 
  Clock, 
  IndianRupee,
  PlusCircle,
  Clock3
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "My Posted Tasks",
  description: "View and manage tasks you have posted on Work4U.",
};

export default async function MyTasksPage() {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/auth/login?callbackUrl=/my-tasks");
  }

  // Fetch the tasks submitted by this user
  const tasks = await prisma_db.task.findMany({
    where: {
      userEmail: session.user.email,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="flex flex-col min-h-[70vh]">
      <section className="relative py-8 md:py-10 bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl text-foreground">
                My Posted Works
              </h1>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Manage the care and help tasks you have requested
              </p>
            </div>
            <Button asChild className="shrink-0 bg-primary text-primary-foreground hover:bg-primary-dark">
              <Link href="/post-work">
                <PlusCircle className="mr-2 h-4 w-4" />
                Post New Work
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 bg-background flex-1">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          {tasks.length === 0 ? (
            <div className="text-center py-16 px-4 rounded-xl border border-dashed border-border bg-card/50">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <ClipboardList className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">No works posted yet</h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
                You haven't requested any help yet. Post a work requirement and we'll match you with a verified student.
              </p>
              <Button asChild>
                <Link href="/post-work">Post a Work Requirement</Link>
              </Button>
            </div>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6">
                  {/* Left Column */}
                  <div className="space-y-3 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Badge variant="outline" className="mb-2 bg-primary/5 text-primary border-primary/20">
                          {task.category}
                        </Badge>
                        <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                          Need for {task.category}
                        </h3>
                      </div>
                      <div className="sm:hidden">
                        <StatusBadge status={task.status} />
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {task.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-3 md:gap-5 text-xs text-muted-foreground pt-1">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{task.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" />
                        <span>{new Date(task.startDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{task.hoursPerDay} hrs/day</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-row sm:flex-col justify-between items-center sm:items-end sm:w-40 shrink-0 border-t sm:border-t-0 sm:border-l border-border pt-4 sm:pt-0 sm:pl-4">
                    <div className="hidden sm:block mb-auto">
                      <StatusBadge status={task.status} />
                    </div>
                    
                    <div className="text-left sm:text-right">
                      <div className="flex items-center gap-1 text-primary font-bold text-lg justify-start sm:justify-end">
                        <IndianRupee className="h-4 w-4" />
                        {task.budget}
                      </div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground font-medium uppercase tracking-wider">
                        {task.budgetType === "Per Hour" ? "/ HOUR" : task.budgetType}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  if (status === "ASSIGNED") {
    return (
      <Badge className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-0">
        Assigned
      </Badge>
    );
  }
  if (status === "OPEN") {
    return (
      <Badge className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 border-0 flex items-center gap-1">
        <Clock3 className="h-3 w-3" />
        Finding Match
      </Badge>
    );
  }
  if (status === "COMPLETED") {
    return (
      <Badge className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-0 dark:bg-slate-800 dark:text-slate-400">
        Completed
      </Badge>
    );
  }
  return <Badge variant="secondary">{status}</Badge>;
}
