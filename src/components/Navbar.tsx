import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Heart, Search, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useWishlistCount } from "@/hooks/use-wishlist";

const links = [
  { to: "/", label: "Beranda" },
  { to: "/brands", label: "Brand" },
  { to: "/collections", label: "Koleksi" },
  { to: "/about", label: "Tentang" },
  { to: "/contact", label: "Kontak" },
] as const;

export function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wishlistCount = useWishlistCount();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchOpen(false);
    navigate({ to: "/collections", search: { q: query } });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-[var(--border)]/60 py-2 shadow-soft"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 md:px-8">
        <Logo light={!scrolled} />

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                scrolled ? "text-espresso" : "text-bone"
              }`}
              activeProps={{ className: "!text-[var(--gold)]" }}
            >
              <span className="relative">
                {l.label}
                <span className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-[var(--gold)] transition-all duration-500 group-hover:w-full" />
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Cari"
            className={`grid h-10 w-10 place-items-center rounded-full transition-colors ${
              scrolled
                ? "text-espresso hover:bg-[var(--muted)]"
                : "text-bone hover:bg-white/10"
            }`}
          >
            <Search size={18} />
          </button>
          <Link
            to="/wishlist"
            aria-label={`Wishlist${wishlistCount > 0 ? ` (${wishlistCount})` : ""}`}
            className={`relative hidden h-10 w-10 place-items-center rounded-full transition-colors sm:grid ${
              scrolled ? "text-espresso hover:bg-[var(--muted)]" : "text-bone hover:bg-white/10"
            }`}
            activeProps={{ className: "!text-[var(--gold)]" }}
          >
            <Heart size={18} fill={wishlistCount > 0 ? "currentColor" : "none"} />
            {wishlistCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-[16px] place-items-center rounded-full bg-[var(--cognac)] px-1 text-[9px] font-semibold text-bone shadow-soft">
                {wishlistCount > 9 ? "9+" : wishlistCount}
              </span>
            )}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className={`grid h-10 w-10 place-items-center rounded-full transition-colors lg:hidden ${
              scrolled ? "text-espresso hover:bg-[var(--muted)]" : "text-bone hover:bg-white/10"
            }`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Search drawer */}
      {searchOpen && (
        <form onSubmit={submitSearch} className="mx-auto mt-3 max-w-7xl px-4 md:px-8">
          <div className="glass flex items-center gap-3 rounded-full border border-[var(--border)] px-5 py-3 shadow-soft">
            <Search size={16} className="text-muted-foreground" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari berdasarkan brand, referensi atau koleksi…"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
            >
              Tutup
            </button>
          </div>
        </form>
      )}

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden">
          <div className="mx-4 mt-3 rounded-2xl border border-[var(--border)] bg-card p-4 shadow-luxe md:mx-8">
            <nav className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-[var(--muted)]"
                  activeProps={{ className: "!text-[var(--gold)]" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/wishlist"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-[var(--muted)]"
                activeProps={{ className: "!text-[var(--gold)]" }}
              >
                <span className="inline-flex items-center gap-2">
                  <Heart size={14} fill={wishlistCount > 0 ? "currentColor" : "none"} />
                  Wishlist
                </span>
                {wishlistCount > 0 && (
                  <span className="rounded-full bg-[var(--cognac)] px-2 py-0.5 text-[10px] font-semibold text-bone">
                    {wishlistCount}
                  </span>
                )}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
