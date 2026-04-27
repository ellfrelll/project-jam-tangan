import rolex from "@/assets/watch-rolex.jpg";
import rolexSub from "@/assets/watch-rolex-sub.jpg";
import omega from "@/assets/watch-omega.jpg";
import patek from "@/assets/watch-patek.jpg";
import patekMoon from "@/assets/watch-patek-moon.jpg";
import ap from "@/assets/watch-ap.jpg";
import tag from "@/assets/watch-tag.jpg";

export type Collection = "Klasik" | "Sport" | "Modern";
export type Label = "Pilihan Terbaik" | "Populer" | "Direkomendasikan" | "Pilihan Editor";

export interface Watch {
  id: string;
  name: string;
  brand: string;
  image: string;
  rating: number; // 0-5
  score: number;  // /5
  label: Label;
  collection: Collection;
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
}

export const brands = [
  {
    slug: "rolex",
    name: "Rolex",
    blurb: "Ikon tak terbantahkan dunia horologi. Warisan agung dalam setiap mata rantainya.",
    accent: "Geneva, Swiss · est. 1905",
    monogram: "R",
  },
  {
    slug: "omega",
    name: "Omega",
    blurb: "Dipakai di Bulan, disempurnakan di darat. Pelopor jam tangan sport modern.",
    accent: "Bienne, Swiss · est. 1848",
    monogram: "Ω",
  },
  {
    slug: "patek-philippe",
    name: "Patek Philippe",
    blurb: "Anda tidak benar-benar memilikinya — Anda hanya merawatnya untuk generasi berikutnya.",
    accent: "Geneva, Swiss · est. 1839",
    monogram: "P",
  },
  {
    slug: "audemars-piguet",
    name: "Audemars Piguet",
    blurb: "Siluet oktagonal yang menulis ulang aturan jam tangan sport mewah.",
    accent: "Le Brassus, Swiss · est. 1875",
    monogram: "AP",
  },
  {
    slug: "tag-heuer",
    name: "TAG Heuer",
    blurb: "Lahir di sirkuit balap, dirancang untuk jiwa avant-garde.",
    accent: "La Chaux-de-Fonds, Swiss · est. 1860",
    monogram: "TH",
  },
];

