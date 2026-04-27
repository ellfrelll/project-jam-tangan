import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5">
      <span
        className={`grid h-9 w-9 place-items-center rounded-full border ${
          light ? "border-[var(--gold-soft)]/60" : "border-[var(--cocoa)]/40"
        } transition-transform duration-500 group-hover:rotate-[60deg]`}
      >
        <span className="text-gradient-gold font-display text-lg leading-none">T</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg ${light ? "text-bone" : "text-espresso"}`}>
          Tempus<span className="text-gradient-gold">·</span>Aurum
        </span>
        <span
          className={`mt-0.5 text-[9px] uppercase tracking-[0.32em] ${
            light ? "text-bone/60" : "text-muted-foreground"
          }`}
        >
          Timeless Luxury
        </span>
      </span>
    </Link>
  );
}
