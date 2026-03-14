"use client";

import { useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import {
  HeartHandshake,
  BookOpen,
  Monitor,
  Flower2,
  Sprout,
  SprayCan,
  ArrowLeft,
  ArrowRight,
  Loader2,
  CheckCircle,
  Edit3,
} from "lucide-react";

const SERVICE_AREAS = [
  "Shivajinagar", "Model Colony", "Bhosle Nagar", "Kothrud", "Karve Nagar",
  "Prabhat Road", "Ganeshkhind", "Aundh", "Sangvi", "Deccan Gymkhana", "Peth Area",
];

const CATEGORIES = [
  { value: "Senior Citizens Caretaking", label: "Senior Care", icon: HeartHandshake },
  { value: "Personal Home Tutor", label: "Home Tutor", icon: BookOpen },
  { value: "Computer/Tech Work", label: "Tech Work", icon: Monitor },
  { value: "Yoga Trainer", label: "Yoga", icon: Flower2 },
  { value: "Gardening", label: "Gardening", icon: Sprout },
  { value: "Home Cleaning", label: "Cleaning", icon: SprayCan },
];

const postWorkSchema = z
  .object({
    category: z.string().min(1, "Please select a service type"),
    description: z
      .string()
      .min(20, "Description must be at least 20 characters")
      .max(500, "Description must be under 500 characters"),
    startDate: z.string().min(1, "Start date is required"),
    endDate: z.string().min(1, "End date is required"),
    hoursPerDay: z.coerce.number().min(1, "Minimum 1 hour").max(12, "Maximum 12 hours"),
    location: z.string().min(1, "Please select an area"),
    address: z.string().optional(),
    mobileNumber: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
    budgetType: z.enum(["Per Hour", "Per Day", "Fixed"]),
    budget: z.coerce.number().min(50, "Minimum budget is ₹50"),
    gender: z.string().optional(),
    numberOfPeople: z.coerce.number().min(1).default(1),
  })
  .refine((data) => data.endDate >= data.startDate, {
    message: "End date must be on or after start date",
    path: ["endDate"],
  });

type PostWorkFormData = z.infer<typeof postWorkSchema>;

const TOTAL_STEPS = 7;

export function PostWorkForm({ onSuccess }: { onSuccess?: () => void } = {}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session } = useSession();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const preselectedCategory = searchParams.get("category") || "";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const form = useForm<PostWorkFormData>({
    resolver: zodResolver(postWorkSchema) as any,
    defaultValues: {
      category: preselectedCategory,
      description: "",
      startDate: "",
      endDate: "",
      hoursPerDay: 2,
      location: "",
      address: "",
      mobileNumber: "",
      budgetType: "Per Hour",
      budget: 100,
      gender: "No Preference",
      numberOfPeople: 1,
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = form;

  const values = watch();

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  async function goNext() {
    const fieldsPerStep: Record<number, (keyof PostWorkFormData)[]> = {
      1: ["category"],
      2: ["description"],
      3: ["startDate", "endDate", "hoursPerDay"],
      4: ["location"],
      5: ["mobileNumber"],
      6: ["budgetType", "budget"],
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

  async function onSubmit(data: PostWorkFormData) {
    if (!session?.user) {
      toast.error("Please log in to post a work.");
      router.push("/auth/login");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          userEmail: session.user.email,
          userName: session.user.name || "Anonymous",
        }),
      });
      if (!res.ok) throw new Error("Failed to post work");
      toast.success("Work posted successfully! We'll match you with a helper.");
      onSuccess?.();
      router.push("/my-tasks");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
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
        {/* Step 1: Category */}
        {step === 1 && (
          <div className="space-y-3">
            <Label className="text-sm font-semibold">
              What help do you need?
            </Label>
            <div className="grid grid-cols-3 gap-2">
              {CATEGORIES.map((cat) => {
                const selected = values.category === cat.value;
                return (
                  <button
                    key={cat.value}
                    type="button"
                    onClick={() =>
                      setValue("category", cat.value, { shouldValidate: true })
                    }
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all ${
                      selected
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <cat.icon
                      className={`h-6 w-6 ${
                        selected ? "text-primary" : "text-muted-foreground"
                      }`}
                      strokeWidth={2}
                    />
                    <span
                      className={`text-xs font-medium text-center leading-tight ${
                        selected ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {cat.label}
                    </span>
                  </button>
                );
              })}
            </div>
            {errors.category && (
              <p className="text-xs text-destructive">{errors.category.message}</p>
            )}
          </div>
        )}

        {/* Step 2: Description */}
        {step === 2 && (
          <div className="space-y-3">
            <Label htmlFor="pw-desc" className="text-sm font-semibold">
              Describe what you need
            </Label>
            <Textarea
              id="pw-desc"
              {...register("description")}
              placeholder="E.g., Need someone to help my mother with daily activities..."
              rows={4}
              maxLength={500}
              className="text-sm"
            />
            <div className="text-right text-xs text-muted-foreground">
              {values.description?.length || 0}/500
            </div>
            {errors.description && (
              <p className="text-xs text-destructive">
                {errors.description.message}
              </p>
            )}
          </div>
        )}

        {/* Step 3: Schedule */}
        {step === 3 && (
          <div className="space-y-3">
            <Label className="text-sm font-semibold">
              When do you need help?
            </Label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="pw-start" className="text-xs">Start</Label>
                <Input
                  id="pw-start"
                  type="date"
                  {...register("startDate")}
                  min={minDate}
                  className="mt-1 h-10 text-sm"
                />
                {errors.startDate && (
                  <p className="text-xs text-destructive mt-0.5">
                    {errors.startDate.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="pw-end" className="text-xs">End</Label>
                <Input
                  id="pw-end"
                  type="date"
                  {...register("endDate")}
                  min={values.startDate || minDate}
                  className="mt-1 h-10 text-sm"
                />
                {errors.endDate && (
                  <p className="text-xs text-destructive mt-0.5">
                    {errors.endDate.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <Label htmlFor="pw-hours" className="text-xs">Hours/day</Label>
              <Input
                id="pw-hours"
                type="number"
                {...register("hoursPerDay")}
                min={1}
                max={12}
                className="mt-1 h-10 text-sm max-w-24"
              />
              {errors.hoursPerDay && (
                <p className="text-xs text-destructive mt-0.5">
                  {errors.hoursPerDay.message}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Step 4: Location */}
        {step === 4 && (
          <div className="space-y-3">
            <Label className="text-sm font-semibold">
              Where do you need the helper?
            </Label>
            <Select
              value={values.location}
              onValueChange={(val) =>
                setValue("location", val, { shouldValidate: true })
              }
            >
              <SelectTrigger className="h-10 text-sm">
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
              <p className="text-xs text-destructive">
                {errors.location.message}
              </p>
            )}
            <div>
              <Label htmlFor="pw-address" className="text-xs">
                Address (optional)
              </Label>
              <Input
                id="pw-address"
                {...register("address")}
                placeholder="Building, street, landmark"
                className="mt-1 h-10 text-sm"
              />
            </div>
          </div>
        )}

        {/* Step 5: Contact */}
        {step === 5 && (
          <div className="space-y-3">
            <Label htmlFor="pw-phone" className="text-sm font-semibold">
              Your contact number
            </Label>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground px-2.5 py-2 bg-surface rounded-lg border border-border h-10 flex items-center">
                +91
              </span>
              <Input
                id="pw-phone"
                {...register("mobileNumber")}
                placeholder="9876543210"
                maxLength={10}
                className="h-10 text-sm"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Shared with assigned helper only
            </p>
            {errors.mobileNumber && (
              <p className="text-xs text-destructive">
                {errors.mobileNumber.message}
              </p>
            )}
          </div>
        )}

        {/* Step 6: Budget */}
        {step === 6 && (
          <div className="space-y-3">
            <Label className="text-sm font-semibold">Your budget</Label>
            <div>
              <Label className="text-xs">Type</Label>
              <RadioGroup
                value={values.budgetType}
                onValueChange={(val) =>
                  setValue("budgetType", val as PostWorkFormData["budgetType"], {
                    shouldValidate: true,
                  })
                }
                className="flex gap-3 mt-1.5"
              >
                {["Per Hour", "Per Day", "Fixed"].map((type) => (
                  <div key={type} className="flex items-center gap-1.5">
                    <RadioGroupItem value={type} id={`bt-${type}`} />
                    <Label htmlFor={`bt-${type}`} className="cursor-pointer text-sm">
                      {type}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="pw-budget" className="text-xs">Amount (₹)</Label>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-base font-semibold text-muted-foreground">₹</span>
                <Input
                  id="pw-budget"
                  type="number"
                  {...register("budget")}
                  min={50}
                  className="h-10 text-sm max-w-32"
                />
              </div>
              {errors.budget && (
                <p className="text-xs text-destructive mt-0.5">
                  {errors.budget.message}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Step 7: Review */}
        {step === 7 && (
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Review & Submit</h3>
            <div className="space-y-2">
              <ReviewRow label="Service" value={values.category} onEdit={() => setStep(1)} />
              <ReviewRow label="Description" value={values.description} onEdit={() => setStep(2)} />
              <ReviewRow
                label="Schedule"
                value={`${values.startDate} → ${values.endDate}, ${values.hoursPerDay}h/day`}
                onEdit={() => setStep(3)}
              />
              <ReviewRow
                label="Location"
                value={`${values.location}${values.address ? `, ${values.address}` : ""}`}
                onEdit={() => setStep(4)}
              />
              <ReviewRow label="Contact" value={`+91 ${values.mobileNumber}`} onEdit={() => setStep(5)} />
              <ReviewRow label="Budget" value={`₹${values.budget} ${values.budgetType}`} onEdit={() => setStep(6)} />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t">
              <div>
                <Label className="text-xs">Gender Pref.</Label>
                <RadioGroup
                  value={values.gender}
                  onValueChange={(val) => setValue("gender", val)}
                  className="flex flex-wrap gap-x-3 gap-y-1 mt-1"
                >
                  {["Male", "Female", "Any"].map((g) => (
                    <div key={g} className="flex items-center gap-1">
                      <RadioGroupItem value={g === "Any" ? "No Preference" : g} id={`g-${g}`} />
                      <Label htmlFor={`g-${g}`} className="cursor-pointer text-xs">
                        {g}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="pw-people" className="text-xs">People needed</Label>
                <Input
                  id="pw-people"
                  type="number"
                  {...register("numberOfPeople")}
                  min={1}
                  max={10}
                  className="mt-1 h-9 text-sm max-w-20"
                />
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
              Post Work
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

function ReviewRow({
  label,
  value,
  onEdit,
}: {
  label: string;
  value: string;
  onEdit: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 px-3 py-2 bg-surface rounded-lg">
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="text-xs font-medium text-foreground truncate">
          {value}
        </p>
      </div>
      <button
        type="button"
        onClick={onEdit}
        className="shrink-0 p-1 rounded-md hover:bg-muted transition-colors"
        aria-label={`Edit ${label}`}
      >
        <Edit3 className="h-3.5 w-3.5 text-primary" />
      </button>
    </div>
  );
}
