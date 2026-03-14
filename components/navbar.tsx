"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Loader2, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/blogs", label: "Blog" },
  { href: "/tasks", label: "Search Work" },
];

export function Navbar() {
  const { data: session, status } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-[72px] items-center justify-between px-4 md:h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight">
            <span className="text-primary">Work</span>
            <span className="text-foreground">4u</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Post a Work CTA - Desktop */}
          <Button
            asChild
            className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary-dark min-h-[44px] px-6 font-semibold rounded-lg"
          >
            <Link href="/post-work">Post a Work</Link>
          </Button>

          {/* Auth */}
          {status === "loading" ? (
            <Button variant="ghost" size="icon" disabled>
              <Loader2 className="h-4 w-4 animate-spin" />
            </Button>
          ) : session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full"
                  aria-label="User menu"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={session.user?.image || ""}
                      alt={session.user?.name || "User avatar"}
                    />
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {session.user?.name?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    {session.user?.name && (
                      <p className="font-medium">{session.user.name}</p>
                    )}
                    {session.user?.email && (
                      <p className="w-50 truncate text-sm text-muted-foreground">
                        {session.user.email}
                      </p>
                    )}
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile/my-dashboard">My Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/my-tasks">My Tasks</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer"
                  onSelect={(event) => {
                    event.preventDefault();
                    signOut();
                  }}
                >
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              asChild
              variant="outline"
              className="hidden md:inline-flex min-h-[44px] font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg"
            >
              <Link href="/auth/login">Login / Sign Up</Link>
            </Button>
          )}

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu" className="min-h-[44px] min-w-[44px]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="text-xl font-extrabold">
                    <span className="text-primary">Work</span>
                    <span className="text-foreground">4u</span>
                  </span>
                </div>
                <nav className="flex flex-col gap-1 p-4" aria-label="Mobile navigation">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-surface transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-4 border-t space-y-3">
                  <Button
                    asChild
                    className="w-full bg-primary text-primary-foreground hover:bg-primary-dark min-h-[48px] font-semibold rounded-lg"
                  >
                    <Link href="/post-work" onClick={() => setMobileOpen(false)}>
                      Post a Work
                    </Link>
                  </Button>
                  {!session && (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full min-h-[48px] font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg"
                    >
                      <Link href="/auth/login" onClick={() => setMobileOpen(false)}>
                        Login / Sign Up
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
