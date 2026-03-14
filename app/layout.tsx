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
    default: "Work4U Services - Trusted Elder Care & Home Help in Pune",
    template: "%s | Work4U Services",
  },
  description:
    "Pune's trusted elder care service. Aadhar-verified student caregivers provide compassionate companionship, daily assistance, and peace of mind for your loved ones. Starting at ₹99.",
  keywords: [
    "elder care Pune",
    "senior citizen care Pune",
    "old age care at home Pune",
    "caretaker for elderly Pune",
    "home care services Pune",
    "senior companionship Pune",
    "Aadhar verified caregiver",
    "student helpers Pune",
    "Work4U Services",
    "home tutoring Pune",
    "affordable elder care",
  ],
  openGraph: {
    title: "Work4U Services - Trusted Elder Care & Home Help in Pune",
    description:
      "Compassionate, Aadhar-verified student caregivers for your elderly loved ones in Pune. Daily companionship, meal help, medicine reminders & more.",
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
                "Pune's trusted elder care and home services platform. Aadhar-verified student caregivers for senior citizens.",
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
