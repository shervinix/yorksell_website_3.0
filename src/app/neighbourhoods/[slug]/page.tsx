import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/server/db/prisma";
import { hasRealData } from "@/lib/db-filters";
import { getNeighbourhood, getNeighbourhoodSlugs } from "@/data/neighbourhoods";
import { ListingCard } from "@/app/listings/ListingCard";
import { toListingCard } from "@/lib/listings";
import FadeUp from "@/app/FadeUp";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yorksell.com";

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

async function resolveParams(params: PageProps["params"]) {
  return typeof (params as Promise<{ slug: string }>).then === "function"
    ? await (params as Promise<{ slug: string }>)
    : (params as { slug: string });
}

export function generateStaticParams() {
  return getNeighbourhoodSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await resolveParams(params);
  const hood = getNeighbourhood(slug);
  if (!hood) return { title: "Neighbourhood | Yorksell" };

  const title = `${hood.name} Real Estate | Homes for Sale | Yorksell`;
  const description = `Looking for homes for sale in ${hood.name}, ${hood.region}? Yorksell Real Estate Group offers expert buyer and seller representation in ${hood.name}. ${hood.tagline}`;
  const canonicalUrl = `${BASE_URL}/neighbourhoods/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
    },
  };
}

export default async function NeighbourhoodPage({ params }: PageProps) {
  const { slug } = await resolveParams(params);
  const hood = getNeighbourhood(slug);
  if (!hood) notFound();

  // Fetch up to 6 active listings matching this neighbourhood's city values
  const listings = await prisma.listing.findMany({
    where: {
      ...hasRealData,
      OR: hood.cityMatches.map((city) => ({
        city: { contains: city, mode: "insensitive" as const },
      })),
    },
    orderBy: { updatedAt: "desc" },
    take: 6,
    select: {
      id: true,
      ddfId: true,
      mlsNumber: true,
      addressLine: true,
      city: true,
      province: true,
      price: true,
      beds: true,
      baths: true,
      sqft: true,
      propertyType: true,
      status: true,
      photoUrl: true,
      lat: true,
      lng: true,
      updatedAt: true,
    },
  }).catch(() => []);

  const pageUrl = `${BASE_URL}/neighbourhoods/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Place",
        "@id": `${pageUrl}#place`,
        name: `${hood.name}, ${hood.region}`,
        description: hood.description,
        geo: {
          "@type": "GeoCoordinates",
          latitude: hood.lat,
          longitude: hood.lng,
        },
        containedInPlace: {
          "@type": "City",
          name: hood.region,
          addressCountry: "CA",
        },
      },
      {
        "@type": "RealEstateAgent",
        "@id": "https://yorksell.com/#organization",
        name: "Yorksell Real Estate Group",
        url: "https://yorksell.com",
        areaServed: { "@type": "Place", name: hood.name },
      },
      {
        "@type": "WebPage",
        "@id": pageUrl,
        name: `${hood.name} Real Estate | Yorksell`,
        description: hood.description,
        url: pageUrl,
        about: { "@id": `${pageUrl}#place` },
        publisher: { "@id": "https://yorksell.com/#organization" },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <header className="relative -mt-[6.5rem] min-h-[46vh] overflow-hidden pt-[6.5rem] bg-[var(--surface)]">
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
          <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/40">
            <Link href="/neighbourhoods" className="hover:text-white/60 transition">Neighbourhoods</Link>
            <span>/</span>
            <span className="text-white/60">{hood.region}</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
            {hood.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70 leading-relaxed">
            {hood.tagline}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={`/contact?neighbourhood=${encodeURIComponent(hood.name)}`}
              className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--accent)] px-6 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)]"
            >
              Talk to an agent
            </Link>
            <Link
              href={`/listings?q=${encodeURIComponent(hood.name)}`}
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 text-sm font-medium text-white transition hover:bg-white/10"
            >
              All {hood.name} listings
            </Link>
          </div>
        </div>
      </header>

      {/* Highlights bar */}
      <div className="border-b border-white/[0.06] bg-[var(--surface)] overflow-x-auto">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex min-w-max items-stretch divide-x divide-white/[0.06]">
            {hood.highlights.map((h) => (
              <div key={h.label} className="px-5 py-4 first:pl-0">
                <p className="text-xs font-medium text-[var(--muted)]">{h.label}</p>
                <p className="mt-0.5 text-sm font-semibold text-[var(--foreground)] whitespace-nowrap">{h.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_320px] lg:gap-16">

          {/* Main content */}
          <div className="space-y-14">

            {/* About */}
            <FadeUp>
              <section>
                <div className="h-px w-8 bg-[var(--accent)]" />
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl">
                  About {hood.name}
                </h2>
                <div className="mt-5 space-y-4">
                  {hood.aboutParagraphs.map((p, i) => (
                    <p key={i} className="leading-relaxed text-[var(--muted)]">{p}</p>
                  ))}
                </div>
              </section>
            </FadeUp>

            {/* Why buy here */}
            <FadeUp>
              <section>
                <div className="h-px w-8 bg-[var(--accent)]" />
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl">
                  Why buy in {hood.name}
                </h2>
                <ul className="mt-5 space-y-3">
                  {hood.buyingPoints.map((point, i) => (
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

            {/* Key streets */}
            {hood.streets && hood.streets.length > 0 && (
              <FadeUp>
                <section>
                  <div className="h-px w-8 bg-[var(--accent)]" />
                  <h2 className="mt-3 text-xl font-semibold tracking-tight text-[var(--foreground)]">
                    Key streets & addresses
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {hood.streets.map((street) => (
                      <span
                        key={street}
                        className="rounded-xl border border-white/[0.08] bg-[var(--surface-elevated)] px-4 py-2 text-sm text-[var(--foreground)]/80"
                      >
                        {street}
                      </span>
                    ))}
                  </div>
                </section>
              </FadeUp>
            )}

            {/* Listings */}
            {listings.length > 0 && (
              <FadeUp>
                <section>
                  <div className="h-px w-8 bg-[var(--accent)]" />
                  <div className="mt-3 flex items-end justify-between gap-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl">
                      Current listings in {hood.name}
                    </h2>
                    <Link
                      href={`/listings?q=${encodeURIComponent(hood.name)}`}
                      className="shrink-0 text-sm font-medium text-[var(--accent)] hover:underline"
                    >
                      View all →
                    </Link>
                  </div>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                    {listings.map((l) => (
                      <ListingCard key={l.id} listing={toListingCard(l)} />
                    ))}
                  </div>
                </section>
              </FadeUp>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">

            {/* Contact card */}
            <div className="rounded-2xl border border-white/[0.08] bg-[var(--surface-elevated)] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Buying or selling in {hood.name}?
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                Talk to a local expert
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                We know {hood.name} at a granular level — pricing by street, building-level details, and off-market opportunities.
              </p>
              <div className="mt-5 space-y-3">
                <Link
                  href={`/contact?neighbourhood=${encodeURIComponent(hood.name)}`}
                  className="block w-full rounded-xl bg-[var(--accent)] py-3 text-center text-sm font-semibold text-white hover:bg-[var(--accent-hover)]"
                >
                  Get in touch
                </Link>
                <a
                  href="tel:+14166392353"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-sm font-medium text-[var(--foreground)] hover:bg-white/5"
                >
                  (416) 639-2353
                </a>
              </div>
            </div>

            {/* Other neighbourhoods */}
            <div className="rounded-2xl border border-white/[0.08] bg-[var(--surface-elevated)] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">
                Other areas we cover
              </p>
              <div className="space-y-1">
                {getNeighbourhoodSlugs()
                  .filter((s) => s !== slug)
                  .map((s) => {
                    const n = getNeighbourhood(s)!;
                    return (
                      <Link
                        key={s}
                        href={`/neighbourhoods/${s}`}
                        className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-[var(--foreground)]/80 transition hover:bg-white/5 hover:text-[var(--foreground)]"
                      >
                        {n.name}
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5 text-[var(--muted)]" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 3l5 5-5 5" />
                        </svg>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
