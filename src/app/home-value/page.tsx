import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/app/FadeUp";

export const metadata: Metadata = {
  title: "How Much Is My Home Worth? | Free Home Valuation | Yorksell",
  description:
    "Get a free, accurate home valuation from Yorksell Real Estate Group. Our Toronto & GTA agents use live market data — not automated estimates — to tell you exactly what your home is worth today.",
  alternates: { canonical: "https://yorksell.com/home-value" },
  openGraph: {
    title: "How Much Is My Home Worth? | Free Home Valuation | Yorksell",
    description:
      "Free home valuation from Toronto & GTA's Yorksell Real Estate Group. Live market data, real agent expertise — know your home's true value before you sell.",
    url: "https://yorksell.com/home-value",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much is my home worth in Toronto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your home's value depends on location, size, condition, recent comparable sales, and current market conditions. In Toronto, detached homes in areas like North York and Midtown typically range from $1.8M to $4M+, while condos vary widely by building and neighbourhood. A free comparative market analysis (CMA) from a Yorksell agent gives you a precise, current valuation.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate are online home value estimators?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Automated tools like Zestimate or HouseSigma estimates can be off by 10–25% because they rely on general algorithms rather than property-specific knowledge. They don't account for renovations, lot premiums, views, or building condition. A professional CMA from a local agent is significantly more accurate.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a home valuation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A preliminary valuation based on recent comparables typically takes 24–48 hours after you submit your property details. If you'd like a full in-person assessment that factors in the property's condition, layout, and finishes, we can usually schedule that within a few days.",
      },
    },
    {
      "@type": "Question",
      name: "Is the home valuation really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, completely free with no obligation. We provide valuations to homeowners throughout Toronto and the GTA as part of our commitment to educating the market. There's no pressure to list with us — though we're happy to explain what a sale would look like if you're curious.",
      },
    },
    {
      "@type": "Question",
      name: "What factors affect my home's value?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key factors include location and street (some blocks command significant premiums), lot size, square footage, number of bedrooms and bathrooms, finishes and renovations, school catchment, transit access, and recent comparable sales within 500 metres. Market conditions — whether it's a buyer's or seller's market — also affect timing and achievable price.",
      },
    },
    {
      "@type": "Question",
      name: "When is the best time to sell in Toronto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spring (March–May) historically produces the most buyer activity and competitive offers in the Toronto market. Fall (September–October) is a strong secondary window. That said, well-priced homes in desirable neighbourhoods sell in any season. The right time to sell depends as much on your personal circumstances as on market timing.",
      },
    },
  ],
};

const steps = [
  {
    number: "01",
    title: "Tell us about your property",
    description:
      "Share your address, property type, approximate size, and any recent renovations. Takes about 2 minutes.",
  },
  {
    number: "02",
    title: "We analyse the market",
    description:
      "Our agents pull live comparables, review recent sales within your area, and assess pricing trends specific to your street and building.",
  },
  {
    number: "03",
    title: "You get a precise valuation",
    description:
      "Within 24–48 hours, you'll have a detailed CMA — not a range, a number — with the comparable sales that support it.",
  },
];

const whyPoints = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Live comparables, not algorithms",
    body: "Automated tools guess. We use actual sold data and real-time market conditions to price your home precisely.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    title: "Hyperlocal expertise",
    body: "We know the price difference between the east and west side of the same street. That granularity matters when it's your home.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Results within 24–48 hours",
    body: "Not a week from now. We deliver a full CMA quickly so you can make decisions on your timeline, not ours.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "No obligation, no pressure",
    body: "We give you the number because an informed homeowner is a better client. You decide what to do with it.",
  },
];

const faqs = [
  {
    q: "How accurate are online home value estimators?",
    a: "Automated tools can be off by 10–25%. They don't know about your renovation, the premium lot, or what sold three doors down last week. A professional CMA is materially more accurate.",
  },
  {
    q: "How long does the valuation take?",
    a: "A preliminary valuation based on recent comparables typically takes 24–48 hours. Full in-person assessments can usually be scheduled within a few days.",
  },
  {
    q: "Is it really free?",
    a: "Yes — no cost, no obligation. We provide valuations to homeowners across the GTA as part of how we build relationships in the market.",
  },
  {
    q: "When is the best time to sell?",
    a: "Spring (March–May) and fall (September–October) are historically the busiest windows in Toronto. That said, well-priced homes sell in any season — the market is about supply and demand, not the calendar.",
  },
];

