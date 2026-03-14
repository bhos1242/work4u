"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";
import { X } from "lucide-react";
import { TaskerRegistrationForm } from "@/components/tasker-registration-form";

const TaskerDrawerContext = createContext<{
  open: boolean;
  setOpen: (v: boolean) => void;
}>({ open: false, setOpen: () => {} });

export function useTaskerDrawer() {
  return useContext(TaskerDrawerContext);
}

export function TaskerDrawerProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <TaskerDrawerContext.Provider value={{ open, setOpen }}>
      {children}
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="max-h-[90vh]">
          <div className="flex items-center justify-between px-4 pt-1 pb-0">
            <DrawerHeader className="p-0">
              <DrawerTitle className="text-base font-bold">Apply for Work</DrawerTitle>
              <DrawerDescription className="text-xs">
                Register as a student helper
              </DrawerDescription>
            </DrawerHeader>
            <DrawerClose className="p-1.5 -mr-1 rounded-full hover:bg-muted transition-colors">
              <X className="h-4 w-4 text-muted-foreground" />
            </DrawerClose>
          </div>
          <div className="overflow-y-auto px-4 pb-4 pt-3">
            <TaskerRegistrationForm />
          </div>
        </DrawerContent>
      </Drawer>
    </TaskerDrawerContext.Provider>
  );
}
