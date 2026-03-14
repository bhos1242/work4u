"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  MapPin,
  IndianRupee,
  Calendar,
  Filter,
  Loader2,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const SERVICE_AREAS = [
  "Shivajinagar", "Model Colony", "Bhosle Nagar", "Kothrud", "Karve Nagar",
  "Prabhat Road", "Ganeshkhind", "Aundh", "Sangvi", "Deccan Gymkhana", "Peth Area",
];

const CATEGORIES = [
  "Senior Citizens Caretaking", "Personal Home Tutor", "Computer/Tech Work",
  "Yoga Trainer", "Gardening", "Home Cleaning",
];

interface Task {
  id: string;
  category: string;
  description: string;
  location: string;
  budget: number;
  budgetType: string;
  status: string;
  startDate: string;
  createdAt: string;
}

const STATUS_COLORS: Record<string, string> = {
  OPEN: "bg-green-100 text-green-800",
  ASSIGNED: "bg-yellow-100 text-yellow-800",
  COMPLETED: "bg-gray-100 text-gray-800",
  PAID: "bg-blue-100 text-blue-800",
};

function FilterSidebar({
  areas,
  setAreas,
  categories,
  setCategories,
  onClear,
}: {
  areas: string[];
  setAreas: (a: string[]) => void;
  categories: string[];
  setCategories: (c: string[]) => void;
  onClear: () => void;
}) {
  function toggleArea(area: string) {
    setAreas(
      areas.includes(area) ? areas.filter((a) => a !== area) : [...areas, area]
    );
  }

  function toggleCategory(cat: string) {
    setCategories(
      categories.includes(cat)
        ? categories.filter((c) => c !== cat)
        : [...categories, cat]
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-foreground mb-3">Area</h3>
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {SERVICE_AREAS.map((area) => (
            <div key={area} className="flex items-center gap-2">
              <Checkbox
                id={`area-${area}`}
                checked={areas.includes(area)}
                onCheckedChange={() => toggleArea(area)}
              />
              <Label htmlFor={`area-${area}`} className="text-sm cursor-pointer">
                {area}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-3">Category</h3>
        <div className="space-y-2">
          {CATEGORIES.map((cat) => (
            <div key={cat} className="flex items-center gap-2">
              <Checkbox
                id={`cat-${cat}`}
                checked={categories.includes(cat)}
                onCheckedChange={() => toggleCategory(cat)}
              />
              <Label htmlFor={`cat-${cat}`} className="text-sm cursor-pointer">
                {cat}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onClear}
        className="text-sm text-primary hover:underline"
      >
        Clear All
      </button>
    </div>
  );
}

export function TasksBrowser() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [areas, setAreas] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  function clearFilters() {
    setAreas([]);
    setCategories([]);
    setPage(1);
  }

  useEffect(() => {
    async function fetchTasks() {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        params.set("page", String(page));
        params.set("limit", "12");
        if (areas.length) params.set("areas", areas.join(","));
        if (categories.length) params.set("categories", categories.join(","));

        const res = await fetch(`/api/tasks?${params}`);
        if (res.ok) {
          const data = await res.json();
          setTasks(data.tasks || []);
          setTotalPages(data.totalPages || 1);
        }
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    }
    fetchTasks();
  }, [page, areas, categories]);

  return (
    <div className="flex gap-8">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-[280px] shrink-0">
        <div className="sticky top-24 p-4 bg-surface rounded-xl border border-border">
          <h2 className="font-semibold text-foreground mb-4">Filters</h2>
          <FilterSidebar
            areas={areas}
            setAreas={setAreas}
            categories={categories}
            setCategories={setCategories}
            onClear={clearFilters}
          />
        </div>
      </aside>

      <div className="flex-1">
        {/* Mobile Filter */}
        <div className="lg:hidden mb-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="min-h-11">
                <Filter className="mr-2 h-4 w-4" />
                Filters
                {(areas.length > 0 || categories.length > 0) && (
                  <Badge className="ml-2 bg-primary text-primary-foreground">
                    {areas.length + categories.length}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetTitle>Filters</SheetTitle>
              <div className="mt-6">
                <FilterSidebar
                  areas={areas}
                  setAreas={setAreas}
                  categories={categories}
                  setCategories={setCategories}
                  onClear={clearFilters}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Task Grid */}
        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="border border-border">
                <CardContent className="pt-6 space-y-3">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-10 w-28 mt-4" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : tasks.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No tasks found. Try adjusting your filters.
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {tasks.map((task) => (
                <Card
                  key={task.id}
                  className="group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 border border-border"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {task.category}
                      </Badge>
                      <Badge
                        className={`text-xs ${STATUS_COLORS[task.status] || ""}`}
                      >
                        {task.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <h3 className="font-semibold text-foreground">
                      {task.category}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {task.description}
                    </p>
                    <div className="space-y-1.5 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 shrink-0" />
                        {task.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <IndianRupee className="h-4 w-4 shrink-0" />
                        ₹{task.budget} {task.budgetType}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 shrink-0" />
                        {new Date(task.startDate).toLocaleDateString("en-IN")}
                      </div>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full mt-2 min-h-11 font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg"
                    >
                      <Link href={`/tasks/${task.id}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-10">
                <Button
                  variant="outline"
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
                  className="min-h-11"
                >
                  Previous
                </Button>
                <span className="flex items-center px-4 text-sm text-muted-foreground">
                  Page {page} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => p + 1)}
                  className="min-h-11"
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
