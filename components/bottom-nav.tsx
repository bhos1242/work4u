"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  Home,
  Search,
  PlusCircle,
  Briefcase,
  User,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/tasks", label: "Search", icon: Search },
  { href: "/post-work", label: "Post Work", icon: PlusCircle, isCta: true },
  { href: "/services", label: "Services", icon: Briefcase },
];

export function BottomNav() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const profileHref = session ? "/profile" : "/auth/login";
  const profileLabel = session ? "Profile" : "Login";

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80"
      aria-label="Bottom navigation"
    >
      <div className="flex items-end justify-around px-1 pb-[env(safe-area-inset-bottom)] h-16">
        {navItems.map((item) => {
          const isActive = item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

          if (item.isCta) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center -mt-4 group"
                aria-label={item.label}
              >
                <span className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white shadow-lg shadow-primary/30 group-active:scale-95 transition-transform">
                  <item.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <span className="text-[10px] font-semibold text-primary mt-0.5">
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-2 px-3 min-w-[56px] group transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <item.icon
                className={`h-5 w-5 transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                }`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className={`text-[10px] mt-0.5 transition-colors ${
                  isActive ? "font-semibold text-primary" : "font-medium group-hover:text-foreground"
                }`}
              >
                {item.label}
              </span>
              {isActive && (
                <span className="absolute bottom-0 h-0.5 w-8 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}

        {/* Profile / Login */}
        <Link
          href={profileHref}
          className={`flex flex-col items-center justify-center py-2 px-3 min-w-[56px] group transition-colors ${
            pathname.startsWith("/profile") || pathname.startsWith("/auth")
              ? "text-primary"
              : "text-muted-foreground"
          }`}
          aria-current={pathname.startsWith("/profile") ? "page" : undefined}
        >
          <User
            className={`h-5 w-5 transition-colors ${
              pathname.startsWith("/profile") || pathname.startsWith("/auth")
                ? "text-primary"
                : "text-muted-foreground group-hover:text-foreground"
            }`}
            strokeWidth={
              pathname.startsWith("/profile") || pathname.startsWith("/auth")
                ? 2.5
                : 2
            }
          />
          <span
            className={`text-[10px] mt-0.5 transition-colors ${
              pathname.startsWith("/profile") || pathname.startsWith("/auth")
                ? "font-semibold text-primary"
                : "font-medium group-hover:text-foreground"
            }`}
          >
            {profileLabel}
          </span>
        </Link>
      </div>
    </nav>
  );
}
