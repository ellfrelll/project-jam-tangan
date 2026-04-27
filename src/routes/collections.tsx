import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { watches, type Collection } from "@/data/watches";
import { WatchCard } from "@/components/WatchCard";
import { SectionHeading } from "@/components/SectionHeading";

const tabs: ("All" | Collection)[] = ["All", "Classic", "Sport", "Modern"];

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Tempus Aurum" },
      { name: "description", content: "Browse the atlas by temperament: Classic dress watches, Sport instruments, Modern icons." },
      { property: "og:title", content: "Collections — Tempus Aurum" },
      { property: "og:description", content: "Three temperaments, one obsession." },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");
  const filtered = active === "All" ? watches : watches.filter((w) => w.collection === active);

  return (
    <>
      <section className="bg-cream pb-16 pt-44">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Collections"
            title={<>The atlas, sorted by <em className="text-gradient-gold not-italic">temperament</em>.</>}
            description="Choose how a watch should feel on the wrist — heirloom, instrument, or architecture — and let the references introduce themselves."
          />

          <div className="mt-12 flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] transition-all ${
                  active === t
                    ? "border-espresso bg-espresso text-bone"
                    : "border-[var(--border)] bg-transparent text-foreground hover:border-[var(--cocoa)]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((w, i) => (
              <WatchCard key={w.id} watch={w} index={i} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="py-20 text-center text-muted-foreground">Nothing in this collection yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
