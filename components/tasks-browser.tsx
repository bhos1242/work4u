"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import {
  MapPin,
  IndianRupee,
  Calendar,
  Filter,
  ArrowRight,
  Search,
  X,
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
    <div className="space-y-5">
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-2">Area</h3>
        <div className="space-y-1.5 max-h-48 overflow-y-auto">
          {SERVICE_AREAS.map((area) => (
            <div key={area} className="flex items-center gap-2">
              <Checkbox
                id={`area-${area}`}
                checked={areas.includes(area)}
                onCheckedChange={() => toggleArea(area)}
              />
              <Label htmlFor={`area-${area}`} className="text-xs cursor-pointer">
                {area}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-foreground mb-2">Category</h3>
        <div className="space-y-1.5">
          {CATEGORIES.map((cat) => (
            <div key={cat} className="flex items-center gap-2">
              <Checkbox
                id={`cat-${cat}`}
                checked={categories.includes(cat)}
                onCheckedChange={() => toggleCategory(cat)}
              />
              <Label htmlFor={`cat-${cat}`} className="text-xs cursor-pointer">
                {cat}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onClear}
        className="text-xs text-primary hover:underline"
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
    <div className="flex gap-6">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-[240px] shrink-0">
        <div className="sticky top-20 p-4 bg-card rounded-xl border border-border">
          <h2 className="text-sm font-bold text-foreground mb-3">Filters</h2>
          <FilterSidebar
            areas={areas}
            setAreas={setAreas}
            categories={categories}
            setCategories={setCategories}
            onClear={clearFilters}
          />
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        {/* Mobile Filter */}
        <div className="lg:hidden mb-4">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" size="sm" className="h-9 text-xs">
                <Filter className="mr-1.5 h-3.5 w-3.5" />
                Filters
                {(areas.length > 0 || categories.length > 0) && (
                  <Badge className="ml-1.5 bg-primary text-primary-foreground h-5 min-w-5 text-[10px]">
                    {areas.length + categories.length}
                  </Badge>
                )}
              </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[80vh]">
              <div className="flex items-center justify-between px-4 pt-1">
                <DrawerHeader className="p-0">
                  <DrawerTitle className="text-base font-bold">Filters</DrawerTitle>
                </DrawerHeader>
                <DrawerClose className="p-1.5 -mr-1 rounded-full hover:bg-muted transition-colors">
                  <X className="h-4 w-4 text-muted-foreground" />
                </DrawerClose>
              </div>
              <div className="overflow-y-auto px-4 pb-4 pt-3">
                <FilterSidebar
                  areas={areas}
                  setAreas={setAreas}
                  categories={categories}
                  setCategories={setCategories}
                  onClear={clearFilters}
                />
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Task Grid */}
        {loading ? (
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-border p-4 space-y-2.5">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-2/3" />
                <Skeleton className="h-8 w-24 mt-2" />
              </div>
            ))}
          </div>
        ) : tasks.length === 0 ? (
          <div className="text-center py-12">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              No tasks found. Try adjusting your filters.
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {tasks.map((task) => (
                <Link
                  key={task.id}
                  href={`/tasks/${task.id}`}
                  className="group rounded-xl border border-border bg-card p-4 hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-[10px] font-medium">
                      {task.category}
                    </Badge>
                    <Badge className={`text-[10px] ${STATUS_COLORS[task.status] || ""}`}>
                      {task.status}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3 leading-snug">
                    {task.description}
                  </p>

                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mb-3">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3 shrink-0" />
                      {task.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <IndianRupee className="h-3 w-3 shrink-0" />
                      ₹{task.budget} {task.budgetType}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3 shrink-0" />
                      {new Date(task.startDate).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                    View Details
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
                  className="h-8 text-xs"
                >
                  Previous
                </Button>
                <span className="text-xs text-muted-foreground px-2">
                  {page} / {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => p + 1)}
                  className="h-8 text-xs"
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
