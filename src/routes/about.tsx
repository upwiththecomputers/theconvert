import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { useAos } from "@/components/aos";
import { ParticleField } from "@/components/particle-field";
import { RuleCross } from "@/components/cross-mark";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StellarPortrait } from "@/components/stellar-portrait";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: `Augustine — ${SITE.name}` },
      {
        name: "description",
        content:
          "Aurelius Augustinus of Thagaste: rhetor, convert, bishop of Hippo, Doctor of the Church. The life behind the texts of The Convert.",
      },
    ],
  }),
});

const BEATS = [
  {
    year: "354",
    title: "Thagaste",
    body: "Born in Numidia to Monica, a Christian, and Patricius, a pagan official. North Africa is still Roman, still restless.",
  },
  {
    year: "371–383",
    title: "Carthage and the pear tree",
    body: "Rhetoric, Manichaeism, a nameless companion, a son Adeodatus. He steals fruit not from hunger but from the love of transgression.",
  },
  {
    year: "384–386",
    title: "Milan",
    body: "Chair of rhetoric under Valentinian. Ambrose preaches. Neoplatonism unseats the old dualism. In a garden, a child sings: tolle, lege.",
  },
  {
    year: "387",
    title: "Baptism",
    body: "Ambrose baptizes Augustine, Alypius, and Adeodatus at the Easter vigil. Monica dies at Ostia having seen her son a Catholic.",
  },
  {
    year: "395–430",
    title: "Hippo Regius",
    body: "Priest, then bishop. Against Donatists and Pelagius he writes a library. The Vandals are at the walls when he dies, reciting the penitential psalms.",
  },
];

function About() {
  useAos();

  return (
    <div className="min-h-dvh bg-cream text-ink">
      <section className="relative overflow-hidden bg-ink text-cream">
        <ParticleField className="absolute inset-0 h-full w-full opacity-80" />
        <div className="relative z-10">
          <SiteHeader inverted />
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-6 sm:px-8 lg:grid-cols-2 lg:px-12">
            <div>
              <p className="kicker text-gold-bright">Aurelius Augustinus</p>
              <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.95] tracking-[0.08em]">
                Bishop,
                <br />
                convert,
                <br />
                doctor
              </h1>
              <p className="mt-6 max-w-md text-lg text-cream/80">
                13 November 354 — 28 August 430. The last of the Latin Fathers
                and the first medieval mind: a life turned, then offered.
              </p>
            </div>
            <StellarPortrait
              src="/images/augustine-desk.svg"
              alt="Saint Augustine at his desk, a classical painting digitized into black ink dots"
              imgClassName="aspect-[3/2]"
            />
          </div>
        </div>
      </section>

      <main id="main" className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <section className="mx-auto measure" data-aos>
            <p className="kicker">This house</p>
            <h2 className="mt-3 font-display text-3xl tracking-[0.06em]">
              Why The Convert
            </h2>
            <RuleCross className="mt-8 max-w-[12rem] text-gold" />
            <p className="mt-8 text-lg leading-[1.7]">
              Conversion, for Augustine, is not a single hour. It is the long
              correction of love: from the self that would be God, to the God
              who became man. This site gathers public-domain English of the
              major works and sets them in a chapel of type — cream paper,
              black ink, and crosses assembled from dots.
            </p>
            <p className="mt-6 text-lg leading-[1.7]">
              Tradition supplies the words and the faces. Cybernetics is the
              conversion of those faces into signal: a painting sampled,
              reduced, reprinted as dots. Between them, a reading.
            </p>
          </section>

          <ol className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BEATS.map((beat, i) => (
              <li
                key={beat.year}
                className="border-t border-gold/40 pt-5"
                data-aos
                style={{ "--aos-delay": `${i * 70}ms` } as CSSProperties}
              >
                <p className="font-display text-[0.68rem] uppercase tracking-[0.22em] text-gold-ink">
                  {beat.year}
                </p>
                <h3 className="mt-2 font-display text-xl tracking-[0.05em]">
                  {beat.title}
                </h3>
                <p className="mt-3 text-muted">{beat.body}</p>
              </li>
            ))}
          </ol>

          <p className="mt-16 text-center" data-aos>
            <Link
              to="/texts"
              className="inline-flex min-h-11 items-center bg-ink px-6 py-2 font-display text-[0.7rem] uppercase tracking-[0.22em] text-cream transition-transform duration-150 ease-out hover:bg-ink-soft active:scale-[0.96]"
            >
              Open the texts
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
