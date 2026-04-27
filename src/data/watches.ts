import rolex from "@/assets/watch-rolex.jpg";
import rolexSub from "@/assets/watch-rolex-sub.jpg";
import omega from "@/assets/watch-omega.jpg";
import patek from "@/assets/watch-patek.jpg";
import patekMoon from "@/assets/watch-patek-moon.jpg";
import ap from "@/assets/watch-ap.jpg";
import tag from "@/assets/watch-tag.jpg";

export type Collection = "Classic" | "Sport" | "Modern";
export type Label = "Best Pick" | "Popular" | "Recommended" | "Editor's Choice";

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
    blurb: "The undisputed icon of timekeeping. Crowned heritage in every link.",
    accent: "Geneva, Switzerland · est. 1905",
  },
  {
    slug: "omega",
    name: "Omega",
    blurb: "Worn on the moon, refined on land. Pioneers of the modern sport watch.",
    accent: "Bienne, Switzerland · est. 1848",
  },
  {
    slug: "patek-philippe",
    name: "Patek Philippe",
    blurb: "You never actually own one — you merely look after it for the next generation.",
    accent: "Geneva, Switzerland · est. 1839",
  },
  {
    slug: "audemars-piguet",
    name: "Audemars Piguet",
    blurb: "The octagonal silhouette that rewrote the rules of luxury sport.",
    accent: "Le Brassus, Switzerland · est. 1875",
  },
  {
    slug: "tag-heuer",
    name: "TAG Heuer",
    blurb: "Born on the racetrack, engineered for the avant-garde.",
    accent: "La Chaux-de-Fonds, Switzerland · est. 1860",
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
    label: "Best Pick",
    collection: "Classic",
    tagline: "The President. Quietly commanding.",
    description:
      "A study in restrained opulence. The Day-Date 40 carries the weight of half a century of statesmanship on a fluted 18 ct gold bezel, while a champagne dial diffuses warm light across applied indices. Every detail — from the President bracelet to the meticulously finished 3255 caliber — is engineered to disappear into ritual.",
    specs: [
      { label: "Case", value: "40 mm · 18 ct yellow gold" },
      { label: "Movement", value: "Caliber 3255, automatic" },
      { label: "Power Reserve", value: "70 hours" },
      { label: "Dial", value: "Champagne, applied indices" },
    ],
  },
  {
    id: "rolex-submariner",
    name: "Submariner Date Vintage",
    brand: "Rolex",
    image: rolexSub,
    rating: 5,
    score: 4.8,
    label: "Popular",
    collection: "Sport",
    tagline: "Built for the deep. Loved on land.",
    description:
      "The reference that taught the world what a tool watch could be. A unidirectional bezel, sapphire crystal, and 300 m of water resistance, wrapped in proportions refined over six decades. Equally at home below the waves and beneath a crisp shirt cuff.",
    specs: [
      { label: "Case", value: "41 mm · Oystersteel" },
      { label: "Movement", value: "Caliber 3235, automatic" },
      { label: "Water Resistance", value: "300 m" },
      { label: "Bezel", value: "Cerachrom 60-min graduated" },
    ],
  },
  {
    id: "omega-seamaster",
    name: "Seamaster Diver 300M",
    brand: "Omega",
    image: omega,
    rating: 5,
    score: 4.7,
    label: "Recommended",
    collection: "Sport",
    tagline: "The diver, evolved.",
    description:
      "A laser-engraved wave dial under domed sapphire, flanked by a ceramic blue bezel — the Seamaster blends marine-grade engineering with cinematic charisma. Powered by the Co-Axial Master Chronometer 8800, it shrugs off magnetism, pressure and time itself.",
    specs: [
      { label: "Case", value: "42 mm · stainless steel" },
      { label: "Movement", value: "Co-Axial 8800 Master Chronometer" },
      { label: "Water Resistance", value: "300 m" },
      { label: "Certification", value: "METAS-certified" },
    ],
  },
  {
    id: "patek-calatrava",
    name: "Calatrava Ref. 6119R",
    brand: "Patek Philippe",
    image: patek,
    rating: 5,
    score: 4.95,
    label: "Editor's Choice",
    collection: "Classic",
    tagline: "Discretion as the highest art.",
    description:
      "Born in 1932 from the Bauhaus principle that form follows function, the Calatrava remains the dress watch by which all others are measured. The 6119R revives the hobnail bezel in 39 mm rose gold, framing a silvered opaline dial of monastic purity.",
    specs: [
      { label: "Case", value: "39 mm · 18 ct rose gold" },
      { label: "Movement", value: "Caliber 30-255 PS, manual wind" },
      { label: "Power Reserve", value: "65 hours" },
      { label: "Strap", value: "Hand-stitched alligator" },
    ],
  },
  {
    id: "patek-moonphase",
    name: "Complications Moonphase",
    brand: "Patek Philippe",
    image: patekMoon,
    rating: 5,
    score: 4.9,
    label: "Editor's Choice",
    collection: "Classic",
    tagline: "Poetry written in mechanics.",
    description:
      "An astronomic complication so precise it deviates by a single day every 122 years. Beneath an ivory-lacquered dial, a hand-finished caliber traces the lunar cycle with sapphire-blue artistry — quiet horology at its most lyrical.",
    specs: [
      { label: "Case", value: "39 mm · 18 ct rose gold" },
      { label: "Complication", value: "Moonphase, date" },
      { label: "Movement", value: "Caliber 215 PS LU" },
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
    label: "Popular",
    collection: "Modern",
    tagline: "The watch that broke the rules.",
    description:
      "Gérald Genta's 1972 manifesto — an integrated steel sports watch with the audacity of haute joaillerie. The Grande Tapisserie dial radiates beneath an octagonal bezel held by eight hexagonal screws, every facet alternating between brushed and polished surfaces.",
    specs: [
      { label: "Case", value: "41 mm · stainless steel" },
      { label: "Movement", value: "Caliber 4302, automatic" },
      { label: "Power Reserve", value: "70 hours" },
      { label: "Dial", value: "Blue 'Grande Tapisserie'" },
    ],
  },
  {
    id: "tag-carrera",
    name: "Carrera Chronograph",
    brand: "TAG Heuer",
    image: tag,
    rating: 4,
    score: 4.6,
    label: "Recommended",
    collection: "Modern",
    tagline: "Speed, distilled.",
    description:
      "Conceived in 1963 for the world's most dangerous race, the Carrera distills motorsport into a wearable instrument. Tri-compax sub-dials sit under domed sapphire, flanked by red-tipped chronograph seconds — kinetic, legible, alive.",
    specs: [
      { label: "Case", value: "42 mm · steel" },
      { label: "Movement", value: "Heuer 02, automatic chrono" },
      { label: "Power Reserve", value: "80 hours" },
      { label: "Strap", value: "Perforated calfskin" },
    ],
  },
];

export const getWatch = (id: string) => watches.find((w) => w.id === id);
