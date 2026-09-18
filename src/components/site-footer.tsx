import { Link } from "@tanstack/react-router";
import { CrossMark } from "@/components/cross-mark";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-cream px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="flex items-center gap-2 font-display text-sm tracking-[0.24em] uppercase">
            <CrossMark className="h-5 w-4 text-gold" />
            {SITE.name}
          </p>
          <p className="mt-3 max-w-sm text-base text-muted">
            Public-domain English of Augustine of Hippo, set for slow reading.
            Pusey, Dods, Shaw, Haddan, Starbuck.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-display text-[0.68rem] uppercase tracking-[0.2em] text-gold-ink">
          <Link to="/texts">Texts</Link>
          <Link to="/garden">The Garden</Link>
          <Link to="/about">Augustine</Link>
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-sm text-muted">
        Thagaste 354 — Hippo Regius 430. Doctor of the Church.
      </p>
    </footer>
  );
}
