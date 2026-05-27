import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata: Metadata = {
  title: 'Project Gallery | Driveways & Surfacing Portfolio',
  description:
    'Browse 34+ completed groundworks and surfacing projects across the Isle of Man. Resin bound driveways, tarmac, block paving, commercial surfacing & more.',
  keywords: [
    'driveway gallery Isle of Man',
    'resin driveway photos Isle of Man',
    'tarmac driveway photos IOM',
    'block paving photos Isle of Man',
    'groundworks portfolio Isle of Man',
    'surfacing projects Isle of Man',
  ],
  alternates: {
    canonical: 'https://hpm.im/gallery',
  },
  openGraph: {
    title: 'Project Gallery | HPM Groundworks & Surfacing Isle of Man',
    description:
      'Browse our portfolio of completed resin bound driveways, tarmac, block paving and groundworks projects across the Isle of Man.',
    url: 'https://hpm.im/gallery',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'HPM Groundworks Project Gallery' }],
  },
  twitter: {
    title: 'Project Gallery | HPM Groundworks Isle of Man',
    description: 'See our completed resin driveways, tarmac, block paving & groundworks projects across the Isle of Man.',
    images: ['/images/og-image.jpg'],
  },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="OUR PAST"
        titleHighlight="PROJECTS"
        subtitle="Take a look at some of our recent groundworks, surfacing, and paving projects."
      />
      <section className="py-16 px-4 md:px-8 bg-[#F7F7F7]">
        <div className="max-w-site mx-auto">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
