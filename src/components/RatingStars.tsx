import { Star } from "lucide-react";

interface Props {
  rating: number; // 0..5 (can be fractional)
  size?: number;
  className?: string;
}

export function RatingStars({ rating, size = 14, className = "" }: Props) {
  const rounded = Math.round(rating * 2) / 2;
  return (
    <div className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`Rating ${rating} of 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i + 1 <= rounded;
        const half = !filled && i + 0.5 === rounded;
        return (
          <Star
            key={i}
            width={size}
            height={size}
            strokeWidth={1.5}
            className={
              filled
                ? "fill-[var(--gold)] text-[var(--gold)]"
                : half
                ? "fill-[var(--gold-soft)] text-[var(--gold)]"
                : "text-[var(--gold-soft)] opacity-50"
            }
          />
        );
      })}
    </div>
  );
}
