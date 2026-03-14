"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Loader2, CheckCircle } from "lucide-react";

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
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-card rounded-xl border border-border p-5">
        {/* Name & Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Label htmlFor="tasker-name" className="text-xs font-semibold">Full Name</Label>
            <Input
              id="tasker-name"
              {...register("name")}
              placeholder="Your full name"
              className="mt-1 h-10 text-sm"
            />
            {errors.name && (
              <p className="text-xs text-destructive mt-0.5">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="tasker-mobile" className="text-xs font-semibold">Mobile Number</Label>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="text-xs text-muted-foreground px-2 bg-surface rounded-lg border border-border h-10 flex items-center">
                +91
              </span>
              <Input
                id="tasker-mobile"
                {...register("mobile")}
                placeholder="9876543210"
                maxLength={10}
                className="h-10 text-sm"
              />
            </div>
            {errors.mobile && (
              <p className="text-xs text-destructive mt-0.5">{errors.mobile.message}</p>
            )}
          </div>
        </div>

        {/* Location & Residence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Label htmlFor="tasker-location" className="text-xs font-semibold">Area</Label>
            <Select
              onValueChange={(val) => setValue("location", val, { shouldValidate: true })}
            >
              <SelectTrigger className="mt-1 h-10 text-sm" id="tasker-location">
                <SelectValue placeholder="Select area" />
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
              <p className="text-xs text-destructive mt-0.5">{errors.location.message}</p>
            )}
          </div>
          <div>
            <Label className="text-xs font-semibold">Residence</Label>
            <RadioGroup
              defaultValue="Room"
              onValueChange={(val) => setValue("residence", val as "Room" | "Hostel", { shouldValidate: true })}
              className="flex gap-4 mt-2.5"
            >
              <div className="flex items-center gap-1.5">
                <RadioGroupItem value="Room" id="res-room" />
                <Label htmlFor="res-room" className="cursor-pointer text-sm">Room</Label>
              </div>
              <div className="flex items-center gap-1.5">
                <RadioGroupItem value="Hostel" id="res-hostel" />
                <Label htmlFor="res-hostel" className="cursor-pointer text-sm">Hostel</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* College & Course */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Label htmlFor="tasker-college" className="text-xs font-semibold">College</Label>
            <Input
              id="tasker-college"
              {...register("college")}
              placeholder="Your college name"
              className="mt-1 h-10 text-sm"
            />
            {errors.college && (
              <p className="text-xs text-destructive mt-0.5">{errors.college.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="tasker-course" className="text-xs font-semibold">Course</Label>
            <Input
              id="tasker-course"
              {...register("course")}
              placeholder="e.g., B.Tech CS"
              className="mt-1 h-10 text-sm"
            />
            {errors.course && (
              <p className="text-xs text-destructive mt-0.5">{errors.course.message}</p>
            )}
          </div>
        </div>

        {/* Year */}
        <div>
          <Label htmlFor="tasker-year" className="text-xs font-semibold">Year of Study</Label>
          <Select
            defaultValue="First"
            onValueChange={(val) =>
              setValue("yearOfStudy", val as TaskerFormData["yearOfStudy"], { shouldValidate: true })
            }
          >
            <SelectTrigger className="mt-1 h-10 text-sm max-w-40" id="tasker-year">
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

        {/* Skills */}
        <div>
          <Label className="text-xs font-semibold">Skills</Label>
          <p className="text-[10px] text-muted-foreground mb-2">Select all that apply</p>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => {
              const selected = selectedSkills?.includes(skill);
              return (
                <button
                  key={skill}
                  type="button"
                  onClick={() => toggleSkill(skill)}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                    selected
                      ? "bg-primary/10 border-primary text-primary"
                      : "bg-card border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  {selected && <CheckCircle className="h-3 w-3" />}
                  {skill}
                </button>
              );
            })}
          </div>
          {errors.skills && (
            <p className="text-xs text-destructive mt-1">{errors.skills.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-primary-foreground hover:bg-primary-dark h-10 font-semibold rounded-lg text-sm"
        >
          {loading && <Loader2 className="mr-1.5 h-4 w-4 animate-spin" />}
          Register as Helper
        </Button>
      </form>
    </div>
  );
}
