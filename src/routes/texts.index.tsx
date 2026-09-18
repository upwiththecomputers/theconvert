import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type CSSProperties } from "react";
import { useAos } from "@/components/aos";
import { RuleCross } from "@/components/cross-mark";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StellarPortrait } from "@/components/stellar-portrait";
import { SITE } from "@/lib/site";
import { CATALOG } from "@/lib/catalog";

export const Route = createFileRoute("/texts/")({
  component: TextsIndex,
  head: () => ({
    meta: [
      { title: `Texts — ${SITE.name}` },
      {
        name: "description",
        content:
          "Read Saint Augustine: Confessions, the City of God, On Christian Doctrine, Soliloquies, Enchiridion, and On the Trinity.",
      },
    ],
  }),
});

function TextsIndex() {
  useAos();
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return CATALOG;
    return CATALOG.filter((w) =>
      [w.title, w.latin, w.kind, w.summary, w.translator].join(" ").toLowerCase().includes(s),
    );
  }, [q]);

  return (
    <div className="min-h-dvh bg-cream text-ink">
      <SiteHeader />
      <main id="main" className="px-5 pb-20 pt-8 sm:px-8 lg:px-12">
        <header className="mx-auto max-w-3xl text-center" data-aos>
          <p className="kicker">The library</p>
          <h1 className="mt-4 font-display text-4xl tracking-[0.1em] sm:text-5xl">
            Texts
          </h1>
          <RuleCross className="mx-auto mt-8 max-w-xs text-gold" />
          <p className="mx-auto mt-6 measure text-lg text-muted">
            Selected books in public-domain English. Search by title, Latin
            name, or translator.
          </p>
          <label className="mx-auto mt-8 block max-w-md text-left">
            <span className="sr-only">Search texts</span>
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search the works"
              className="h-11 w-full border-b border-ink/20 bg-transparent px-1 font-body text-lg outline-none placeholder:text-muted/70 focus:border-gold"
            />
          </label>
        </header>

        {filtered.length === 0 ? (
          <p className="mx-auto mt-16 max-w-lg text-center text-muted">
            No work matches that search. Try Confessions, civitate, or Pusey.
          </p>
        ) : (
          <ul className="mx-auto mt-16 grid max-w-6xl gap-10 md:grid-cols-2">
            {filtered.map((work, i) => (
              <li
                key={work.slug}
                data-aos
                style={{ "--aos-delay": `${(i % 2) * 90}ms` } as CSSProperties}
              >
                <Link
                  to="/texts/$slug"
                  params={{ slug: work.slug }}
                  className="group grid gap-5 no-underline sm:grid-cols-[minmax(0,0.9fr)_1.1fr] sm:items-center"
                >
                  <StellarPortrait
                    src={work.image}
                    alt={work.imageAlt}
                    imgClassName="aspect-[4/3] object-top"
                  />
                  <div>
                    <p className="font-display text-[0.65rem] uppercase tracking-[0.22em] text-gold-ink">
                      {work.year} · {work.kind}
                    </p>
                    <h2 className="mt-2 font-display text-2xl tracking-[0.06em] group-hover:text-gold-ink">
                      {work.title}
                    </h2>
                    <p className="mt-1 italic text-muted">{work.latin}</p>
                    <p className="mt-3 text-base text-ink/85">{work.summary}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
