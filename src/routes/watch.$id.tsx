import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Heart, Share2 } from "lucide-react";
import { getWatch, watches } from "@/data/watches";
import { RatingStars } from "@/components/RatingStars";
import { WatchCard } from "@/components/WatchCard";

export const Route = createFileRoute("/watch/$id")({
  loader: ({ params }) => {
    const watch = getWatch(params.id);
    if (!watch) throw notFound();
    return { watch };
  },
  head: ({ loaderData }) => {
    const w = loaderData?.watch;
    if (!w) return { meta: [{ title: "Watch — Tempus Aurum" }] };
    return {
      meta: [
        { title: `${w.brand} ${w.name} — Tempus Aurum` },
        { name: "description", content: w.tagline + " " + w.description.slice(0, 140) },
        { property: "og:title", content: `${w.brand} ${w.name}` },
        { property: "og:description", content: w.tagline },
        { property: "og:image", content: w.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: w.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center px-4 pt-24">
      <div className="text-center">
        <h1 className="font-display text-5xl">Reference unknown</h1>
        <p className="mt-3 text-muted-foreground">This piece is not in our atlas.</p>
        <Link to="/collections" className="mt-8 inline-flex rounded-full bg-espresso px-6 py-3 text-xs uppercase tracking-[0.24em] text-bone hover:bg-cocoa">
          Back to atlas
        </Link>
      </div>
    </div>
  ),
  component: WatchDetail,
});

function WatchDetail() {
  const { watch } = Route.useLoaderData();
  const related = watches.filter((w) => w.id !== watch.id && w.brand === watch.brand).slice(0, 3);
  const others = watches.filter((w) => w.id !== watch.id).slice(0, 3);
  const recommendations = related.length >= 2 ? related : others;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={14} /> Back to atlas
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-[var(--gold-soft)]/30 to-transparent blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-luxe">
                <img
                  src={watch.image}
                  alt={`${watch.brand} ${watch.name}`}
                  width={1024}
                  height={1024}
                  className="aspect-square w-full object-cover"
                />
                <span className="absolute left-6 top-6 rounded-full bg-espresso px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--gold-soft)]">
                  {watch.label}
                </span>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--cocoa)]">
                {watch.brand} · {watch.collection}
              </span>
              <h1 className="mt-4 font-display text-5xl leading-[1.02] text-foreground md:text-6xl">
                {watch.name}
              </h1>
              <p className="mt-4 font-display text-xl italic text-[var(--cognac)]">{watch.tagline}</p>

              <div className="mt-8 flex items-center gap-6 border-y border-[var(--border)] py-5">
                <RatingStars rating={watch.rating} size={20} />
                <div className="font-display text-3xl">
                  {watch.score.toFixed(2)}<span className="text-base text-muted-foreground">/5</span>
                </div>
                <span className="ml-auto text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  Editorial score
                </span>
              </div>

              <p className="mt-8 text-base leading-relaxed text-foreground/85 md:text-lg">
                {watch.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-full border border-[var(--cocoa)]/40 bg-transparent px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-foreground transition-colors hover:border-[var(--cognac)] hover:text-[var(--cognac)]">
                  <Heart size={14} /> Save to wishlist
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-[var(--cocoa)]/40 bg-transparent px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-foreground transition-colors hover:border-[var(--cognac)] hover:text-[var(--cognac)]">
                  <Share2 size={14} /> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--cocoa)]">
            The Reference
          </span>
          <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">Technical sheet</h2>

          <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
            {watch.specs.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between bg-card px-6 py-6">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="font-display text-lg text-foreground">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--cocoa)]">
                Continue browsing
              </span>
              <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">
                You might also appreciate
              </h2>
            </div>
            <Link
              to="/collections"
              className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-foreground hover:text-[var(--cognac)] md:inline-flex"
            >
              View atlas <ArrowRight size={14} />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((w, i) => (
              <WatchCard key={w.id} watch={w} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
