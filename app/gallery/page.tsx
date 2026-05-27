import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'View our portfolio of completed groundworks, resin bound driveways, tarmac, paving and commercial surfacing projects across the Isle of Man.',
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
