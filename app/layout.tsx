import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Work4U Services - Your Work, Our Help | Home Services in Pune",
    template: "%s | Work4U Services",
  },
  description:
    "Connect with verified student helpers in Pune for elder care, tutoring, and tech support. Affordable, reliable, and socially impactful home services.",
  keywords: [
    "home services Pune",
    "student helpers",
    "elder care Pune",
    "home tutoring",
    "tech support Pune",
    "Aadhar verified helpers",
    "Work4U Services",
  ],
  openGraph: {
    title: "Work4U Services - Your Work, Our Help",
    description:
      "Connect with verified student helpers in Pune for elder care, tutoring, and tech support.",
    url: "https://www.work4uservices.in",
    siteName: "Work4U Services",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Work4U Services",
              description:
                "Social impact platform connecting Pune residents with verified student helpers for home services",
              url: "https://www.work4uservices.in",
              telephone: "+918421502803",
              email: "info@work4u.com",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Shrivardhan, Ganesh Nagar, Galli number 2, New Sanghavi",
                addressLocality: "Pimpri-Chinchwad",
                addressRegion: "Maharashtra",
                postalCode: "411027",
                addressCountry: "IN",
              },
              areaServed: {
                "@type": "City",
                name: "Pune",
              },
              serviceType: [
                "Elder Care",
                "Home Tutoring",
                "Computer Support",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
