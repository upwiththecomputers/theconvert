import { createFileRoute, Link } from "@tanstack/react-router";
import { useAos } from "@/components/aos";
import { ParticleField } from "@/components/particle-field";
import { RuleCross } from "@/components/cross-mark";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StellarPortrait } from "@/components/stellar-portrait";
import { SITE } from "@/lib/site";
import { getWork } from "@/lib/texts";

export const Route = createFileRoute("/garden")({
  component: Garden,
  head: () => ({
    meta: [
      { title: `The Garden — ${SITE.name}` },
      {
        name: "description",
        content:
          "Augustine's conversion at Milan, 386: the fig-tree, the child's voice Tolle lege, and the opening of the Apostle.",
      },
    ],
  }),
});

function Garden() {
  useAos();
  const confessions = getWork("confessions");
  const garden = confessions?.passages.find((p) => p.id === "viii-garden");

  return (
    <div className="min-h-dvh bg-cream text-ink">
      <section className="relative min-h-[70dvh] overflow-hidden bg-ink text-cream">
        <ParticleField className="absolute inset-0 h-full w-full" />
        <div className="relative z-10 flex min-h-[70dvh] flex-col">
          <SiteHeader inverted />
          <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end gap-8 px-5 pb-16 pt-8 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
            <div>
              <p className="kicker text-gold-bright">Milan · 386</p>
              <h1 className="mt-4 font-display text-[clamp(2.6rem,7vw,5.4rem)] leading-[0.95] tracking-[0.08em]">
                Tolle,
                <br />
                lege
              </h1>
              <p className="mt-5 max-w-md text-lg text-cream/80 italic">
                Take up and read. Take up and read.
              </p>
            </div>
            <StellarPortrait
              src="/images/augustine-garden.svg"
              alt="Saint Augustine reading the Epistle of Paul, after Benozzo Gozzoli, digitized into black ink dots"
              className="w-full max-w-xl"
              imgClassName="aspect-[16/10]"
              caption="After the Milan garden"
              captionClassName="text-cream/70"
            />
          </div>
        </div>
      </section>

      <main id="main" className="px-5 py-16 sm:px-8 lg:px-12">
        <article className="mx-auto measure" data-aos>
          <p className="kicker">Confessions · Book VIII</p>
          <h2 className="mt-4 font-display text-3xl tracking-[0.06em]">
            Under the fig-tree
          </h2>
          <RuleCross className="mt-8 max-w-[12rem] text-gold" />
          {garden?.paragraphs.map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "drop-cap mt-8 text-[1.05em] leading-[1.7]"
                  : "mt-6 text-[1.05em] leading-[1.7]"
              }
            >
              {para}
            </p>
          ))}
          <p className="mt-10">
            <Link
              to="/texts/$slug"
              params={{ slug: "confessions" }}
              className="font-display text-[0.7rem] uppercase tracking-[0.22em] text-gold-ink underline decoration-gold/40 underline-offset-8"
            >
              Continue in the Confessions
            </Link>
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
