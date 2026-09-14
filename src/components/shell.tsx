import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("size-5", className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 16.5 12 4l8 12.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M8 16.5h8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 20h4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

const NAV = [
  { to: "/huggingface" as const, label: "Models" },
  { to: "/conduit" as const, label: "Router" },
];

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-30 border-b border-border/80 bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            to="/"
            className="flex min-h-11 items-center gap-2 text-sm font-medium tracking-tight"
          >
            <Mark />
            <span>Forge</span>
          </Link>
          <nav className="flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="inline-flex min-h-11 items-center rounded-lg px-3 text-sm text-muted transition-colors duration-150 hover:bg-raised hover:text-fg"
                activeProps={{ className: "text-fg bg-raised" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}
