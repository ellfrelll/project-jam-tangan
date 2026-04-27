import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import heroWatch from "@/assets/hero-watch.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Tentang — Tempus Aurum" },
      { name: "description", content: "Sebuah atelier rekomendasi. Tempus Aurum adalah atlas tenang berisi jam tangan yang dikurasi oleh kolektor, bukan algoritma." },
      { property: "og:title", content: "Filosofi Kami — Tempus Aurum" },
      { property: "og:description", content: "Atelier rekomendasi yang dibangun atas keheningan, bukan kebisingan." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero pb-32 pt-44">
        <img src={heroWatch} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 to-espresso/95" />
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--gold-soft)]">Filosofi kami</span>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-bone md:text-7xl">
            Kami merekomendasikan <em className="text-gradient-gold not-italic">sedikit</em> jam tangan<br />
            yang bertahan melampaui dekadenya.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-bone/80 md:text-lg">
            Tempus Aurum bukanlah sebuah toko. Ia adalah atlas yang lambat dan sengaja — ditulis untuk
            kolektor yang lebih memilih memiliki satu jam tangan yang ia pahami daripada sepuluh yang sekadar dimilikinya.
          </p>
        </div>
      </section>

      <section className="bg-background py-28">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Atelier"
            title={<>Kurasi, bukan komersial.</>}
            description="Setiap referensi diulas oleh kolektor yang menyentuh jamnya — memutarnya, mengenakannya, mendengarkannya. Kami tidak menyimpan stok dan tidak menerima sponsor dari atelier mana pun."
          />

          <div className="mt-20 grid gap-12 md:grid-cols-3">
            {[
              { n: "I.", t: "Ketenangan", b: "Kami mencantumkan lebih sedikit jam, bukan lebih banyak. Atlas yang ringkas menjaga setiap entri tetap jujur." },
              { n: "II.", t: "Provenance", b: "Kami memilih referensi dengan garis keturunan — desain yang telah memperoleh hak untuk tetap tak berubah." },
              { n: "III.", t: "Patina", b: "Kami menilai berdasarkan karakter, finishing, dan cara sebuah jam menua. Tren hanyalah kebisingan." },
            ].map((p) => (
              <div key={p.t} className="border-t border-[var(--border)] pt-8">
                <span className="font-display text-3xl text-[var(--cocoa)]">{p.n}</span>
                <h3 className="mt-2 font-display text-2xl text-foreground">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <p className="font-display text-3xl italic leading-snug text-foreground md:text-4xl">
            "Jam tangan terbaik tidak mengumumkan dirinya. Ia menanti, di pergelangan, hingga saat ia diperhatikan."
          </p>
          <p className="mt-6 text-[10px] uppercase tracking-[0.32em] text-[var(--cocoa)]">— Meja Editorial</p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-espresso px-7 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-bone hover:bg-cocoa"
          >
            Hubungi Meja Kami
          </Link>
        </div>
      </section>
    </>
  );
}
