import type { Metadata } from 'next';
import { Chakra_Petch, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';
import ScrollReveal from '@/components/ScrollReveal';

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-chakra',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'HPM Groundworks & Surfacing LTD | Isle of Man',
    template: '%s | HPM Groundworks & Surfacing LTD',
  },
  description:
    'Expert groundworks, surfacing, civils, driveways, resin bound, tarmac, paving, drainage, haulage and plant hire across the Isle of Man. Unbeatable prices, free site surveys.',
  keywords: [
    'Groundworks Isle of Man',
    'Driveways Isle of Man',
    'Resin bound driveway Isle of Man',
    'Tarmac driveway Isle of Man',
    'Paving Isle of Man',
    'Drainage contractor Isle of Man',
    'Commercial groundworks Isle of Man',
    'Plant hire Isle of Man',
    'Surfacing contractor Isle of Man',
  ],
  authors: [{ name: 'HPM Groundworks & Surfacing LTD' }],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://hpm.im',
    siteName: 'HPM Groundworks & Surfacing LTD',
    title: 'HPM Groundworks & Surfacing LTD | Isle of Man',
    description:
      'Expert groundworks, surfacing, civils, driveways, resin bound, tarmac, paving, drainage, haulage and plant hire across the Isle of Man.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'HPM Groundworks & Surfacing LTD' }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://hpm.im',
  name: 'HPM Groundworks & Surfacing LTD',
  description:
    'Expert groundworks, surfacing, civils, driveways, resin bound, tarmac, paving, drainage, haulage and plant hire across the Isle of Man.',
  url: 'https://hpm.im',
  telephone: '+447624229993',
  email: 'jaye@hpm.im',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7 Brookfield Avenue',
    addressLocality: 'Ramsey',
    postalCode: 'IM8 2AD',
    addressCountry: 'IM',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '54.3244',
    longitude: '-4.3864',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '14:00',
    },
  ],
  priceRange: '££',
  currenciesAccepted: 'GBP',
  areaServed: 'Isle of Man',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${chakraPetch.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body>
        <PageLoader />
        <ScrollReveal />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
