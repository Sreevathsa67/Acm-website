import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { ThemeToggle } from "@/components/ThemeToggle";
import { markMissingIfBroken } from "@/lib/image";
import { chapter, navLinks } from "@/data/site";

/**
 * Reserved slot for the ACM chapter logo. Drop the real file in at
 * `public/Assets/logo_acm.svg` and it appears here at exactly this size —
 * until then the slot holds its space so nothing shifts.
 */
function LogoSlot() {
  const [missing, setMissing] = useState(false);

  return (
    <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full">
      {missing ? (
        <span
          title="Add public/Assets/logo_acm.svg"
          className="grid h-10 w-10 place-items-center rounded-full border border-dashed border-primary/50 bg-secondary/60 text-[9px] font-bold uppercase tracking-wider text-muted-foreground"
        >
          logo
        </span>
      ) : (
        <img
          src="/Assets/logo_acm.svg"
          alt="ACM logo"
          onError={() => setMissing(true)}
          ref={markMissingIfBroken(setMissing)}
          className="h-10 w-10 object-contain"
        />
      )}
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto mt-4 w-[min(1200px,94vw)] rounded-3xl border border-border/70 bg-card/70 backdrop-blur-xl">
        <div className="flex items-center justify-between px-4 py-2.5">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <LogoSlot />
            <span className="font-display text-lg font-extrabold leading-none">
              {chapter.shortName}
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Student Chapter
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-semibold lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-muted-foreground transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center rounded-full border border-border/70 bg-card/70 lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 border-t border-border/70 px-4 pb-4 pt-3 text-sm font-semibold lg:hidden">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                activeProps={{ className: "bg-secondary text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
