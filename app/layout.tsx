import type { Metadata } from 'next';
import { Chakra_Petch, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';
import ScrollReveal from '@/components/ScrollReveal';
import { siteConfig } from '@/lib/siteConfig';

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
  metadataBase: new URL('https://hpm.im'),
  title: {
    default: 'HPM Groundworks & Surfacing LTD | Isle of Man',
    template: '%s | HPM Groundworks & Surfacing LTD',
  },
  description:
    'Isle of Man\'s leading groundworks and surfacing contractor. Resin bound driveways, tarmac, block paving, drainage, foundations & civil engineering. Free site surveys. Call +44 7624 229993.',
  keywords: [
    'Groundworks Isle of Man',
    'Surfacing contractor Isle of Man',
    'Driveways Isle of Man',
    'Resin bound driveway Isle of Man',
    'Resin bound surfacing Isle of Man',
    'Tarmac driveway Isle of Man',
    'Tarmac surfacing Isle of Man',
    'Block paving Isle of Man',
    'Paving contractor Isle of Man',
    'Drainage contractor Isle of Man',
    'Commercial groundworks Isle of Man',
    'Civil engineering Isle of Man',
    'Plant hire Isle of Man',
    'Haulage Isle of Man',
    'Driveway contractor Isle of Man',
    'HPM Groundworks',
    'VUBA approved installer Isle of Man',
    'Resin driveway IOM',
    'Groundworks IOM',
  ],
  authors: [{ name: 'HPM Groundworks & Surfacing LTD', url: 'https://hpm.im' }],
  creator: 'HPM Groundworks & Surfacing LTD',
  publisher: 'HPM Groundworks & Surfacing LTD',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'manifest', url: '/site.webmanifest' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://hpm.im',
    siteName: 'HPM Groundworks & Surfacing LTD',
    title: 'HPM Groundworks & Surfacing LTD | Isle of Man',
    description:
      'Isle of Man\'s leading groundworks and surfacing contractor. Resin bound driveways, tarmac, block paving, drainage & civil engineering. Free site surveys.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'HPM Groundworks & Surfacing LTD' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HPM Groundworks & Surfacing LTD | Isle of Man',
    description:
      'Isle of Man\'s leading groundworks and surfacing contractor. Resin bound driveways, tarmac, block paving & more. Free site surveys.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': siteConfig.url,
  name: siteConfig.name,
  description:
    'Expert groundworks, surfacing, civils, driveways, resin bound, tarmac, paving, drainage, haulage and plant hire across the Isle of Man.',
  url: siteConfig.url,
  telephone: siteConfig.phoneTel,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.town,
    postalCode: siteConfig.address.postcode,
    addressCountry: siteConfig.address.countryCode,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.geo.lat,
    longitude: siteConfig.geo.lng,
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
