import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import heroWatch from "@/assets/hero-watch.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tempus Aurum" },
      { name: "description", content: "An atelier of recommendation. Tempus Aurum is a quiet atlas of timepieces curated by collectors, not algorithms." },
      { property: "og:title", content: "Our Philosophy — Tempus Aurum" },
      { property: "og:description", content: "A recommendation atelier built on restraint, not noise." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero pb-32 pt-44">
        <img src={heroWatch} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 to-espresso/95" />
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--gold-soft)]">Our philosophy</span>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-bone md:text-7xl">
            We recommend the <em className="text-gradient-gold not-italic">few</em> watches that<br />
            survive their decade.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-bone/80 md:text-lg">
            Tempus Aurum is not a shop. It is a slow, deliberate atlas — written for collectors who
            would rather own one watch they understand than ten they merely possess.
          </p>
        </div>
      </section>

      <section className="bg-background py-28">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <SectionHeading
            eyebrow="The atelier"
            title={<>Curation, not commerce.</>}
            description="Every reference is reviewed by collectors who handle the watch — winding it, wearing it, listening to it. We carry no inventory and accept no maison sponsorship."
          />

          <div className="mt-20 grid gap-12 md:grid-cols-3">
            {[
              { n: "I.", t: "Restraint", b: "We list fewer watches, not more. A short atlas keeps each entry honest." },
              { n: "II.", t: "Provenance", b: "We favour references with lineage — designs that have earned the right to remain unchanged." },
              { n: "III.", t: "Patina", b: "We score for character, finish, and the way a watch ages. Trends are noise." },
            ].map((p) => (
              <div key={p.t} className="border-t border-[var(--border)] pt-8">
                <span className="font-display text-3xl text-[var(--cocoa)]">{p.n}</span>
                <h3 className="mt-2 font-display text-2xl text-foreground">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <p className="font-display text-3xl italic leading-snug text-foreground md:text-4xl">
            "The finest watches do not announce themselves. They wait, on the wrist, for the moment
            they are noticed."
          </p>
          <p className="mt-6 text-[10px] uppercase tracking-[0.32em] text-[var(--cocoa)]">— The Editorial Desk</p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-espresso px-7 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-bone hover:bg-cocoa"
          >
            Speak with the desk
          </Link>
        </div>
      </section>
    </>
  );
}
