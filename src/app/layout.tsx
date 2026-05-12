import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "./providers";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://yorksell.com"),
  title: {
    default: "Yorksell Real Estate Group | Toronto & GTA",
    template: "%s | Yorksell",
  },
  description:
    "Yorksell Real Estate Group — Toronto & GTA real estate. Expert buyer and seller representation, property management, and relocation services. Advice you can trust.",
  openGraph: {
    title: "Yorksell Real Estate Group | Toronto & GTA",
    description:
      "Toronto & GTA real estate. Expert buyer and seller representation, property management, and relocation. Advice you can trust.",
    type: "website",
    url: "https://yorksell.com",
    siteName: "Yorksell Real Estate Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yorksell Real Estate Group | Toronto & GTA",
    description:
      "Toronto & GTA real estate. Buying, selling, investing, and relocation. Expert advice from Yorksell.",
  },
  alternates: {
    canonical: "https://yorksell.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["RealEstateAgent", "LocalBusiness"],
      "@id": "https://yorksell.com/#organization",
      name: "Yorksell Real Estate Group",
      alternateName: "Yorksell",
      url: "https://yorksell.com",
      logo: {
        "@type": "ImageObject",
        url: "https://yorksell.com/logo2.png",
        width: 180,
        height: 48,
      },
      image: "https://yorksell.com/logo2.png",
      description:
        "Yorksell Real Estate Group is a team of Toronto & GTA realtors operating under Royal LePage Real Estate Services Ltd. Brokerage. Expert buyer and seller representation, property management, and full-service relocation.",
      telephone: "+14166392353",
      email: "info@yorksell.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4101 Yonge St, Suite 502",
        addressLocality: "Toronto",
        addressRegion: "ON",
        postalCode: "M2P 1N6",
        addressCountry: "CA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 43.7473,
        longitude: -79.4074,
      },
      areaServed: [
        { "@type": "City", name: "Toronto" },
        { "@type": "City", name: "North York" },
        { "@type": "City", name: "Etobicoke" },
        { "@type": "City", name: "Scarborough" },
        { "@type": "City", name: "Mississauga" },
        { "@type": "City", name: "Vaughan" },
        { "@type": "City", name: "Markham" },
        { "@type": "City", name: "Richmond Hill" },
        { "@type": "City", name: "Oakville" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "21:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "10:00",
          closes: "16:00",
        },
      ],
      sameAs: [
        "https://www.instagram.com/yorksell",
        "https://linkedin.com/company/yorksell",
        "https://www.youtube.com/@YorksellGroup",
      ],
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      "@id": "https://yorksell.com/#website",
      url: "https://yorksell.com",
      name: "Yorksell Real Estate Group",
      publisher: { "@id": "https://yorksell.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://yorksell.com/listings?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden">
        <Providers>
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}