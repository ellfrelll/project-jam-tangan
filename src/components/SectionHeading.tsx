import { useReveal } from "@/hooks/use-reveal";
import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "left", className = "" }: Props) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-[var(--gold)]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--cocoa)]">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-[var(--gold)]" />
        </div>
      )}
      <h2 className="mt-5 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
