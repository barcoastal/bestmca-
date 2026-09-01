import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { RuntimeScripts } from "@/components/site/RuntimeScripts";
import { organizationSchema, websiteSchema, jsonLd } from "@/lib/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mcasettlementreviews.com"),
  title: {
    default:
      "MCA Settlement Reviews — Independent Ratings of MCA Debt Relief Companies",
    template: "%s | MCA Settlement Reviews",
  },
  description:
    "Independent reviews of the top merchant cash advance settlement companies. Compare pricing, results, and complaints to find the right MCA debt relief firm.",
  openGraph: {
    siteName: "MCA Settlement Reviews",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {/* Visitor click id: minted on first pageview, forwarded to CTAs by /go */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){function g(n){var m=document.cookie.match(new RegExp('(?:^|; )'+n+'=([^;]*)'));return m?m[1]:''}if(!g('msr_cid')){document.cookie='msr_cid=msr_'+Date.now().toString(36)+Math.random().toString(36).slice(2,10)+'; path=/; max-age=31536000; SameSite=Lax';}var p=new URLSearchParams(location.search);['gclid','fbclid','msclkid'].forEach(function(k){var v=p.get(k);if(v){document.cookie='msr_'+k+'='+encodeURIComponent(v)+'; path=/; max-age=7776000; SameSite=Lax';}});})();",
          }}
        />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="0PrxTs1GjIQVnXuXoe5GFw"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(organizationSchema())}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(websiteSchema())}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <RuntimeScripts />
      </body>
    </html>
  );
}