export const watches: Watch[] = [
  {
    id: "rolex-day-date",
    name: "Day-Date 40 Yellow Gold",
    brand: "Rolex",
    image: rolex,
    rating: 5,
    score: 4.9,
    label: "Pilihan Terbaik",
    collection: "Klasik",
    tagline: "Sang Presiden. Berwibawa dalam diam.",
    description:
      "Sebuah studi tentang kemewahan yang terkendali. Day-Date 40 mengemban beban setengah abad kewibawaan pada bezel emas 18 karat berukir flute, sementara dial sampanye memantulkan cahaya hangat ke seluruh indeks aplikatif. Setiap detail — dari bracelet President hingga kaliber 3255 yang dirakit dengan sangat teliti — direkayasa untuk menyatu dalam ritual harian.",
    specs: [
      { label: "Casing", value: "40 mm · emas kuning 18 ct" },
      { label: "Movement", value: "Kaliber 3255, otomatis" },
      { label: "Cadangan Daya", value: "70 jam" },
      { label: "Dial", value: "Sampanye, indeks aplikatif" },
    ],
  },
  {
    id: "rolex-submariner",
    name: "Submariner Date Vintage",
    brand: "Rolex",
    image: rolexSub,
    rating: 5,
    score: 4.8,
    label: "Populer",
    collection: "Sport",
    tagline: "Dibangun untuk kedalaman. Dicintai di daratan.",
    description:
      "Referensi yang mengajarkan dunia tentang arti sebuah tool watch sejati. Bezel satu arah, kristal sapphire, dan ketahanan air hingga 300 m, dibalut proporsi yang disempurnakan selama enam dekade. Sama anggunnya di bawah ombak maupun di balik manset kemeja yang rapi.",
    specs: [
      { label: "Casing", value: "41 mm · Oystersteel" },
      { label: "Movement", value: "Kaliber 3235, otomatis" },
      { label: "Tahan Air", value: "300 m" },
      { label: "Bezel", value: "Cerachrom skala 60 menit" },
    ],
  },
  {
    id: "omega-seamaster",
    name: "Seamaster Diver 300M",
    brand: "Omega",
    image: omega,
    rating: 5,
    score: 4.7,
    label: "Direkomendasikan",
    collection: "Sport",
    tagline: "Sang penyelam, telah berevolusi.",
    description:
      "Dial bermotif gelombang yang diukir laser di balik sapphire kubah, didampingi bezel keramik biru — Seamaster memadukan rekayasa kelas marine dengan karisma sinematik. Ditenagai Co-Axial Master Chronometer 8800 yang tahan medan magnet, tekanan, dan waktu itu sendiri.",
    specs: [
      { label: "Casing", value: "42 mm · stainless steel" },
      { label: "Movement", value: "Co-Axial 8800 Master Chronometer" },
      { label: "Tahan Air", value: "300 m" },
      { label: "Sertifikasi", value: "Tersertifikasi METAS" },
    ],
  },
  {
    id: "patek-calatrava",
    name: "Calatrava Ref. 6119R",
    brand: "Patek Philippe",
    image: patek,
    rating: 5,
    score: 4.95,
    label: "Pilihan Editor",
    collection: "Klasik",
    tagline: "Kesederhanaan sebagai seni tertinggi.",
    description:
      "Lahir tahun 1932 dari prinsip Bauhaus bahwa bentuk mengikuti fungsi, Calatrava tetap menjadi tolok ukur dress watch hingga hari ini. Referensi 6119R menghidupkan kembali bezel hobnail dalam emas mawar 39 mm, membingkai dial opaline keperakan dengan kemurnian yang nyaris monastik.",
    specs: [
      { label: "Casing", value: "39 mm · emas mawar 18 ct" },
      { label: "Movement", value: "Kaliber 30-255 PS, manual wind" },
      { label: "Cadangan Daya", value: "65 jam" },
      { label: "Tali", value: "Aligator jahit tangan" },
    ],
  },
  {
    id: "patek-moonphase",
    name: "Complications Moonphase",
    brand: "Patek Philippe",
    image: patekMoon,
    rating: 5,
    score: 4.9,
    label: "Pilihan Editor",
    collection: "Klasik",
    tagline: "Puisi yang tertulis dalam mekanika.",
    description:
      "Sebuah komplikasi astronomis yang begitu presisi sehingga hanya menyimpang satu hari setiap 122 tahun. Di bawah dial berlapis ivory, kaliber yang difinishing dengan tangan menelusuri siklus bulan dengan sentuhan biru sapphire — horologi paling liris dalam keheningannya.",
    specs: [
      { label: "Casing", value: "39 mm · emas mawar 18 ct" },
      { label: "Komplikasi", value: "Moonphase, tanggal" },
      { label: "Movement", value: "Kaliber 215 PS LU" },
      { label: "Finishing", value: "Geneva Seal" },
    ],
  },
  {
    id: "ap-royal-oak",
    name: "Royal Oak Selfwinding 41",
    brand: "Audemars Piguet",
    image: ap,
    rating: 5,
    score: 4.85,
    label: "Populer",
    collection: "Modern",
    tagline: "Jam tangan yang mendobrak segala aturan.",
    description:
      "Manifesto Gérald Genta tahun 1972 — sebuah jam tangan sport baja terintegrasi dengan keberanian haute joaillerie. Dial Grande Tapisserie memancarkan cahaya di balik bezel oktagonal yang ditahan delapan baut heksagonal, setiap sisinya berganti antara permukaan brushed dan polished.",
    specs: [
      { label: "Casing", value: "41 mm · stainless steel" },
      { label: "Movement", value: "Kaliber 4302, otomatis" },
      { label: "Cadangan Daya", value: "70 jam" },
      { label: "Dial", value: "Biru 'Grande Tapisserie'" },
    ],
  },
  {
    id: "tag-carrera",
    name: "Carrera Chronograph",
    brand: "TAG Heuer",
    image: tag,
    rating: 4,
    score: 4.6,
    label: "Direkomendasikan",
    collection: "Modern",
    tagline: "Esensi kecepatan, disuling sempurna.",
    description:
      "Diciptakan tahun 1963 untuk balapan paling berbahaya di dunia, Carrera menyaring esensi motorsport menjadi instrumen yang dapat dikenakan. Tiga sub-dial tersusun di bawah sapphire kubah, didampingi jarum chronograph berujung merah — kinetik, mudah dibaca, dan terasa hidup.",
    specs: [
      { label: "Casing", value: "42 mm · baja" },
      { label: "Movement", value: "Heuer 02, chrono otomatis" },
      { label: "Cadangan Daya", value: "80 jam" },
      { label: "Tali", value: "Kulit anak sapi berlubang" },
    ],
  },
];

export const getWatch = (id: string) => watches.find((w) => w.id === id);
