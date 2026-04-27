import { createFileRoute, Link } from "@tanstack/react-router";
import { brands, watches } from "@/data/watches";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/use-reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Brands — Tempus Aurum" },
      { name: "description", content: "The five maisons we return to: Rolex, Omega, Patek Philippe, Audemars Piguet, TAG Heuer." },
      { property: "og:title", content: "Maisons we return to — Tempus Aurum" },
      { property: "og:description", content: "Five houses that shaped the language of fine watchmaking." },
    ],
  }),
  component: BrandsPage,
});

function BrandsPage() {
  return (
    <>
      <section className="bg-gradient-hero pb-24 pt-44">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--gold-soft)]">
            The Maisons
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] text-bone md:text-7xl">
            Five houses,<br />
            <em className="text-gradient-gold not-italic">one quiet standard.</em>
          </h1>
          <p className="mt-6 max-w-xl text-base text-bone/70 md:text-lg">
            We don't catalogue every maison. We curate the ones whose voice we recognise on the wrist —
            in the click of a crown, the hush of a hand sweeping past twelve.
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl space-y-24 px-4 md:px-8">
          {brands.map((b, i) => {
            const sample = watches.find((w) => w.brand === b.name)!;
            return <BrandRow key={b.slug} brand={b} sample={sample} reverse={i % 2 === 1} index={i + 1} />;
          })}
        </div>
      </section>
    </>
  );
}

function BrandRow({
  brand,
  sample,
  reverse,
  index,
}: {
  brand: (typeof brands)[number];
  sample: (typeof watches)[number];
  reverse: boolean;
  index: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal grid items-center gap-12 lg:grid-cols-2 ${reverse ? "lg:[direction:rtl]" : ""}`}
    >
      <div className="lg:[direction:ltr]">
        <Link to="/watch/$id" params={{ id: sample.id }} className="group block overflow-hidden rounded-3xl shadow-card">
          <img
            src={sample.image}
            alt={`${brand.name} signature reference`}
            loading="lazy"
            width={1024}
            height={1024}
            className="aspect-[5/4] w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
          />
        </Link>
      </div>
      <div className="lg:[direction:ltr]">
        <span className="font-display text-7xl text-[var(--gold-soft)]/40">N°0{index}</span>
        <h2 className="mt-2 font-display text-5xl leading-[1.05] text-foreground md:text-6xl">{brand.name}</h2>
        <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-[var(--cocoa)]">{brand.accent}</p>
        <div className="hairline mt-6 max-w-[6rem]" />
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">{brand.blurb}</p>
        <Link
          to="/watch/$id"
          params={{ id: sample.id }}
          className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-foreground hover:text-[var(--cognac)]"
        >
          Signature reference <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
