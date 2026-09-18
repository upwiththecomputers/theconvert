import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { CrossMark } from "@/components/cross-mark";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader({ inverted = false }: { inverted?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "relative z-30 flex items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12",
        inverted ? "text-cream" : "text-ink",
      )}
    >
      <Link
        to="/"
        className="group flex items-center gap-3 no-underline"
        aria-label={`${SITE.name}, home`}
      >
        <CrossMark
          className={cn(
            "h-7 w-5 transition-transform duration-150 ease-out group-hover:scale-[1.04]",
            inverted ? "text-gold-bright" : "text-gold",
          )}
        />
        <span className="font-display text-sm tracking-[0.28em] uppercase">
          {SITE.name}
        </span>
      </Link>

      <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
        {NAV.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "font-display text-[0.7rem] tracking-[0.22em] uppercase transition-colors duration-150",
              inverted
                ? "text-cream/80 hover:text-gold-bright"
                : "text-ink/80 hover:text-gold-ink",
            )}
            activeProps={{
              className: inverted ? "text-gold-bright" : "text-gold-ink",
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        className="relative flex size-11 items-center justify-center md:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className={cn(
            "absolute h-px w-5 transition-transform duration-150",
            inverted ? "bg-cream" : "bg-ink",
            open ? "translate-y-0 rotate-45" : "-translate-y-1.5",
          )}
        />
        <span
          className={cn(
            "absolute h-px w-5 transition-opacity duration-150",
            inverted ? "bg-cream" : "bg-ink",
            open ? "opacity-0" : "opacity-100",
          )}
        />
        <span
          className={cn(
            "absolute h-px w-5 transition-transform duration-150",
            inverted ? "bg-cream" : "bg-ink",
            open ? "translate-y-0 -rotate-45" : "translate-y-1.5",
          )}
        />
      </button>

      {open ? (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full z-40 border-t border-gold/30 bg-ink text-cream md:hidden"
        >
          <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex min-h-11 items-center font-display text-sm tracking-[0.2em] uppercase"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
