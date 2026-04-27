## Ringkasan Perbaikan

Website akan disempurnakan agar **sepenuhnya berbahasa Indonesia**, **semua tombol berfungsi**, dan **section brand jauh lebih hidup** — sesuai gambar referensi (card brand interaktif dengan logo, deskripsi, tombol "Lihat Koleksi →", efek hover zoom + highlight + shadow).

---

## 1. Lokalisasi Penuh (Bahasa Indonesia)

Seluruh teks di-translate ke bahasa Indonesia formal & elegan di file:

- `src/components/Navbar.tsx` — Beranda, Brand, Koleksi, Tentang, Kontak
- `src/components/Footer.tsx` — Jelajahi, Maison, Newsletter, dll.
- `src/routes/index.tsx` — semua heading, eyebrow, deskripsi, tombol (Hero, "Brand Unggulan", "Pilihan Editor", "Koleksi", "Jam Tangan Rating Tertinggi")
- `src/routes/brands.tsx` — judul, blurb, label
- `src/routes/collections.tsx` — tab (Semua, Klasik, Sport, Modern), heading
- `src/routes/about.tsx` — filosofi, tiga prinsip
- `src/routes/contact.tsx` — form, alamat, tombol kirim
- `src/routes/watch.$id.tsx` — "Kembali ke Atlas", "Lihat Wishlist", "Bagikan", "Spesifikasi Teknis", "Anda mungkin juga menyukai"
- `src/data/watches.ts` — `tagline`, `description`, `blurb` brand, dan label (Pilihan Terbaik, Populer, Direkomendasikan, Pilihan Editor) ditranslate ke Indonesia

Label type juga diubah agar `Watch.label` menerima nilai Indonesia.

---

## 2. Section Brand — Redesign Interaktif (Sesuai Gambar)

### Di Homepage (`src/routes/index.tsx`)
Grid brand diganti total menjadi **5 card vertikal premium** dengan struktur:

```
┌────────────────────────┐
│ [LOGO BRAND]           │  ← inisial/wordmark dalam font display gold
│                        │
│ Rolex                  │  ← nama brand (font display besar)
│ Geneva, Swiss · 1905   │  ← lokasi + tahun
│ ─────                  │  ← divider hairline emas
│ Ikon tak terbantahkan  │  ← deskripsi 1–2 kalimat (Indonesia)
│ dunia horologi...      │
│                        │
│ Lihat Koleksi →        │  ← CTA dengan arrow animasi
└────────────────────────┘
```

Interaksi:
- Card adalah `<Link>` → `/collections` dengan filter brand (lihat poin 3)
- Hover: `scale-[1.02]`, background bertransisi ke `bg-cream`, shadow naik dari `shadow-card` ke `shadow-luxe`, border emas tipis muncul
- Animasi masuk: fade-in bertahap (`animate-fade-in` + `style={{ animationDelay }}`)

### Di Halaman Brand (`src/routes/brands.tsx`)
Setiap row brand juga mendapat tombol **"Lihat Semua Koleksi {Brand} →"** yang mengarah ke `/collections?brand={slug}`.

---

## 3. Filter Brand di Collections

`src/routes/collections.tsx` ditingkatkan:
- Membaca `search` param `brand` via TanStack Router (`Route.useSearch()`)
- Menambahkan baris filter brand kedua (chip: Semua, Rolex, Omega, Patek Philippe, AP, TAG Heuer)
- Filter dikombinasikan dengan filter koleksi (Klasik/Sport/Modern)
- Filter brand reaktif terhadap URL → klik card brand di home langsung memfilter

Schema search divalidasi dengan `validateSearch`.

---

## 4. Semua Tombol Berfungsi

Audit & perbaikan:
- **Navbar Wishlist & Account** (saat ini tidak melakukan apa-apa) → tombol Wishlist mengarah ke `/collections`, Account dihapus atau diarahkan ke `/contact` (karena bukan e-commerce). Default: hapus tombol Account agar tidak ada tombol mati.
- **Footer "Press"** → diganti link ke `/about`
- **Footer social icons** → tetap `href="#"` tapi diberi `aria-label` jelas (placeholder konsisten untuk demo)
- **Footer newsletter** → tombol "Gabung" memunculkan toast/state "Terima kasih telah berlangganan"
- **Watch detail "Save to wishlist" & "Share"** → diberi handler:
  - Wishlist: `useState` toggle + tampilkan teks "Tersimpan ✓"
  - Share: `navigator.share()` dengan fallback `navigator.clipboard.writeText(window.location.href)` + alert "Link disalin"
- **Hero "Jelajahi Atlas"** → tetap `<a href="#showcase">` (scroll smooth)
- **Hero "Filosofi Kami"** → `<Link to="/about">` (sudah benar)
- **Semua WatchCard, brand card, collection card** → `<Link>` valid

---

## 5. Detail Produk

`src/routes/watch.$id.tsx` sudah menampilkan gambar, nama, brand, rating, deskripsi. Yang dilakukan:
- Translate semua label & deskripsi spec ke Indonesia
- `getWatch` & `notFoundComponent` pesannya diubah ("Referensi tidak ditemukan", "Kembali ke Atlas")
- Tombol Wishlist & Share dibuat fungsional (lihat poin 4)

---

## 6. Polish UI

- **Animasi fade-in**: tambah utility `animate-fade-in` pada hero text, brand cards, watch cards, collection cards (delay bertahap)
- **Divider elegan**: gunakan kelas `.hairline` yang sudah ada di lebih banyak tempat (antara section, di dalam brand card)
- **Spacing**: section brand di home dinaikkan padding `py-32`, gap antar card `gap-6`
- **Shadow elegan**: `shadow-card` default → `shadow-luxe` on hover untuk semua card

---

## File yang Diubah

```
src/data/watches.ts              — translate konten + label type
src/components/Navbar.tsx        — translate + hapus tombol mati
src/components/Footer.tsx        — translate + newsletter handler
src/components/WatchCard.tsx     — translate "View Details" → "Lihat Detail"
src/routes/__root.tsx            — translate 404 root jika ada
src/routes/index.tsx             — translate + REDESIGN brand grid + animasi
src/routes/brands.tsx            — translate + tombol "Lihat Koleksi {Brand}"
src/routes/collections.tsx       — translate + filter brand via search param
src/routes/about.tsx             — translate
src/routes/contact.tsx           — translate
src/routes/watch.$id.tsx         — translate + handler wishlist/share
```

Tidak ada perubahan dependency, tidak ada perubahan struktur routing.

---

## Hasil Akhir

- Setiap brand card terasa hidup: hover zoom + highlight + shadow + ada CTA "Lihat Koleksi →"
- Klik brand → halaman Koleksi langsung terfilter pada brand tersebut
- Semua tombol di seluruh website punya aksi nyata (navigasi, scroll, toast, share)
- 100% bahasa Indonesia formal & elegan
- Animasi fade-in halus di setiap section, divider emas tipis sebagai aksen
