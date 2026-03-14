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
import { Card, CardContent } from "@/components/ui/card";
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
  { value: "Senior Citizens Caretaking", label: "Senior Citizens Caretaking", icon: HeartHandshake },
  { value: "Personal Home Tutor", label: "Personal Home Tutor", icon: BookOpen },
  { value: "Computer/Tech Work", label: "Computer/Tech Work", icon: Monitor },
  { value: "Yoga Trainer", label: "Yoga Trainer", icon: Flower2 },
  { value: "Gardening", label: "Gardening", icon: Sprout },
  { value: "Home Cleaning", label: "Home Cleaning", icon: SprayCan },
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
      {/* Progress */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((s) => (
          <div
            key={s}
            className={`h-3 w-3 rounded-full transition-colors ${
              s <= step ? "bg-primary" : "bg-border"
            }`}
            aria-label={`Step ${s} of ${TOTAL_STEPS}`}
          />
        ))}
        <span className="ml-3 text-sm text-muted-foreground">
          Step {step} of {TOTAL_STEPS}
        </span>
      </div>

      <Card className="border border-border">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Step 1: Category */}
            {step === 1 && (
              <div className="space-y-4">
                <Label className="text-lg font-semibold">
                  What kind of help do you need?
                </Label>
                <div className="grid grid-cols-2 gap-3">
                  {CATEGORIES.map((cat) => {
                    const selected = values.category === cat.value;
                    return (
                      <button
                        key={cat.value}
                        type="button"
                        onClick={() =>
                          setValue("category", cat.value, { shouldValidate: true })
                        }
                        className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all min-h-12 ${
                          selected
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <cat.icon
                          className={`h-8 w-8 ${
                            selected ? "text-primary" : "text-muted-foreground"
                          }`}
                          strokeWidth={2}
                        />
                        <span
                          className={`text-sm font-medium text-center ${
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
                  <p className="text-sm text-destructive">{errors.category.message}</p>
                )}
              </div>
            )}

            {/* Step 2: Description */}
            {step === 2 && (
              <div className="space-y-4">
                <Label htmlFor="pw-desc" className="text-lg font-semibold">
                  Describe what you need help with
                </Label>
                <Textarea
                  id="pw-desc"
                  {...register("description")}
                  placeholder="E.g., Need someone to help my mother with daily activities like cooking, medicine reminders, and companionship for 3-4 hours..."
                  rows={5}
                  maxLength={500}
                />
                <div className="text-right text-sm text-muted-foreground">
                  {values.description?.length || 0}/500
                </div>
                {errors.description && (
                  <p className="text-sm text-destructive">
                    {errors.description.message}
                  </p>
                )}
              </div>
            )}

            {/* Step 3: Schedule */}
            {step === 3 && (
              <div className="space-y-4">
                <Label className="text-lg font-semibold">
                  When do you need help?
                </Label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="pw-start">Start Date</Label>
                    <Input
                      id="pw-start"
                      type="date"
                      {...register("startDate")}
                      min={minDate}
                      className="mt-1.5 min-h-12"
                    />
                    {errors.startDate && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.startDate.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="pw-end">End Date</Label>
                    <Input
                      id="pw-end"
                      type="date"
                      {...register("endDate")}
                      min={values.startDate || minDate}
                      className="mt-1.5 min-h-12"
                    />
                    {errors.endDate && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.endDate.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <Label htmlFor="pw-hours">Hours per day</Label>
                  <Input
                    id="pw-hours"
                    type="number"
                    {...register("hoursPerDay")}
                    min={1}
                    max={12}
                    className="mt-1.5 min-h-12 max-w-32"
                  />
                  {errors.hoursPerDay && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.hoursPerDay.message}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Location */}
            {step === 4 && (
              <div className="space-y-4">
                <Label className="text-lg font-semibold">
                  Where do you need the helper?
                </Label>
                <Select
                  value={values.location}
                  onValueChange={(val) =>
                    setValue("location", val, { shouldValidate: true })
                  }
                >
                  <SelectTrigger className="min-h-12">
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
                  <p className="text-sm text-destructive">
                    {errors.location.message}
                  </p>
                )}
                <div>
                  <Label htmlFor="pw-address">
                    Specific Address (optional)
                  </Label>
                  <Input
                    id="pw-address"
                    {...register("address")}
                    placeholder="Building name, street, landmark"
                    className="mt-1.5 min-h-12"
                  />
                </div>
              </div>
            )}

            {/* Step 5: Contact */}
            {step === 5 && (
              <div className="space-y-4">
                <Label htmlFor="pw-phone" className="text-lg font-semibold">
                  Your contact number
                </Label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground px-3 py-2 bg-surface rounded-lg border border-border min-h-12 flex items-center">
                    +91
                  </span>
                  <Input
                    id="pw-phone"
                    {...register("mobileNumber")}
                    placeholder="9876543210"
                    maxLength={10}
                    className="min-h-12"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  We&apos;ll share this with the assigned helper only
                </p>
                {errors.mobileNumber && (
                  <p className="text-sm text-destructive">
                    {errors.mobileNumber.message}
                  </p>
                )}
              </div>
            )}

            {/* Step 6: Budget */}
            {step === 6 && (
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Your budget</Label>
                <div>
                  <Label>Budget Type</Label>
                  <RadioGroup
                    value={values.budgetType}
                    onValueChange={(val) =>
                      setValue("budgetType", val as PostWorkFormData["budgetType"], {
                        shouldValidate: true,
                      })
                    }
                    className="flex gap-4 mt-2"
                  >
                    {["Per Hour", "Per Day", "Fixed"].map((type) => (
                      <div key={type} className="flex items-center gap-2">
                        <RadioGroupItem value={type} id={`bt-${type}`} />
                        <Label htmlFor={`bt-${type}`} className="cursor-pointer">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div>
                  <Label htmlFor="pw-budget">Amount (₹)</Label>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-lg font-semibold text-muted-foreground">
                      ₹
                    </span>
                    <Input
                      id="pw-budget"
                      type="number"
                      {...register("budget")}
                      min={50}
                      className="min-h-12 max-w-40"
                    />
                  </div>
                  {errors.budget && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.budget.message}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Step 7: Review */}
            {step === 7 && (
              <div className="space-y-5">
                <h3 className="text-lg font-semibold">Review Your Details</h3>
                <div className="space-y-3">
                  <ReviewRow
                    label="Service Type"
                    value={values.category}
                    onEdit={() => setStep(1)}
                  />
                  <ReviewRow
                    label="Description"
                    value={values.description}
                    onEdit={() => setStep(2)}
                  />
                  <ReviewRow
                    label="Schedule"
                    value={`${values.startDate} to ${values.endDate}, ${values.hoursPerDay}h/day`}
                    onEdit={() => setStep(3)}
                  />
                  <ReviewRow
                    label="Location"
                    value={`${values.location}${values.address ? `, ${values.address}` : ""}`}
                    onEdit={() => setStep(4)}
                  />
                  <ReviewRow
                    label="Contact"
                    value={`+91 ${values.mobileNumber}`}
                    onEdit={() => setStep(5)}
                  />
                  <ReviewRow
                    label="Budget"
                    value={`₹${values.budget} ${values.budgetType}`}
                    onEdit={() => setStep(6)}
                  />
                </div>

                {/* Additional fields */}
                <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <Label>Gender Preference</Label>
                    <RadioGroup
                      value={values.gender}
                      onValueChange={(val) => setValue("gender", val)}
                      className="flex gap-4 mt-2"
                    >
                      {["Male", "Female", "No Preference"].map((g) => (
                        <div key={g} className="flex items-center gap-2">
                          <RadioGroupItem value={g} id={`g-${g}`} />
                          <Label htmlFor={`g-${g}`} className="cursor-pointer text-sm">
                            {g}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  <div>
                    <Label htmlFor="pw-people">Number of people needed</Label>
                    <Input
                      id="pw-people"
                      type="number"
                      {...register("numberOfPeople")}
                      min={1}
                      max={10}
                      className="mt-1.5 min-h-12 max-w-24"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t">
              {step > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={goBack}
                  className="min-h-12 px-6 font-semibold rounded-lg"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              ) : (
                <div />
              )}
              {step < TOTAL_STEPS ? (
                <Button
                  type="button"
                  onClick={goNext}
                  className="bg-primary text-primary-foreground hover:bg-primary-dark min-h-12 px-6 font-semibold rounded-lg"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-primary text-primary-foreground hover:bg-primary-dark min-h-12 px-8 font-semibold rounded-lg text-base"
                >
                  {loading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <CheckCircle className="mr-2 h-4 w-4" />
                  )}
                  Post Work
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
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
    <div className="flex items-start justify-between gap-4 p-3 bg-surface rounded-lg">
      <div className="min-w-0">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground break-words">
          {value}
        </p>
      </div>
      <button
        type="button"
        onClick={onEdit}
        className="shrink-0 p-1.5 rounded-md hover:bg-muted transition-colors"
        aria-label={`Edit ${label}`}
      >
        <Edit3 className="h-4 w-4 text-primary" />
      </button>
    </div>
  );
}
