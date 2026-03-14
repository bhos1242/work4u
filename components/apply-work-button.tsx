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
        variant="outline"
        className={`md:hidden ${className}`}
        onClick={() => setOpen(true)}
      >
        {children}
      </Button>
      {/* Desktop: navigate */}
      <Button asChild size="lg" variant="outline" className={`hidden md:inline-flex ${className}`}>
        <Link href="/be-a-tasker">{children}</Link>
      </Button>
    </>
  );
}
