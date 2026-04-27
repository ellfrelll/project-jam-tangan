import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Youtube, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-32 bg-espresso text-bone">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/70">
              A curated atlas of the world's most enduring timepieces — chosen, scored
              and described by collectors, not algorithms.
            </p>
            <div className="hairline mt-8 max-w-xs opacity-60" />
            <div className="mt-8 flex gap-3">
              {[Instagram, Twitter, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-bone/20 text-bone/70 transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
                  aria-label="Social"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display text-lg text-[var(--gold-soft)]">Discover</h4>
            <ul className="mt-4 space-y-2 text-sm text-bone/70">
              <li><Link to="/brands" className="hover:text-bone">Brands</Link></li>
              <li><Link to="/collections" className="hover:text-bone">Collections</Link></li>
              <li><Link to="/about" className="hover:text-bone">Editorial</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display text-lg text-[var(--gold-soft)]">Maison</h4>
            <ul className="mt-4 space-y-2 text-sm text-bone/70">
              <li><Link to="/about" className="hover:text-bone">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-bone">Contact</Link></li>
              <li><a href="#" className="hover:text-bone">Press</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-lg text-[var(--gold-soft)]">Newsletter</h4>
            <p className="mt-4 text-sm text-bone/70">
              Quarterly dispatches from the world of horology.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex items-center gap-2 rounded-full border border-bone/20 px-4 py-2"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-transparent text-sm text-bone placeholder:text-bone/40 outline-none"
              />
              <button className="text-xs uppercase tracking-widest text-[var(--gold)] hover:text-[var(--gold-soft)]">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-bone/10 pt-8 text-xs text-bone/50 md:flex-row">
          <p>© {new Date().getFullYear()} Tempus Aurum. A recommendation atelier.</p>
          <p className="uppercase tracking-[0.3em]">Crafted with restraint</p>
        </div>
      </div>
    </footer>
  );
}
