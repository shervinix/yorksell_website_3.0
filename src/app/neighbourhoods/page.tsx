import type { Metadata } from "next";
import Link from "next/link";
import { neighbourhoods } from "@/data/neighbourhoods";
import FadeUp from "@/app/FadeUp";

export const metadata: Metadata = {
  title: "Toronto & GTA Neighbourhoods | Real Estate Guide | Yorksell",
  description:
    "Explore Toronto and GTA neighbourhoods with Yorksell Real Estate Group. Detailed guides for North York, Yorkville, Midtown, Forest Hill, Etobicoke — market insights, pricing, and local expertise.",
  alternates: { canonical: "https://yorksell.com/neighbourhoods" },
  openGraph: {
    title: "Toronto & GTA Neighbourhoods | Real Estate Guide | Yorksell",
    description: "Neighbourhood guides for Toronto and the GTA — pricing, market insights, and local real estate expertise from Yorksell.",
    url: "https://yorksell.com/neighbourhoods",
  },
};

export default function NeighbourhoodsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="relative -mt-[6.5rem] min-h-[38vh] overflow-hidden pt-[6.5rem] bg-[var(--surface)]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[var(--background)] to-black/80" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
        </div>
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-end px-4 pb-14 pt-4 sm:px-6 md:pb-20">
          <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">Toronto & GTA</span>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Neighbourhood Guides
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/70 leading-relaxed">
            Deep-dive guides to the areas we know best — pricing, lifestyle, schools, and what it actually takes to buy or sell there.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {neighbourhoods.map((hood, i) => (
            <FadeUp key={hood.slug} delay={i * 70} className="h-full">
              <Link
                href={`/neighbourhoods/${hood.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-[var(--surface-elevated)] p-7 shadow-[0_4px_24px_rgba(0,0,0,0.2)] transition hover:border-[var(--accent)]/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">{hood.region}</p>
                    <h2 className="mt-1 text-xl font-semibold tracking-tight text-[var(--foreground)] group-hover:text-white transition-colors">
                      {hood.name}
                    </h2>
                  </div>
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] text-[var(--muted)] transition group-hover:border-[var(--accent)]/40 group-hover:text-[var(--accent)]">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                  {hood.tagline}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {hood.highlights.slice(0, 2).map((h) => (
                    <span key={h.label} className="rounded-lg border border-white/[0.06] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--muted)]">
                      {h.label}: <span className="text-[var(--foreground)]/80 font-medium">{h.value}</span>
                    </span>
                  ))}
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={400}>
          <div className="mt-14 rounded-2xl border border-white/[0.06] bg-[var(--surface)] p-8 text-center md:p-10">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Don't see your neighbourhood?</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              We cover the full GTA. Get in touch and we'll give you a detailed read on any area you're considering.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex h-11 items-center justify-center rounded-xl bg-[var(--accent)] px-6 text-sm font-semibold text-white hover:bg-[var(--accent-hover)]"
            >
              Ask us about any area
            </Link>
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
