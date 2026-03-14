"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Loader2,
  Menu,
  X,
  Home,
  Briefcase,
  Users,
  BookOpen,
  Search,
  ArrowRight,
  LogIn,
  User,
  LayoutDashboard,
  ClipboardList,
  LogOut,
} from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/about-us", label: "About Us", icon: Users },
  { href: "/blogs", label: "Blog", icon: BookOpen },
  { href: "/tasks", label: "Search Work", icon: Search },
];

export function Navbar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="max-w-6xl mx-auto flex h-14 md:h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5">
          <span className="text-xl font-extrabold tracking-tight">
            <span className="text-primary">Work</span>
            <span className="text-foreground">4u</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Post a Work CTA - Desktop */}
          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary-dark h-9 px-4 font-semibold rounded-lg text-sm"
          >
            <Link href="/post-work">
              Post a Work
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>

          {/* Auth */}
          {status === "loading" ? (
            <Button variant="ghost" size="icon" disabled className="h-9 w-9">
              <Loader2 className="h-4 w-4 animate-spin" />
            </Button>
          ) : session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-9 w-9 rounded-full p-0"
                  aria-label="User menu"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={session.user?.image || ""}
                      alt={session.user?.name || "User avatar"}
                    />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
                      {session.user?.name?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-52" align="end" forceMount>
                <div className="flex items-center gap-2 p-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={session.user?.image || ""} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
                      {session.user?.name?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col leading-none min-w-0">
                    {session.user?.name && (
                      <p className="text-sm font-medium truncate">{session.user.name}</p>
                    )}
                    {session.user?.email && (
                      <p className="text-xs text-muted-foreground truncate">
                        {session.user.email}
                      </p>
                    )}
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center gap-2">
                    <User className="h-3.5 w-3.5" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile/my-dashboard" className="flex items-center gap-2">
                    <LayoutDashboard className="h-3.5 w-3.5" />
                    My Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/my-tasks" className="flex items-center gap-2">
                    <ClipboardList className="h-3.5 w-3.5" />
                    My Tasks
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer flex items-center gap-2 text-destructive focus:text-destructive"
                  onSelect={(event) => {
                    event.preventDefault();
                    signOut();
                  }}
                >
                  <LogOut className="h-3.5 w-3.5" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hidden md:inline-flex h-9 px-3 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <Link href="/auth/login">
                <LogIn className="mr-1.5 h-3.5 w-3.5" />
                Login
              </Link>
            </Button>
          )}

          {/* Mobile Menu - Hamburger hidden since we have bottom nav, but keep for non-bottom-nav pages */}
          <Drawer open={mobileOpen} onOpenChange={setMobileOpen}>
            <DrawerTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu" className="h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[85vh]">
              <div className="flex items-center justify-between px-4 pt-1">
                <DrawerTitle className="text-base font-extrabold">
                  <span className="text-primary">Work</span>
                  <span className="text-foreground">4u</span>
                </DrawerTitle>
                <DrawerClose className="p-1.5 -mr-1 rounded-full hover:bg-muted transition-colors">
                  <X className="h-4 w-4 text-muted-foreground" />
                </DrawerClose>
              </div>

              <nav className="flex flex-col gap-0.5 px-4 pt-4 pb-2" aria-label="Mobile navigation">
                {navLinks.map((link) => {
                  const isActive = link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "text-primary bg-primary/5"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      <link.icon className={`h-4 w-4 ${isActive ? "text-primary" : "text-muted-foreground"}`} strokeWidth={2} />
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="px-4 pb-4 pt-2 border-t border-border space-y-2">
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary-dark h-10 font-semibold rounded-xl text-sm"
                >
                  <Link href="/post-work" onClick={() => setMobileOpen(false)}>
                    Post a Work
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
                {!session && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full h-10 font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl text-sm"
                  >
                    <Link href="/auth/login" onClick={() => setMobileOpen(false)}>
                      <LogIn className="mr-1.5 h-4 w-4" />
                      Login / Sign Up
                    </Link>
                  </Button>
                )}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
