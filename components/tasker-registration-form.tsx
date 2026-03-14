"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const SERVICE_AREAS = [
  "Shivajinagar", "Model Colony", "Bhosle Nagar", "Kothrud", "Karve Nagar",
  "Prabhat Road", "Ganeshkhind", "Aundh", "Sangvi", "Deccan Gymkhana", "Peth Area",
];

const SKILLS = [
  "Elder Care", "Tutoring", "Computer/Tech", "Cooking", "Cleaning",
  "Gardening", "Pet Care", "Yoga/Fitness", "Errands/Shopping",
];

const taskerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  location: z.string().min(1, "Please select your area"),
  residence: z.enum(["Room", "Hostel"]),
  college: z.string().min(2, "College name is required"),
  course: z.string().min(2, "Course is required"),
  yearOfStudy: z.enum(["First", "Second", "Third", "Fourth"]),
  skills: z.array(z.string()).min(1, "Select at least one skill"),
});

type TaskerFormData = z.infer<typeof taskerSchema>;

export function TaskerRegistrationForm() {
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const form = useForm<TaskerFormData>({
    resolver: zodResolver(taskerSchema) as any,
    defaultValues: {
      name: "",
      mobile: "",
      location: "",
      residence: "Room",
      college: "",
      course: "",
      yearOfStudy: "First",
      skills: [],
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = form;

  const selectedSkills = watch("skills");

  async function onSubmit(data: TaskerFormData) {
    setLoading(true);
    try {
      const res = await fetch("/api/taskers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to register");
      toast.success("Registration successful! We'll contact you soon.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function toggleSkill(skill: string) {
    const current = selectedSkills || [];
    const updated = current.includes(skill)
      ? current.filter((s) => s !== skill)
      : [...current, skill];
    setValue("skills", updated, { shouldValidate: true });
  }

  return (
    <Card className="max-w-2xl mx-auto border border-border">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <Label htmlFor="tasker-name">Full Name *</Label>
            <Input
              id="tasker-name"
              {...register("name")}
              placeholder="Your full name"
              className="mt-1.5 min-h-12"
            />
            {errors.name && (
              <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="tasker-mobile">Mobile Number *</Label>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="text-sm text-muted-foreground px-3 py-2 bg-surface rounded-lg border border-border min-h-12 flex items-center">
                +91
              </span>
              <Input
                id="tasker-mobile"
                {...register("mobile")}
                placeholder="9876543210"
                maxLength={10}
                className="min-h-12"
              />
            </div>
            {errors.mobile && (
              <p className="text-sm text-destructive mt-1">{errors.mobile.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="tasker-location">Current Location/Area *</Label>
            <Select
              onValueChange={(val) => setValue("location", val, { shouldValidate: true })}
            >
              <SelectTrigger className="mt-1.5 min-h-12" id="tasker-location">
                <SelectValue placeholder="Select your area" />
              </SelectTrigger>
              <SelectContent>
                {SERVICE_AREAS.map((area) => (
                  <SelectItem key={area} value={area}>
                    {area}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.location && (
              <p className="text-sm text-destructive mt-1">{errors.location.message}</p>
            )}
          </div>

          <div>
            <Label>Residence Type *</Label>
            <RadioGroup
              defaultValue="Room"
              onValueChange={(val) => setValue("residence", val as "Room" | "Hostel", { shouldValidate: true })}
              className="flex gap-6 mt-2"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="Room" id="res-room" />
                <Label htmlFor="res-room" className="cursor-pointer">Room</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="Hostel" id="res-hostel" />
                <Label htmlFor="res-hostel" className="cursor-pointer">Hostel</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="tasker-college">College Name *</Label>
            <Input
              id="tasker-college"
              {...register("college")}
              placeholder="Your college name"
              className="mt-1.5 min-h-12"
            />
            {errors.college && (
              <p className="text-sm text-destructive mt-1">{errors.college.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="tasker-course">Course *</Label>
            <Input
              id="tasker-course"
              {...register("course")}
              placeholder="e.g., B.Tech Computer Science"
              className="mt-1.5 min-h-12"
            />
            {errors.course && (
              <p className="text-sm text-destructive mt-1">{errors.course.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="tasker-year">Year of Study *</Label>
            <Select
              defaultValue="First"
              onValueChange={(val) =>
                setValue("yearOfStudy", val as TaskerFormData["yearOfStudy"], { shouldValidate: true })
              }
            >
              <SelectTrigger className="mt-1.5 min-h-12" id="tasker-year">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {["First", "Second", "Third", "Fourth"].map((y) => (
                  <SelectItem key={y} value={y}>
                    {y} Year
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Skills *</Label>
            <p className="text-sm text-muted-foreground mb-2">
              Select all skills that apply
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SKILLS.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <Checkbox
                    id={`skill-${skill}`}
                    checked={selectedSkills?.includes(skill)}
                    onCheckedChange={() => toggleSkill(skill)}
                  />
                  <Label
                    htmlFor={`skill-${skill}`}
                    className="text-sm cursor-pointer"
                  >
                    {skill}
                  </Label>
                </div>
              ))}
            </div>
            {errors.skills && (
              <p className="text-sm text-destructive mt-1">{errors.skills.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground hover:bg-primary-dark min-h-12 font-semibold rounded-lg text-base"
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Register as Helper
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