export default function HomeValuePage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <header className="relative -mt-[6.5rem] min-h-[52vh] overflow-hidden pt-[6.5rem] bg-[var(--surface)]">
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
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-end px-4 pb-14 pt-4 sm:px-6 md:pb-24">
          <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
            Free Home Valuation — Toronto &amp; GTA
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
            How Much Is Your Home Worth?
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/70 leading-relaxed">
            Get a precise valuation from a local agent who knows your market at a street level — not an algorithm that's guessing. Free, with no obligation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact?reason=home-valuation"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-[var(--accent)] px-7 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)]"
            >
              Get my free valuation
            </Link>
            <a
              href="tel:+14166392353"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Call (416) 639-2353
            </a>
          </div>
        </div>
      </header>

      {/* Trust bar */}
      <div className="border-b border-white/[0.06] bg-[var(--surface)] overflow-x-auto">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex min-w-max items-stretch divide-x divide-white/[0.06]">
            {[
              { label: "Response time", value: "Within 24–48 hrs" },
              { label: "Cost", value: "Free, no obligation" },
              { label: "Coverage", value: "Toronto & GTA" },
              { label: "Data source", value: "Live MLS comparables" },
              { label: "Brokerage", value: "Royal LePage" },
            ].map((item) => (
              <div key={item.label} className="px-5 py-4 first:pl-0">
                <p className="text-xs font-medium text-[var(--muted)]">{item.label}</p>
                <p className="mt-0.5 text-sm font-semibold text-[var(--foreground)] whitespace-nowrap">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_340px] lg:gap-16">

          {/* Left column */}
          <div className="space-y-16">

            {/* How it works */}
            <FadeUp>
              <section>
                <div className="h-px w-8 bg-[var(--accent)]" />
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl">
                  How it works
                </h2>
                <p className="mt-3 text-[var(--muted)] leading-relaxed">
                  A real home valuation takes three steps — and the only one that requires your time is the first.
                </p>
                <div className="mt-8 space-y-6">
                  {steps.map((step) => (
                    <div key={step.number} className="flex gap-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-[var(--surface-elevated)] text-xs font-bold tracking-wider text-[var(--accent)]">
                        {step.number}
                      </div>
                      <div>
                        <p className="font-semibold text-[var(--foreground)]">{step.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </FadeUp>

            {/* Why Yorksell */}
            <FadeUp>
              <section>
                <div className="h-px w-8 bg-[var(--accent)]" />
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl">
                  Why a Yorksell valuation is different
                </h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {whyPoints.map((point) => (
                    <div
                      key={point.title}
                      className="rounded-2xl border border-white/[0.08] bg-[var(--surface-elevated)] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)]/15 text-[var(--accent)]">
                        {point.icon}
                      </div>
                      <p className="mt-4 font-semibold text-[var(--foreground)]">{point.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">{point.body}</p>
                    </div>
                  ))}
                </div>
              </section>
            </FadeUp>

            {/* What affects value */}
            <FadeUp>
              <section>
                <div className="h-px w-8 bg-[var(--accent)]" />
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl">
                  What affects your home's value
                </h2>
                <p className="mt-3 text-[var(--muted)] leading-relaxed">
                  No two properties are priced the same — even on the same block. These are the factors that move the number most significantly in the Toronto market.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Location and street — some blocks carry meaningful premiums over adjacent ones",
                    "Lot size and depth — especially relevant for detached homes in North York, Midtown, and Forest Hill",
                    "Square footage and layout — open-concept and functional floor plans command premiums",
                    "Renovations and finishes — kitchens, bathrooms, and mechanical upgrades have the highest return",
                    "School catchment — buyers pay real premiums to be in top TDSB or private school zones",
                    "Transit proximity — walking distance to subway stations drives consistent demand",
                    "Recent comparable sales — what sold within 500 metres in the last 90 days sets the baseline",
                    "Seasonality and current inventory — supply and demand conditions at the time of listing",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/15 text-[var(--accent)]">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3" aria-hidden>
                          <path fillRule="evenodd" d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.45 7.5a1 1 0 0 1-1.42.006L3.29 9.704a1 1 0 1 1 1.414-1.414l3.84 3.84 6.743-6.79a1 1 0 0 1 1.417-.05Z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm leading-relaxed text-[var(--foreground)]/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </FadeUp>

            {/* FAQ */}
            <FadeUp>
              <section>
                <div className="h-px w-8 bg-[var(--accent)]" />
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl">
                  Common questions
                </h2>
                <div className="mt-6 space-y-5">
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/[0.08] bg-[var(--surface-elevated)] p-6"
                    >
                      <p className="font-semibold text-[var(--foreground)]">{faq.q}</p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            </FadeUp>

            {/* Market context by area */}
            <FadeUp>
              <section>
                <div className="h-px w-8 bg-[var(--accent)]" />
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl">
                  Current price ranges by area
                </h2>
                <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
                  These are broad market ranges — your specific property will vary. Get a precise valuation for your address.
                </p>
                <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.08]">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/[0.06] bg-[var(--surface-elevated)]">
                        <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Neighbourhood</th>
                        <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Detached</th>
                        <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Condo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.06] bg-[var(--surface)]">
                      {[
                        { area: "North York", detached: "$1.8M – $2.4M", condo: "$650K – $900K" },
                        { area: "Midtown Toronto", detached: "$2.5M – $4M", condo: "$750K – $1.3M" },
                        { area: "Yorkville", detached: "$4M+", condo: "$1.1M – $2.5M+" },
                        { area: "Forest Hill", detached: "$3M – $7M+", condo: "N/A" },
                        { area: "Etobicoke", detached: "$1.2M – $2.2M", condo: "$550K – $850K" },
                      ].map((row) => (
                        <tr key={row.area}>
                          <td className="px-5 py-4 font-medium text-[var(--foreground)]">{row.area}</td>
                          <td className="px-5 py-4 text-[var(--foreground)]/80">{row.detached}</td>
                          <td className="px-5 py-4 text-[var(--foreground)]/80">{row.condo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-[var(--muted)]">
                  Data reflects general market conditions as of 2025. Individual property values vary. Contact us for a precise CMA.
                </p>
              </section>
            </FadeUp>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">

            {/* Main CTA card */}
            <div className="rounded-2xl border border-white/[0.08] bg-[var(--surface-elevated)] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Free — no obligation
              </p>
              <h3 className="mt-2 text-xl font-semibold text-[var(--foreground)] leading-snug">
                Get your home's value
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Tell us about your property and we'll deliver a detailed CMA within 24–48 hours. No pressure, no commitment.
              </p>
              <div className="mt-5 space-y-3">
                <Link
                  href="/contact?reason=home-valuation"
                  className="block w-full rounded-xl bg-[var(--accent)] py-3 text-center text-sm font-semibold text-white hover:bg-[var(--accent-hover)]"
                >
                  Request my free valuation
                </Link>
                <a
                  href="tel:+14166392353"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-sm font-medium text-[var(--foreground)] hover:bg-white/5"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 shrink-0" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6Z" />
                  </svg>
                  (416) 639-2353
                </a>
              </div>
            </div>

            {/* Thinking about selling? */}
            <div className="rounded-2xl border border-white/[0.08] bg-[var(--surface-elevated)] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">
                Thinking about selling?
              </p>
              <div className="space-y-1">
                {[
                  { label: "Sell with Yorksell", href: "/sell" },
                  { label: "How we market your home", href: "/sell#process" },
                  { label: "Browse our listings", href: "/listings" },
                  { label: "Neighbourhood guides", href: "/neighbourhoods" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-[var(--foreground)]/80 transition hover:bg-white/5 hover:text-[var(--foreground)]"
                  >
                    {item.label}
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5 text-[var(--muted)]" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3l5 5-5 5" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social proof */}
            <div className="rounded-2xl border border-white/[0.08] bg-[var(--surface-elevated)] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="h-4 w-4 text-amber-400/90" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-[var(--foreground)]/90 leading-relaxed">
                &ldquo;They gave us a valuation that was spot-on — we listed at their recommended price and had four offers in three days.&rdquo;
              </p>
              <p className="mt-3 text-xs font-semibold text-[var(--muted)]">— Marcus T., North York seller</p>
              <Link
                href="/reviews"
                className="mt-3 block text-xs font-medium text-[var(--accent)] hover:underline"
              >
                Read all client reviews →
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="border-t border-white/[0.06] bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
          <FadeUp>
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl">
                  Know your number before you decide anything.
                </h2>
                <p className="mt-2 text-[var(--muted)]">
                  Free, accurate, and delivered by a local expert who knows your market.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact?reason=home-valuation"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-[var(--accent)] px-7 text-sm font-semibold text-white hover:bg-[var(--accent-hover)]"
                >
                  Get my free valuation
                </Link>
                <Link
                  href="/sell"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 px-7 text-sm font-medium text-[var(--foreground)] hover:bg-white/5"
                >
                  Learn about selling
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
