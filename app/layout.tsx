import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Volt Digital - Digital Solutions for Small Business Growth",
  description:
    "Expert digital marketing, web design, and business automation solutions tailored for small business owners. Grow your online presence with Volt Digital.",
  keywords:
    "digital marketing, web design, SEO, small business, digital solutions",
  authors: [{ name: "Volt Digital" }],
  openGraph: {
    title: "Volt Digital - Digital Solutions for Small Business Growth",
    description:
      "Expert digital marketing, web design, and business automation solutions for small business owners.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0066ff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PLACEHOLDER');
            `,
          }}
        />
      </body>
    </html>
  );
}
