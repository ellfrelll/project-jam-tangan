## Tujuan

1. **Tambah banyak jam** per brand, sesuai karakter brand asli — minimal 3 referensi per brand (5 brand × ~3-4 = ~18 jam total).
2. **Distribusi merata** ke 3 kategori (Klasik / Sport / Modern) supaya filter terasa hidup.
3. **Polish filter Collections** yang sudah ada agar lebih jelas, plus tampilkan **counter** ("12 referensi ditemukan") dan tombol Reset.
4. **Tidak menampilkan harga** — tetap pakai rating + skor seperti sekarang.

---

## Daftar jam yang akan ditambahkan

Reuse 7 gambar yang sudah ada di `src/assets` (rolex, rolex-sub, omega, patek, patek-moon, ap, tag) — dipasangkan ke jam dengan karakter visual mirip. Tidak generate gambar baru supaya cepat dan tidak boros kredit.

**Rolex** (4 referensi)
- Day-Date 40 Yellow Gold — Klasik (sudah ada)
- Submariner Date — Sport (sudah ada)
- GMT-Master II "Pepsi" — Sport (baru, gambar: rolex-sub)
- Datejust 36 Jubilee — Klasik (baru, gambar: rolex)

**Omega** (3 referensi)
- Seamaster Diver 300M — Sport (sudah ada)
- Speedmaster Moonwatch Professional — Modern (baru, gambar: omega)
- Constellation Globemaster — Klasik (baru, gambar: omega)

**Patek Philippe** (4 referensi)
- Calatrava Ref. 6119R — Klasik (sudah ada)
- Complications Moonphase — Klasik (sudah ada)
- Nautilus 5711 — Modern (baru, gambar: patek)
- Aquanaut 5167 — Sport (baru, gambar: patek-moon)

**Audemars Piguet** (3 referensi)
- Royal Oak Selfwinding 41 — Modern (sudah ada)
- Royal Oak Offshore Diver — Sport (baru, gambar: ap)
- Code 11.59 Automatic — Modern (baru, gambar: ap)

**TAG Heuer** (4 referensi)
- Carrera Chronograph — Modern (sudah ada)
- Monaco Calibre 11 — Klasik (baru, gambar: tag)
- Aquaracer Professional 300 — Sport (baru, gambar: tag)
- Formula 1 Quartz — Sport (baru, gambar: tag)

**Total: 18 referensi** dengan distribusi:
- Klasik: 6 (Day-Date, Datejust, Globemaster, Calatrava, Moonphase, Monaco)
- Sport: 7 (Submariner, GMT, Seamaster, Aquanaut, RO Offshore, Aquaracer, F1)
- Modern: 5 (Speedmaster, Nautilus, Royal Oak, Code 11.59, Carrera)

Setiap jam baru dapat: deskripsi 2-3 kalimat bahasa Indonesia formal, 4 spec (casing/movement/cadangan daya/dial), tagline pendek, rating, label.

---

## Polish halaman Collections

File: `src/routes/collections.tsx`

- **Tab "Karakter"** (Semua/Klasik/Sport/Modern) dibuat lebih menonjol — naikkan ke baris atas yang lebih besar, tambah ikon kecil opsional, pastikan state aktif terlihat jelas.
- **Counter hasil**: "Menampilkan **N** referensi" di atas grid — update otomatis saat filter berubah.
- **Tombol Reset filter** muncul saat ada filter aktif (bukan hanya saat hasil kosong).
- **Animasi fade-in** sudah ada di WatchCard via `animate-fade-in` — pastikan re-trigger saat filter berubah dengan `key` prop di grid container.
- Tidak ada harga (sudah ✅).

---

## File yang diubah (untuk copy-paste)

1. **`src/data/watches.ts`** — tambah ~13 entry baru ke array `watches`.
2. **`src/routes/collections.tsx`** — tambah counter, perbaiki tombol reset, animasi re-trigger.

Tidak ada file baru, tidak ada package baru, tidak ada perubahan ke brand cards / halaman lain.

---

## Catatan

Beberapa jam baru akan reuse gambar yang sama (misal 2 Rolex pakai gambar yang sama). Kalau nanti mau gambar unik per referensi, tinggal bilang — bisa di-generate satu per satu pakai AI image (perlu Lovable Cloud + AI gateway aktif).