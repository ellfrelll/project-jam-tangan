import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Twitter, Youtube, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="mt-32 bg-espresso text-bone">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/70">
              Sebuah atlas terkurasi dari jam tangan paling abadi di dunia — dipilih, dinilai,
              dan dideskripsikan oleh para kolektor, bukan algoritma.
            </p>
            <div className="hairline mt-8 max-w-xs opacity-60" />
            <div className="mt-8 flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Youtube, label: "YouTube" },
                { Icon: Mail, label: "Email" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="grid h-10 w-10 place-items-center rounded-full border border-bone/20 text-bone/70 transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display text-lg text-[var(--gold-soft)]">Jelajahi</h4>
            <ul className="mt-4 space-y-2 text-sm text-bone/70">
              <li><Link to="/brands" className="hover:text-bone">Brand</Link></li>
              <li><Link to="/collections" className="hover:text-bone">Koleksi</Link></li>
              <li><Link to="/about" className="hover:text-bone">Editorial</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display text-lg text-[var(--gold-soft)]">Atelier</h4>
            <ul className="mt-4 space-y-2 text-sm text-bone/70">
              <li><Link to="/about" className="hover:text-bone">Tentang Kami</Link></li>
              <li><Link to="/contact" className="hover:text-bone">Kontak</Link></li>
              <li><Link to="/about" className="hover:text-bone">Filosofi</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-lg text-[var(--gold-soft)]">Buletin</h4>
            <p className="mt-4 text-sm text-bone/70">
              Kirim cerita horologi pilihan ke kotak masuk Anda setiap kuartal.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="mt-4 flex items-center gap-2 rounded-full border border-bone/20 px-4 py-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@anda.com"
                className="w-full bg-transparent text-sm text-bone placeholder:text-bone/40 outline-none"
              />
              <button type="submit" className="text-xs uppercase tracking-widest text-[var(--gold)] hover:text-[var(--gold-soft)]">
                Gabung
              </button>
            </form>
            {subscribed && (
              <p className="mt-3 text-xs text-[var(--gold-soft)]">Terima kasih telah berlangganan ✓</p>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-bone/10 pt-8 text-xs text-bone/50 md:flex-row">
          <p>© {new Date().getFullYear()} Tempus Aurum. Sebuah atelier rekomendasi.</p>
          <p className="uppercase tracking-[0.3em]">Dirajut dengan ketenangan</p>
        </div>
      </div>
    </footer>
  );
}
