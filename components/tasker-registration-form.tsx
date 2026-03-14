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
import { toast } from "sonner";
import {
  Loader2,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  User,
  MapPin,
  GraduationCap,
  Sparkles,
} from "lucide-react";

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
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  location: z.string().min(1, "Please select your area"),
  residence: z.enum(["Room", "Hostel"]),
  college: z.string().min(2, "College name is required"),
  course: z.string().min(2, "Course is required"),
  yearOfStudy: z.enum(["First", "Second", "Third", "Fourth"]),
  skills: z.array(z.string()).min(1, "Select at least one skill"),
});

type TaskerFormData = z.infer<typeof taskerSchema>;

const TOTAL_STEPS = 4;

const STEP_META = [
  { label: "Personal Info", icon: User },
  { label: "Location", icon: MapPin },
  { label: "Education", icon: GraduationCap },
  { label: "Skills", icon: Sparkles },
];

export function TaskerRegistrationForm() {
  const [step, setStep] = useState(1);
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
    trigger,
    formState: { errors },
    reset,
  } = form;

  const values = watch();
  const selectedSkills = values.skills;

  async function goNext() {
    const fieldsPerStep: Record<number, (keyof TaskerFormData)[]> = {
      1: ["name", "mobile"],
      2: ["location", "residence"],
      3: ["college", "course", "yearOfStudy"],
    };
    const fields = fieldsPerStep[step];
    if (fields) {
      const valid = await trigger(fields);
      if (!valid) return;
    }
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 1));
  }

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
      setStep(1);
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
      {/* Step indicators */}
      <div className="flex items-center gap-1 mb-4">
        {STEP_META.map((s, i) => {
          const stepNum = i + 1;
          const isActive = stepNum === step;
          const isDone = stepNum < step;
          return (
            <div key={s.label} className="flex-1 flex flex-col items-center gap-1">
              <div
                className={`flex items-center justify-center h-8 w-8 rounded-full text-xs font-bold transition-colors ${
                  isDone
                    ? "bg-primary text-white"
                    : isActive
                    ? "bg-primary/10 text-primary border-2 border-primary"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {isDone ? <CheckCircle className="h-4 w-4" /> : stepNum}
              </div>
              <span className={`text-[10px] leading-tight text-center ${isActive ? "font-semibold text-primary" : "text-muted-foreground"}`}>
                {s.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="flex items-center gap-1.5 mb-5">
        <div className="flex-1 h-1 rounded-full bg-border overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>
        <span className="text-xs text-muted-foreground whitespace-nowrap">
          {step}/{TOTAL_STEPS}
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1: Personal Info */}
        {step === 1 && (
          <div className="space-y-3">
            <Label className="text-sm font-semibold">Your personal details</Label>
            <div>
              <Label htmlFor="tasker-name" className="text-xs">Full Name</Label>
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
              <Label htmlFor="tasker-mobile" className="text-xs">Mobile Number</Label>
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
        )}

        {/* Step 2: Location */}
        {step === 2 && (
          <div className="space-y-3">
            <Label className="text-sm font-semibold">Where are you based?</Label>
            <div>
              <Label htmlFor="tasker-location" className="text-xs">Area in Pune</Label>
              <Select
                value={values.location}
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
              <Label className="text-xs">Residence Type</Label>
              <div className="flex gap-3 mt-2">
                {["Room", "Hostel"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setValue("residence", type as "Room" | "Hostel", { shouldValidate: true })}
                    className={`flex-1 flex items-center justify-center py-2.5 rounded-xl border-2 text-sm font-medium transition-all ${
                      values.residence === type
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Education */}
        {step === 3 && (
          <div className="space-y-3">
            <Label className="text-sm font-semibold">Your education details</Label>
            <div>
              <Label htmlFor="tasker-college" className="text-xs">College Name</Label>
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
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="tasker-course" className="text-xs">Course</Label>
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
              <div>
                <Label htmlFor="tasker-year" className="text-xs">Year</Label>
                <Select
                  value={values.yearOfStudy}
                  onValueChange={(val) =>
                    setValue("yearOfStudy", val as TaskerFormData["yearOfStudy"], { shouldValidate: true })
                  }
                >
                  <SelectTrigger className="mt-1 h-10 text-sm" id="tasker-year">
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
            </div>
          </div>
        )}

        {/* Step 4: Skills */}
        {step === 4 && (
          <div className="space-y-3">
            <Label className="text-sm font-semibold">What can you help with?</Label>
            <p className="text-xs text-muted-foreground -mt-1">Tap to select your skills</p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => {
                const selected = selectedSkills?.includes(skill);
                return (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSkill(skill)}
                    className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-full text-xs font-medium border transition-all ${
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

            {/* Review summary */}
            <div className="mt-4 p-3 bg-surface rounded-xl space-y-1.5">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Summary</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                <span className="text-muted-foreground">Name</span>
                <span className="font-medium text-foreground truncate">{values.name}</span>
                <span className="text-muted-foreground">Mobile</span>
                <span className="font-medium text-foreground">+91 {values.mobile}</span>
                <span className="text-muted-foreground">Area</span>
                <span className="font-medium text-foreground">{values.location}</span>
                <span className="text-muted-foreground">College</span>
                <span className="font-medium text-foreground truncate">{values.college}</span>
                <span className="text-muted-foreground">Course</span>
                <span className="font-medium text-foreground">{values.course}, {values.yearOfStudy} Yr</span>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-5 pt-3 border-t">
          {step > 1 ? (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={goBack}
              className="h-10 px-4 text-sm font-medium"
            >
              <ArrowLeft className="mr-1.5 h-4 w-4" />
              Back
            </Button>
          ) : (
            <div />
          )}
          {step < TOTAL_STEPS ? (
            <Button
              type="button"
              onClick={goNext}
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary-dark h-10 px-5 text-sm font-semibold rounded-lg"
            >
              Next
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={loading}
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary-dark h-10 px-6 text-sm font-semibold rounded-lg"
            >
              {loading ? (
                <Loader2 className="mr-1.5 h-4 w-4 animate-spin" />
              ) : (
                <CheckCircle className="mr-1.5 h-4 w-4" />
              )}
              Register
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
