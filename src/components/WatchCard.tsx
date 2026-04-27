import { Link } from "@tanstack/react-router";
import type { Watch } from "@/data/watches";
import { RatingStars } from "./RatingStars";

const labelTone: Record<string, string> = {
  "Best Pick": "bg-[var(--gold)]/95 text-espresso",
  "Popular": "bg-espresso text-bone",
  "Recommended": "bg-cream text-espresso border border-[var(--cocoa)]/30",
  "Editor's Choice": "bg-cocoa text-bone",
};

export function WatchCard({ watch, index = 0 }: { watch: Watch; index?: number }) {
  return (
    <Link
      to="/watch/$id"
      params={{ id: watch.id }}
      className="group relative block overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        <img
          src={watch.image}
          alt={`${watch.brand} ${watch.name}`}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        {/* gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] shadow-soft ${labelTone[watch.label]}`}
        >
          {watch.label}
        </span>

        <div className="absolute inset-x-0 bottom-0 translate-y-4 px-5 pb-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-full bg-bone/90 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-espresso">
            View Details →
          </span>
        </div>
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          <span>{watch.brand}</span>
          <span>{watch.collection}</span>
        </div>
        <h3 className="font-display text-xl leading-tight text-foreground">{watch.name}</h3>
        <p className="line-clamp-1 text-sm text-muted-foreground">{watch.tagline}</p>

        <div className="flex items-center justify-between border-t border-[var(--border)] pt-3">
          <RatingStars rating={watch.rating} />
          <span className="font-display text-base text-foreground">
            {watch.score.toFixed(1)}
            <span className="text-xs text-muted-foreground">/5</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
