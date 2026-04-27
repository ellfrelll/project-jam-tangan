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
  // ───────── Rolex tambahan ─────────
  {
    id: "rolex-gmt-pepsi",
    name: "GMT-Master II 'Pepsi'",
    brand: "Rolex",
    image: rolexSub,
    rating: 5,
    score: 4.85,
    label: "Populer",
    collection: "Sport",
    tagline: "Dua zona waktu, satu paspor menuju keabadian.",
    description:
      "Lahir tahun 1955 untuk para pilot Pan Am, GMT-Master II kini berdiri sebagai ikon perjalanan dengan bezel Cerachrom dwiwarna merah-biru. Jarum GMT 24 jam memungkinkan pemilik melacak rumah sekaligus tujuan, dibalut Oystersteel yang teruji oleh dekade.",
    specs: [
      { label: "Casing", value: "40 mm · Oystersteel" },
      { label: "Movement", value: "Kaliber 3285, otomatis" },
      { label: "Cadangan Daya", value: "70 jam" },
      { label: "Bezel", value: "Cerachrom dwiwarna 24 jam" },
    ],
  },
  {
    id: "rolex-datejust",
    name: "Datejust 36 Jubilee",
    brand: "Rolex",
    image: rolex,
    rating: 5,
    score: 4.75,
    label: "Direkomendasikan",
    collection: "Klasik",
    tagline: "Definisi jam tangan harian yang sempurna.",
    description:
      "Sejak 1945, Datejust mengajarkan dunia bahwa elegansi tidak perlu berteriak. Proporsi 36 mm yang abadi, bracelet Jubilee lima mata rantai, dan jendela tanggal Cyclops — sebuah formula yang nyaris tidak tersentuh waktu.",
    specs: [
      { label: "Casing", value: "36 mm · Oystersteel & emas kuning" },
      { label: "Movement", value: "Kaliber 3235, otomatis" },
      { label: "Cadangan Daya", value: "70 jam" },
      { label: "Dial", value: "Wimbledon, indeks Romawi" },
    ],
  },
  // ───────── Omega tambahan ─────────
  {
    id: "omega-speedmaster",
    name: "Speedmaster Moonwatch Professional",
    brand: "Omega",
    image: omega,
    rating: 5,
    score: 4.9,
    label: "Pilihan Editor",
    collection: "Modern",
    tagline: "Jam tangan yang menemani manusia ke Bulan.",
    description:
      "Dipilih NASA pada 1965 setelah lulus serangkaian uji ekstrem, Speedmaster menjadi satu-satunya jam tangan yang dipakai di permukaan Bulan. Kaliber 3861 manual wind dengan eskapemen Co-Axial menghidupkan kembali legenda dengan presisi Master Chronometer modern.",
    specs: [
      { label: "Casing", value: "42 mm · stainless steel" },
      { label: "Movement", value: "Kaliber 3861, manual wind" },
      { label: "Cadangan Daya", value: "50 jam" },
      { label: "Sertifikasi", value: "Master Chronometer METAS" },
    ],
  },
  {
    id: "omega-globemaster",
    name: "Constellation Globemaster",
    brand: "Omega",
    image: omega,
    rating: 4,
    score: 4.5,
    label: "Direkomendasikan",
    collection: "Klasik",
    tagline: "Observatorium di pergelangan tangan.",
    description:
      "Penghormatan modern terhadap Constellation klasik dengan dial pie-pan dan bezel beralur khas. Globemaster adalah Master Chronometer pertama di dunia — sebuah pernyataan presisi yang mengakar pada warisan observatorium Omega.",
    specs: [
      { label: "Casing", value: "39 mm · stainless steel" },
      { label: "Movement", value: "Kaliber 8900 Co-Axial" },
      { label: "Cadangan Daya", value: "60 jam" },
      { label: "Dial", value: "Pie-pan opaline keperakan" },
    ],
  },
  // ───────── Patek Philippe tambahan ─────────
  {
    id: "patek-nautilus",
    name: "Nautilus Ref. 5711",
    brand: "Patek Philippe",
    image: patek,
    rating: 5,
    score: 4.98,
    label: "Pilihan Editor",
    collection: "Modern",
    tagline: "Porthole yang mendefinisikan ulang sport mewah.",
    description:
      "Sketsa Gérald Genta tahun 1976 di sebuah restoran Basel melahirkan referensi yang akan mengubah lanskap horologi selamanya. Bezel oktagonal bersudut lembut, dial biru horizontal embossed, dan bracelet terintegrasi — sebuah arsitektur yang telah menjadi kosa kata visual kemewahan modern.",
    specs: [
      { label: "Casing", value: "40 mm · stainless steel" },
      { label: "Movement", value: "Kaliber 26-330 S C, otomatis" },
      { label: "Cadangan Daya", value: "45 jam" },
      { label: "Dial", value: "Biru horizontal embossed" },
    ],
  },
  {
    id: "patek-aquanaut",
    name: "Aquanaut Ref. 5167",
    brand: "Patek Philippe",
    image: patekMoon,
    rating: 5,
    score: 4.88,
    label: "Populer",
    collection: "Sport",
    tagline: "Spirit Nautilus, dirancang untuk samudera.",
    description:
      "Diperkenalkan tahun 1997 sebagai interpretasi kontemporer dari kode Nautilus, Aquanaut menghadirkan dial bertekstur 'embossed checkerboard' dan strap Tropical komposit yang revolusioner — sebuah Patek yang dapat berenang tanpa kehilangan jiwa haute horlogerie-nya.",
    specs: [
      { label: "Casing", value: "40 mm · stainless steel" },
      { label: "Movement", value: "Kaliber 324 S C, otomatis" },
      { label: "Cadangan Daya", value: "45 jam" },
      { label: "Tali", value: "Tropical komposit hitam" },
    ],
  },
  // ───────── Audemars Piguet tambahan ─────────
  {
    id: "ap-royal-oak-offshore",
    name: "Royal Oak Offshore Diver",
    brand: "Audemars Piguet",
    image: ap,
    rating: 4,
    score: 4.7,
    label: "Populer",
    collection: "Sport",
    tagline: "Royal Oak yang menyelam ke kedalaman 300 meter.",
    description:
      "Diperkenalkan tahun 2010, Offshore Diver membawa DNA oktagonal Royal Oak ke ranah tool watch sejati. Bezel internal yang dikendalikan crown jam 10, ketahanan air 300 m, dan proporsi case yang lebih maskulin — sport mewah dengan otot.",
    specs: [
      { label: "Casing", value: "42 mm · stainless steel" },
      { label: "Movement", value: "Kaliber 4308, otomatis" },
      { label: "Cadangan Daya", value: "60 jam" },
      { label: "Tahan Air", value: "300 m" },
    ],
  },
  {
    id: "ap-code-1159",
    name: "Code 11.59 Automatic",
    brand: "Audemars Piguet",
    image: ap,
    rating: 4,
    score: 4.55,
    label: "Direkomendasikan",
    collection: "Modern",
    tagline: "Geometri ganda yang berbicara dalam bahasa baru.",
    description:
      "Diluncurkan tahun 2019, Code 11.59 menggabungkan case bulat ramping dengan middle case oktagonal — sebuah eksperimen geometris yang berani. Sapphire ganda melengkung di kedua sisi memberikan dial efek mengambang yang tidak akan ditemukan di referensi lain.",
    specs: [
      { label: "Casing", value: "41 mm · emas putih 18 ct" },
      { label: "Movement", value: "Kaliber 4302, otomatis" },
      { label: "Cadangan Daya", value: "70 jam" },
      { label: "Kristal", value: "Sapphire ganda melengkung" },
    ],
  },
  // ───────── TAG Heuer tambahan ─────────
  {
    id: "tag-monaco",
    name: "Monaco Calibre 11",
    brand: "TAG Heuer",
    image: tag,
    rating: 5,
    score: 4.78,
    label: "Pilihan Editor",
    collection: "Klasik",
    tagline: "Kotak yang dikenakan Steve McQueen di Le Mans.",
    description:
      "Diluncurkan tahun 1969 sebagai chronograph automatic kotak pertama di dunia, Monaco menjadi simbol budaya saat dikenakan Steve McQueen dalam film Le Mans. Crown di sisi kiri dan dial biru elektrik tetap menjadi dua tanda pengenal yang tidak pernah luntur.",
    specs: [
      { label: "Casing", value: "39 mm · stainless steel kotak" },
      { label: "Movement", value: "Kaliber 11, chrono otomatis" },
      { label: "Cadangan Daya", value: "40 jam" },
      { label: "Dial", value: "Biru sunray dengan sub-dial putih" },
    ],
  },
  {
    id: "tag-aquaracer",
    name: "Aquaracer Professional 300",
    brand: "TAG Heuer",
    image: tag,
    rating: 4,
    score: 4.4,
    label: "Direkomendasikan",
    collection: "Sport",
    tagline: "Penyelam serbaguna untuk petualang modern.",
    description:
      "Generasi terbaru Aquaracer membawa case 12-sisi yang lebih tegas dan dial bertekstur horizontal. Dirancang untuk tahan air hingga 300 meter dengan bezel keramik searah, ia adalah penerus sejati garis tool watch TAG Heuer sejak tahun 1978.",
    specs: [
      { label: "Casing", value: "43 mm · stainless steel" },
      { label: "Movement", value: "Kaliber 5, otomatis" },
      { label: "Cadangan Daya", value: "38 jam" },
      { label: "Tahan Air", value: "300 m" },
    ],
  },
  {
    id: "tag-formula1",
    name: "Formula 1 Quartz Chronograph",
    brand: "TAG Heuer",
    image: tag,
    rating: 4,
    score: 4.2,
    label: "Direkomendasikan",
    collection: "Sport",
    tagline: "Pintu gerbang menuju dunia motorsport TAG Heuer.",
    description:
      "Diluncurkan tahun 1986 sebagai jam tangan yang membawa semangat Formula 1 ke khalayak yang lebih luas. Bezel keramik, presisi quartz, dan aksen warna khas balap — sebuah instrumen yang memadukan estetika sirkuit dengan ketahanan harian.",
    specs: [
      { label: "Casing", value: "43 mm · stainless steel" },
      { label: "Movement", value: "Quartz chronograph" },
      { label: "Tahan Air", value: "200 m" },
      { label: "Bezel", value: "Keramik hitam berskala tachymeter" },
    ],
  },
];

export const getWatch = (id: string) => watches.find((w) => w.id === id);
