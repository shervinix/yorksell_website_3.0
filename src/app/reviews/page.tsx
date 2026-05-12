import type { Metadata } from "next";
import Link from "next/link";
import { REVIEWS, GOOGLE_REVIEWS_URL } from "@/data/reviews";
import FadeUp from "@/app/FadeUp";

export const metadata: Metadata = {
  title: "Client Reviews | Toronto & GTA Real Estate | Yorksell",
  description:
    "Read verified client reviews for Yorksell Real Estate Group. See what Toronto & GTA buyers and sellers say about working with our team. 5-star rated on Google.",
  alternates: { canonical: "https://yorksell.com/reviews" },
  openGraph: {
    title: "Client Reviews | Toronto & GTA Real Estate | Yorksell",
    description:
      "Verified Google reviews from Toronto & GTA buyers and sellers who worked with Yorksell Real Estate Group.",
    url: "https://yorksell.com/reviews",
  },
};

const avgRating =
  REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length;

const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://yorksell.com/#organization",
  name: "Yorksell Real Estate Group",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: avgRating.toFixed(1),
    reviewCount: REVIEWS.length,
    bestRating: 5,
    worstRating: 1,
  },
  review: REVIEWS.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: r.text,
    ...(r.date ? { datePublished: `${r.date}-01-01` } : {}),
    itemReviewed: {
      "@type": "RealEstateAgent",
      name: "Yorksell Real Estate Group",
      url: "https://yorksell.com",
    },
  })),
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-4 w-4 shrink-0 ${star <= rating ? "text-amber-400/90" : "text-white/20"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />

      {/* Hero */}
      <header className="relative -mt-[6.5rem] min-h-[38vh] overflow-hidden pt-[6.5rem] bg-[var(--surface)]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[var(--background)] to-black" />
          <div className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-end px-4 pb-14 pt-4 sm:px-6 md:pb-20">
          <div className="flex items-center gap-2 mb-4">
            <StarRating rating={5} />
            <span className="text-sm font-medium text-amber-400/90">{avgRating.toFixed(1)} average</span>
            <span className="text-white/30 text-sm">·</span>
            <span className="text-sm text-white/50">{REVIEWS.length} reviews</span>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            What our clients say
          </h1>
          <p className="mt-3 text-lg text-white/70 max-w-xl">
            Real reviews from Toronto & GTA buyers and sellers. Read what it's like to work with Yorksell.
          </p>
        </div>
      </header>

      {/* Reviews grid */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <FadeUp key={i} delay={i * 80} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-[var(--surface-elevated)] p-7 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
                <StarRating rating={review.rating} />
                <p className="mt-5 flex-1 text-base leading-relaxed text-[var(--foreground)]/90">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/15 text-sm font-semibold text-[var(--accent)]">
                      {review.author.charAt(0)}
                    </div>
                    <span className="text-sm font-semibold text-[var(--foreground)]">{review.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/30">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" aria-hidden>
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    {review.date ?? "Google"}
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        {/* Google CTA */}
        <FadeUp delay={300}>
          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-white/[0.06] bg-[var(--surface)] p-8 text-center sm:p-10">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="h-6 w-6 text-amber-400/90" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-lg font-semibold text-[var(--foreground)]">See all reviews on Google</p>
            <p className="text-sm text-[var(--muted)] max-w-sm">
              Read our full review history on Google Business and leave your own review.
            </p>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-11 items-center gap-2 rounded-xl bg-[var(--accent)] px-6 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)]"
            >
              View on Google
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </FadeUp>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <FadeUp>
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                  Ready to work together?
                </h2>
                <p className="mt-2 text-[var(--muted)]">
                  Join our clients across Toronto and the GTA. Get in touch today.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-[var(--accent)] px-6 text-sm font-semibold text-white hover:bg-[var(--accent-hover)]"
                >
                  Contact us
                </Link>
                <Link
                  href="/listings"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 px-6 text-sm font-medium text-[var(--foreground)] hover:bg-white/5"
                >
                  View listings
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
