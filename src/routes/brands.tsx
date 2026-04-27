import { createFileRoute, Link } from "@tanstack/react-router";
import { brands, watches } from "@/data/watches";
import { useReveal } from "@/hooks/use-reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Brand — Tempus Aurum" },
      { name: "description", content: "Lima atelier yang kami pilih: Rolex, Omega, Patek Philippe, Audemars Piguet, TAG Heuer." },
      { property: "og:title", content: "Brand Pilihan — Tempus Aurum" },
      { property: "og:description", content: "Lima atelier yang membentuk bahasa horologi modern." },
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
            Atelier Pilihan
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] text-bone md:text-7xl">
            Lima atelier,<br />
            <em className="text-gradient-gold not-italic">satu standar yang tenang.</em>
          </h1>
          <p className="mt-6 max-w-xl text-base text-bone/70 md:text-lg">
            Kami tidak mendokumentasikan setiap atelier. Kami mengkurasi yang suaranya kami kenali
            di pergelangan — dalam klik mahkota, dalam desir jarum melintasi angka dua belas.
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl space-y-24 px-4 md:px-8">
          {brands.map((b, i) => {
            const sample = watches.find((w) => w.brand === b.name);
            if (!sample) return null;
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
        <Link to="/watch/$id" params={{ id: sample.id }} className="group block overflow-hidden rounded-3xl shadow-card transition-shadow hover:shadow-luxe">
          <img
            src={sample.image}
            alt={`Referensi unggulan ${brand.name}`}
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
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/collections"
            search={{ brand: brand.slug, collection: "Semua" }}
            className="inline-flex items-center gap-2 rounded-full bg-espresso px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-bone transition-colors hover:bg-cocoa"
          >
            Lihat Koleksi {brand.name} <ArrowRight size={14} />
          </Link>
          <Link
            to="/watch/$id"
            params={{ id: sample.id }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-foreground hover:text-[var(--cognac)]"
          >
            Referensi unggulan <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
