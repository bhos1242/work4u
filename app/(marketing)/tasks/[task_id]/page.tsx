import { prisma_db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  IndianRupee,
  Calendar,
  Clock,
  User,
  Phone,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";

const STATUS_COLORS: Record<string, string> = {
  OPEN: "bg-green-100 text-green-800",
  ASSIGNED: "bg-yellow-100 text-yellow-800",
  COMPLETED: "bg-gray-100 text-gray-800",
  PAID: "bg-blue-100 text-blue-800",
};

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

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link
          href="/tasks"
          className="inline-flex items-center text-sm text-primary hover:underline mb-6"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Browse
        </Link>

        <Card className="border border-border">
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <Badge variant="secondary">{task.category}</Badge>
              <Badge className={STATUS_COLORS[task.status] || ""}>
                {task.status}
              </Badge>
            </div>
            <CardTitle className="text-2xl mt-2">{task.category}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Description
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {task.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <InfoRow icon={MapPin} label="Location" value={`${task.location}${task.address ? `, ${task.address}` : ""}`} />
              <InfoRow
                icon={IndianRupee}
                label="Budget"
                value={`₹${task.budget} ${task.budgetType}`}
              />
              <InfoRow
                icon={Calendar}
                label="Duration"
                value={`${new Date(task.startDate).toLocaleDateString("en-IN")} - ${new Date(task.endDate).toLocaleDateString("en-IN")}`}
              />
              <InfoRow
                icon={Clock}
                label="Hours/Day"
                value={`${task.hoursPerDay} hours`}
              />
              <InfoRow icon={User} label="Posted by" value={task.userName} />
              {task.gender && (
                <InfoRow
                  icon={User}
                  label="Gender Preference"
                  value={task.gender}
                />
              )}
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t">
              {task.status === "OPEN" && (
                <>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary-dark min-h-12 px-6 font-semibold rounded-lg">
                    Make an Offer
                  </Button>
                  <Button
                    asChild
                    className="bg-[#25D366] text-white hover:bg-[#20BD5A] min-h-12 px-6 font-semibold rounded-lg"
                  >
                    <a
                      href={`https://wa.me/91${task.mobileNumber}?text=Hi, I'm interested in your ${task.category} task on Work4U`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-4 w-4 text-primary" strokeWidth={2.5} />
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
}
