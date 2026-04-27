import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Heart, Trash2 } from "lucide-react";
import { watches } from "@/data/watches";
import { WatchCard } from "@/components/WatchCard";
import { SectionHeading } from "@/components/SectionHeading";
import { useWishlist } from "@/hooks/use-wishlist";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Wishlist — Tempus Aurum" },
      { name: "description", content: "Kurasi pribadi referensi yang Anda simpan untuk dipertimbangkan kembali." },
      { property: "og:title", content: "Wishlist — Tempus Aurum" },
      { property: "og:description", content: "Jam tangan favorit yang Anda simpan." },
    ],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  const { ids, clear, count } = useWishlist();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const items = watches.filter((w) => ids.includes(w.id));

  return (
    <>
      <section className="bg-cream pb-16 pt-44">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Wishlist"
            title={
              <>
                Kurasi <em className="text-gradient-gold not-italic">pribadi</em> Anda.
              </>
            }
            description="Setiap referensi yang Anda simpan tersusun di sini — siap untuk dilihat kembali kapan saja, tanpa tergesa."
          />

          {mounted && count > 0 && (
            <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--cocoa)]">
                Tersimpan{" "}
                <span className="font-display text-base normal-case tracking-normal text-foreground">
                  {count}
                </span>{" "}
                referensi
              </p>
              <button
                type="button"
                onClick={() => {
                  if (confirm("Kosongkan seluruh wishlist?")) clear();
                }}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--cocoa)]/40 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-foreground transition-all hover:border-[var(--cognac)] hover:bg-bone/60"
              >
                <Trash2 size={12} /> Kosongkan
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {!mounted || count === 0 ? (
            <div className="mx-auto max-w-md py-20 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-[var(--cocoa)]/30 bg-cream">
                <Heart size={24} className="text-[var(--cognac)]" />
              </div>
              <h2 className="mt-6 font-display text-3xl text-foreground">
                Wishlist Anda masih kosong
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Telusuri atlas dan tekan ikon hati pada referensi yang menarik perhatian — kami akan menyimpannya di sini.
              </p>
              <Link
                to="/collections"
                search={{ brand: "Semua", collection: "Semua" }}
                className="mt-8 inline-flex rounded-full bg-espresso px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-bone transition-colors hover:bg-cocoa"
              >
                Telusuri Koleksi
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((w, i) => (
                <WatchCard key={w.id} watch={w} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
