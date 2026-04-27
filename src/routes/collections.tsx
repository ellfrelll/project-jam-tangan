import { createFileRoute, Link } from "@tanstack/react-router";
import { brands, watches, type Collection } from "@/data/watches";
import { WatchCard } from "@/components/WatchCard";
import { SectionHeading } from "@/components/SectionHeading";

type CollectionFilter = "Semua" | Collection;
type BrandFilter = "Semua" | string;

const collectionTabs: CollectionFilter[] = ["Semua", "Klasik", "Sport", "Modern"];

export const Route = createFileRoute("/collections")({
  validateSearch: (
    search: Record<string, unknown>,
  ): { brand?: BrandFilter; collection?: CollectionFilter; q?: string } => {
    const brand = typeof search.brand === "string" ? search.brand : undefined;
    const collection = collectionTabs.includes(search.collection as CollectionFilter)
      ? (search.collection as CollectionFilter)
      : undefined;
    const q = typeof search.q === "string" && search.q ? search.q : undefined;
    return { brand, collection, q };
  },
  head: () => ({
    meta: [
      { title: "Koleksi — Tempus Aurum" },
      { name: "description", content: "Telusuri atlas berdasarkan karakter: Klasik, Sport, atau Modern." },
      { property: "og:title", content: "Koleksi — Tempus Aurum" },
      { property: "og:description", content: "Tiga karakter, satu obsesi." },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  const search = Route.useSearch();
  const brand: BrandFilter = search.brand ?? "Semua";
  const collection: CollectionFilter = search.collection ?? "Semua";
  const q = search.q;
  const navigate = Route.useNavigate();

  const brandName = brand === "Semua" ? null : brands.find((b) => b.slug === brand)?.name ?? null;

  let filtered = watches;
  if (collection !== "Semua") filtered = filtered.filter((w) => w.collection === collection);
  if (brandName) filtered = filtered.filter((w) => w.brand === brandName);
  if (q) {
    const ql = q.toLowerCase();
    filtered = filtered.filter(
      (w) =>
        w.name.toLowerCase().includes(ql) ||
        w.brand.toLowerCase().includes(ql) ||
        w.collection.toLowerCase().includes(ql),
    );
  }

  const setBrand = (b: BrandFilter) => navigate({ search: (prev) => ({ ...prev, brand: b }) });
  const setCollection = (c: CollectionFilter) =>
    navigate({ search: (prev) => ({ ...prev, collection: c }) });

  return (
    <>
      <section className="bg-cream pb-16 pt-44">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Koleksi"
            title={<>Atlas, disusun berdasarkan <em className="text-gradient-gold not-italic">karakter</em>.</>}
            description="Pilih bagaimana sebuah jam tangan harus terasa di pergelangan — warisan, instrumen, atau arsitektur — dan biarkan referensinya memperkenalkan diri."
          />

          <div className="mt-10 space-y-5">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--cocoa)]">
                Karakter
              </p>
              <div className="flex flex-wrap gap-2">
                {collectionTabs.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setCollection(t)}
                    className={`rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] transition-all ${
                      collection === t
                        ? "border-espresso bg-espresso text-bone"
                        : "border-[var(--border)] bg-transparent text-foreground hover:border-[var(--cocoa)]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--cocoa)]">
                Brand
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setBrand("Semua")}
                  className={`rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] transition-all ${
                    brand === "Semua"
                      ? "border-[var(--cognac)] bg-[var(--cognac)] text-bone"
                      : "border-[var(--border)] bg-transparent text-foreground hover:border-[var(--cocoa)]"
                  }`}
                >
                  Semua
                </button>
                {brands.map((b) => (
                  <button
                    key={b.slug}
                    type="button"
                    onClick={() => setBrand(b.slug)}
                    className={`rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] transition-all ${
                      brand === b.slug
                        ? "border-[var(--cognac)] bg-[var(--cognac)] text-bone"
                        : "border-[var(--border)] bg-transparent text-foreground hover:border-[var(--cocoa)]"
                    }`}
                  >
                    {b.name}
                  </button>
                ))}
              </div>
            </div>

            {q && (
              <div className="text-xs text-muted-foreground">
                Hasil pencarian untuk: <span className="text-foreground">"{q}"</span> ·{" "}
                <Link
                  to="/collections"
                  search={(prev) => ({ ...prev, q: undefined })}
                  className="underline hover:text-foreground"
                >
                  bersihkan
                </Link>
              </div>
            )}
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
            <div className="py-20 text-center">
              <p className="text-muted-foreground">Belum ada referensi untuk filter ini.</p>
              <button
                type="button"
                onClick={() => navigate({ search: { brand: "Semua", collection: "Semua" } })}
                className="mt-6 inline-flex rounded-full border border-[var(--cocoa)]/40 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] hover:border-[var(--cognac)]"
              >
                Atur ulang filter
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
