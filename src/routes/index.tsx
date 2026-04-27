import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import heroWatch from "@/assets/hero-watch.jpg";
import { brands, watches } from "@/data/watches";
import { WatchCard } from "@/components/WatchCard";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/use-reveal";
import { RatingStars } from "@/components/RatingStars";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tempus Aurum — Timeless Luxury Watch Recommendations" },
      {
        name: "description",
        content:
          "Discover the world's most enduring timepieces. A curated atlas of Rolex, Patek Philippe, Audemars Piguet, Omega and TAG Heuer — scored by collectors.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const editorRef = useReveal<HTMLDivElement>();
  const topRated = [...watches].sort((a, b) => b.score - a.score).slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative isolate min-h-screen overflow-hidden bg-gradient-hero">
        {/* texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 20%, rgba(255,200,140,0.25), transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(0,0,0,0.4), transparent 50%)",
          }}
        />
        <img
          src={heroWatch}
          alt="Luxury gold dress watch on warm silk"
          width={1920}
          height={1080}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/30 to-espresso/90" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-4 pb-24 pt-40 md:px-8 md:pb-32 md:pt-48">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-bone/80">
              <span className="h-px w-10 bg-[var(--gold)]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[var(--gold-soft)]">
                A recommendation atelier
              </span>
            </div>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] text-bone sm:text-7xl md:text-8xl lg:text-[8.5rem]">
              Timeless
              <br />
              <span className="italic text-gradient-gold">Luxury</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-bone/75 sm:text-lg">
              Not a marketplace. A quiet atlas of the watches we believe will outlast trends —
              scored, described, and dressed in their own light.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#showcase"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--gold)] px-7 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-espresso shadow-luxe transition-transform hover:scale-[1.02]"
              >
                Explore the Atlas
                <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
              </a>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-bone/80 hover:text-bone"
              >
                Our Philosophy
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* hero stats */}
          <div className="mt-20 grid grid-cols-2 gap-6 border-t border-bone/15 pt-8 text-bone md:grid-cols-4">
            {[
              { k: "5", l: "Maisons" },
              { k: "180+", l: "Years of horology" },
              { k: "4.9", l: "Avg. score /5" },
              { k: "1", l: "Editor's pick / month" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-[var(--gold-soft)] md:text-4xl">{s.k}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-bone/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BRANDS */}
      <section className="relative bg-background py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Featured Maisons"
            title={<>The houses we <em className="text-gradient-gold not-italic">return to</em>.</>}
            description="Five names that have shaped the language of fine watchmaking — from Genevan dress watches to instruments worn beneath the waves."
          />

          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] md:grid-cols-5">
            {brands.map((b, i) => (
              <Link
                key={b.slug}
                to="/brands"
                className="group relative flex aspect-[4/5] flex-col justify-between bg-card p-6 transition-colors hover:bg-cream"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl leading-tight text-foreground">{b.name}</h3>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[var(--cocoa)]">
                    {b.accent.split(" · ")[1]}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-[var(--cocoa)] opacity-0 transition-opacity group-hover:opacity-100">
                    Discover <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section id="showcase" className="relative scroll-mt-20 bg-background py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="The Atlas"
              title={<>Our <em className="text-gradient-gold not-italic">curated</em> showcase.</>}
              description="A short list, refreshed slowly. Every reference here has earned its place through craft, character, or quiet defiance."
            />
            <Link
              to="/collections"
              className="hidden shrink-0 text-xs font-semibold uppercase tracking-[0.28em] text-foreground hover:text-[var(--cognac)] md:inline-flex"
            >
              View all collections →
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {watches.map((w, i) => (
              <WatchCard key={w.id} watch={w} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* EDITOR'S PICK */}
      <section className="bg-cream py-28">
        <div ref={editorRef} className="reveal mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[var(--gold-soft)]/40 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-luxe">
                <img
                  src={watches[3].image}
                  alt={watches[3].name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-6 top-6 rounded-full bg-espresso px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--gold-soft)]">
                  Editor's Pick
                </div>
              </div>
            </div>
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--cocoa)]">
                Issue n°IV — Calatrava 6119R
              </span>
              <h2 className="mt-5 font-display text-5xl leading-[1.05] text-foreground md:text-6xl">
                The dress watch,
                <br />
                <em className="text-gradient-gold not-italic">distilled.</em>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                Patek Philippe's Calatrava is the closest thing horology has to a haiku — three
                hands, twelve indices, one quiet flourish on a hobnail bezel. We picked it because
                it makes everything else feel loud.
              </p>
              <div className="mt-8 flex items-center gap-6">
                <RatingStars rating={5} size={18} />
                <span className="font-display text-2xl">
                  4.95<span className="text-base text-muted-foreground">/5</span>
                </span>
              </div>
              <Link
                to="/watch/$id"
                params={{ id: watches[3].id }}
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-espresso px-7 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-bone hover:bg-cocoa"
              >
                Read the full review <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="bg-background py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Collections"
            title={<>Three temperaments,<br />one obsession.</>}
            description="We sort the atlas not by price, but by character. Choose the temperament — the watches will follow."
            align="center"
            className="mx-auto"
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {(["Classic", "Sport", "Modern"] as const).map((c, i) => {
              const sample = watches.find((w) => w.collection === c)!;
              return (
                <Link
                  key={c}
                  to="/collections"
                  className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <img
                    src={sample.image}
                    alt={c}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--gold-soft)]">
                      Collection · 0{i + 1}
                    </span>
                    <h3 className="mt-3 font-display text-4xl text-bone">{c}</h3>
                    <p className="mt-2 text-sm text-bone/70">
                      {c === "Classic"
                        ? "Heirloom dress watches and quiet complications."
                        : c === "Sport"
                        ? "Instruments forged for sea, sky and circuit."
                        : "Architectural icons that broke the mould."}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* TOP RATED */}
      <section className="bg-cream py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Top Rated"
            title={<>Highest scores in the atlas.</>}
            description="Three references currently leading our editorial scoreboard."
          />
          <ol className="mt-16 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {topRated.map((w, i) => (
              <li key={w.id}>
                <Link
                  to="/watch/$id"
                  params={{ id: w.id }}
                  className="group grid grid-cols-12 items-center gap-4 py-6 transition-colors hover:bg-bone/40"
                >
                  <span className="col-span-1 font-display text-3xl text-[var(--cocoa)]">
                    0{i + 1}
                  </span>
                  <div className="col-span-2">
                    <div className="aspect-square overflow-hidden rounded-xl bg-bone">
                      <img src={w.image} alt={w.name} loading="lazy" width={200} height={200} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-7">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{w.brand}</div>
                    <div className="font-display text-2xl text-foreground">{w.name}</div>
                    <p className="mt-1 hidden text-sm text-muted-foreground md:block">{w.tagline}</p>
                  </div>
                  <div className="col-span-3 md:col-span-2 text-right">
                    <RatingStars rating={w.rating} className="justify-end" />
                    <div className="mt-1 font-display text-2xl">
                      {w.score.toFixed(2)}<span className="text-sm text-muted-foreground">/5</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
