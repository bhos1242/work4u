"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTaskerDrawer } from "@/components/tasker-drawer";

export function ApplyWorkButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { setOpen } = useTaskerDrawer();

  return (
    <>
      {/* Mobile: open drawer */}
      <Button
        type="button"
        size="lg"
        variant="ghost"
        className={`md:hidden ${className}`}
        onClick={() => setOpen(true)}
      >
        {children}
      </Button>
      {/* Desktop: navigate */}
      <Button asChild size="lg" variant="ghost" className={`hidden md:inline-flex ${className}`}>
        <Link href="/be-a-tasker">{children}</Link>
      </Button>
    </>
  );
}
