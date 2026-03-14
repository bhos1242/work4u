import { prisma_db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  IndianRupee,
  Calendar,
  Clock,
  User,
  ArrowLeft,
  MessageCircle,
  Briefcase,
  ShieldCheck,
  CalendarDays,
  Users
} from "lucide-react";

function StatusBadge({ status }: { status: string }) {
  if (status === "OPEN") {
    return (
      <Badge className="bg-blue-500/10 text-blue-600 border-0 hover:bg-blue-500/20 px-3 py-1 text-sm font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2" />
        Open for Applicants
      </Badge>
    );
  }
  if (status === "ASSIGNED") {
    return (
      <Badge className="bg-emerald-500/10 text-emerald-600 border-0 hover:bg-emerald-500/20 px-3 py-1 text-sm font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-2" />
        Assigned
      </Badge>
    );
  }
  if (status === "COMPLETED") {
    return (
      <Badge className="bg-slate-100 text-slate-600 border-0 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 px-3 py-1 text-sm font-medium">
        ✓ Completed
      </Badge>
    );
  }
  return <Badge variant="secondary" className="px-3 py-1 text-sm">{status}</Badge>;
}

export default async function TaskDetailPage({
  params,
}: {
  params: Promise<{ task_id: string }>;
}) {
  const { task_id } = await params;

  const task = await prisma_db.task.findUnique({
    where: { id: task_id },
  });

  if (!task) {
    notFound();
  }

  const requestedDate = new Intl.DateTimeFormat("en-IN", { 
    day: "numeric", month: "short", year: "numeric" 
  }).format(new Date(task.createdAt));

  return (
    <div className="flex flex-col min-h-[80vh] bg-background">
      {/* Hero Header Section */}
      <section className="relative pt-8 pb-12 overflow-hidden border-b border-border bg-surface">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute top-0 right-0 w-100 h-100 rounded-full bg-primary/3 blur-3xl" />
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <Link
            href="/tasks"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="mr-1.5 h-4 w-4" />
            Back to Browse Work
          </Link>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-primary hover:bg-primary-dark shadow-sm px-3 py-1 font-semibold text-sm">
                  {task.category}
                </Badge>
                <StatusBadge status={task.status} />
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight max-w-2xl leading-tight">
                Need Help For {task.category}
              </h1>

              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground font-medium pt-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-foreground">{task.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  <span>Posted {requestedDate}</span>
                </div>
              </div>
            </div>

            {/* Price Box for Mobile Header or Desktop Action Area */}
            <div className="hidden md:flex flex-col items-end shrink-0">
              <div className="text-right p-4 bg-card rounded-2xl border border-border shadow-sm">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  Budget / Pay
                </p>
                <div className="flex items-center gap-1.5 text-2xl font-extrabold text-primary">
                  <IndianRupee className="h-6 w-6" strokeWidth={2.5} />
                  <span>{task.budget}</span>
                </div>
                <p className="text-sm font-medium text-foreground -mt-0.5">
                  {task.budgetType}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Main Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2 border-b border-border pb-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Work Description
                </h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap text-[15px]">
                  {task.description}
                </p>
              </div>

              {/* Requirement Metrics */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2 border-b border-border pb-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  Requirements & Schedule
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <InfoCard
                    icon={Calendar}
                    label="Dates Required"
                    value={`${new Date(task.startDate).toLocaleDateString("en-IN", { month: "short", day: "numeric" })} - ${new Date(task.endDate).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}`}
                  />
                  <InfoCard
                    icon={Clock}
                    label="Daily Commitment"
                    value={`${task.hoursPerDay} hours per day`}
                  />
                  <InfoCard
                    icon={MapPin}
                    label="Full Address"
                    value={`${task.location}${task.address ? `, ${task.address}` : ""}`}
                  />
                  {task.gender && task.gender !== "No Preference" && (
                    <InfoCard
                      icon={User}
                      label="Gender Preference"
                      value={task.gender}
                    />
                  )}
                  <InfoCard
                    icon={Users}
                    label="People Required"
                    value={`${task.numberOfPeople} Person${task.numberOfPeople > 1 ? "s" : ""}`}
                  />
                </div>
              </div>
            </div>

            {/* Right Action Sidebar (Sticky) */}
            <div className="lg:col-span-1 lg:sticky lg:top-24 space-y-4">
              <Card className="border-border shadow-lg shadow-primary/5 overflow-hidden">
                <div className="h-1 bg-linear-to-r from-primary to-secondary" />
                <CardContent className="p-6">
                  {/* Mobile Budget Display */}
                  <div className="md:hidden flex items-center justify-between border-b border-border pb-4 mb-5">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Budget Pay
                    </p>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-xl font-extrabold text-primary">
                        <IndianRupee className="h-5 w-5" />
                        <span>{task.budget}</span>
                      </div>
                      <p className="text-xs font-medium text-foreground">
                        {task.budgetType}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <p className="text-sm font-medium text-muted-foreground bg-primary/5 px-3 py-2 rounded-lg border border-primary/10">
                      Posted by <strong className="text-foreground">{task.userName}</strong>
                    </p>

                    {task.status === "OPEN" ? (
                      <div className="space-y-3 mt-2">
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary-dark h-12 text-base font-semibold shadow-md transition-transform hover:-translate-y-0.5">
                          Make an Offer
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="w-full h-12 text-base font-semibold border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all hover:-translate-y-0.5"
                        >
                          <a
                            href={`https://wa.me/91${task.mobileNumber}?text=Hi, I'm interested in your ${task.category} task on Work4U`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MessageCircle className="mr-2 h-5 w-5" />
                            Message on WhatsApp
                          </a>
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-4 bg-muted/50 rounded-xl mt-2 border border-border">
                        <p className="font-semibold text-muted-foreground">
                          Not available for new applicants
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Trust block */}
              <div className="bg-card rounded-xl border border-border p-4 flex items-start gap-3">
                <div className="shrink-0 bg-success/10 p-2 rounded-full">
                  <ShieldCheck className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Aadhar Verified Clients</p>
                  <p className="text-xs text-muted-foreground mt-0.5">We verify every request to protect our student caregivers.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-5 w-5 text-primary" strokeWidth={2} />
      </div>
      <div>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
          {label}
        </p>
        <p className="text-sm font-medium text-foreground leading-snug">{value}</p>
      </div>
    </div>
  );
}
