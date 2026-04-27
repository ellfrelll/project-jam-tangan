import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tempus Aurum" },
      { name: "description", content: "Speak with the editorial desk. Tell us about your collection, or suggest a reference for the atlas." },
      { property: "og:title", content: "Contact the Editorial Desk — Tempus Aurum" },
      { property: "og:description", content: "Tell us about your collection, or nominate a reference for the atlas." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <>
      <section className="bg-gradient-hero pb-24 pt-44">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--gold-soft)]">
            Editorial Desk
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-bone md:text-7xl">
            Write to <em className="text-gradient-gold not-italic">us</em>.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-bone/75 md:text-lg">
            Suggest a reference, ask after a maison, or simply share what's on your wrist today.
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-6xl gap-16 px-4 md:px-8 lg:grid-cols-5">
          <aside className="space-y-10 lg:col-span-2">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--cocoa)]">Maison</span>
              <p className="mt-3 flex items-start gap-3 text-sm text-foreground">
                <MapPin size={16} className="mt-0.5 text-[var(--cognac)]" />
                Rue du Rhône 14<br />Geneva, Switzerland
              </p>
            </div>
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--cocoa)]">Correspondence</span>
              <p className="mt-3 flex items-center gap-3 text-sm text-foreground">
                <Mail size={16} className="text-[var(--cognac)]" />
                desk@tempusaurum.atelier
              </p>
            </div>
            <div className="hairline" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Replies within five working days. We answer everything personally — there are no
              automated responses here.
            </p>
          </aside>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setForm({ name: "", email: "", message: "" });
              setTimeout(() => setSent(false), 4000);
            }}
            className="space-y-6 rounded-3xl border border-[var(--border)] bg-card p-8 shadow-soft md:p-10 lg:col-span-3"
          >
            <Field label="Your name">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input-luxe"
                placeholder="Madame, Monsieur…"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="input-luxe"
                placeholder="you@maison.com"
              />
            </Field>
            <Field label="Message">
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="input-luxe resize-none"
                placeholder="Tell us about the reference on your mind…"
              />
            </Field>

            <button
              type="submit"
              className="group inline-flex items-center gap-3 rounded-full bg-espresso px-7 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-bone transition-colors hover:bg-cocoa"
            >
              {sent ? "Message Sent ✓" : "Send Message"}
              <Send size={14} className="transition-transform group-hover:translate-x-1" />
            </button>

            {sent && (
              <p className="text-sm text-[var(--cognac)]">Thank you — the desk will reply shortly.</p>
            )}
          </form>
        </div>
      </section>

      <style>{`
        .input-luxe {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--border);
          padding: 0.75rem 0;
          font-size: 0.95rem;
          color: var(--foreground);
          outline: none;
          transition: border-color 300ms;
        }
        .input-luxe::placeholder { color: var(--muted-foreground); }
        .input-luxe:focus { border-color: var(--cognac); }
      `}</style>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--cocoa)]">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
