import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Resin Surfacing for Public Spaces & Schools',
  description:
    'Safe, DDA-compliant resin bound surfacing for schools, parks, car parks and public spaces on the Isle of Man. Slip-resistant, durable and low maintenance. HPM Groundworks.',
  keywords: [
    'school surfacing Isle of Man',
    'public space resin surfacing IOM',
    'DDA compliant surfacing Isle of Man',
    'resin bound surfacing schools Isle of Man',
    'playground surfacing Isle of Man',
    'commercial resin surfacing Isle of Man',
  ],
  alternates: {
    canonical: 'https://hpm.im/resources/public-spaces-schools',
  },
  openGraph: {
    title: 'Resin Surfacing for Public Spaces & Schools | HPM Groundworks',
    description:
      'DDA-compliant, slip-resistant resin bound surfacing for schools, parks and public spaces. Safe and durable — Isle of Man.',
    url: 'https://hpm.im/resources/public-spaces-schools',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Resin Surfacing for Schools & Public Spaces' }],
  },
  twitter: {
    title: 'Resin Surfacing for Schools & Public Spaces | HPM Groundworks',
    description: 'Safe, DDA-compliant resin surfacing for schools and public spaces on the Isle of Man.',
    images: ['/images/og-image.png'],
  },
};

const features = [
  { title: 'Slip-Resistant Texture', desc: 'Reduces risk of slips and falls in high-traffic areas.' },
  { title: 'Seamless Finish', desc: 'No joints or edges to trip over — safer for all users.' },
  { title: 'Smooth, Level Surface', desc: 'Ideal for wheelchair users, pushchairs, and those with mobility needs.' },
  { title: 'DDA Compliant', desc: 'Meets Disability Discrimination Act accessibility requirements.' },
  { title: 'Easy to Maintain', desc: 'Simple cleaning regime keeps surfaces looking pristine.' },
  { title: 'Weed & Moss Resistant', desc: 'Reduces maintenance requirements and improves appearance.' },
  { title: 'Built to Last', desc: 'High durability under heavy pedestrian and vehicular traffic.' },
  { title: 'Permeable Surface', desc: 'Rainwater drains through naturally, reducing surface flooding.' },
  { title: 'Supports SuDS', desc: 'Compliant with Sustainable Urban Drainage Systems requirements.' },
  { title: 'Wide Range of Colours', desc: 'Create bespoke designs, markings, and branded spaces.' },
  { title: 'Long-Lasting Appearance', desc: 'Colour-stable aggregates retain their look for years.' },
  { title: 'Sustainable Options', desc: 'Recycled and sustainable aggregate blends available.' },
  { title: 'Eco-Conscious Drainage', desc: 'Reduces urban runoff and supports natural water cycles.' },
];

export default function PublicSpacesSchoolsPage() {
  return (
    <>
      <PageHero
        title="PUBLIC SPACES &"
        titleHighlight="SCHOOLS"
        subtitle="Safe, durable resin bound surfacing for high-traffic public environments."
      />
      <section className="py-16 px-4 md:px-8 bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-body text-[#6B7280] hover:text-[#43D5E9] mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Resources
          </Link>

          <div className="relative w-full rounded-2xl overflow-hidden aspect-[16/7] mb-6 shadow-card border border-[#111111]/8">
            <Image
              src="/images/school-paving.jpeg"
              alt="School resin bound paving by HPM Groundworks"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div className="bg-white rounded-2xl border border-[#111111]/8 shadow-card p-6 mb-6">
            <h2 className="font-heading font-bold italic uppercase text-xl text-[#111111] tracking-tight mb-4">
              Why Choose Resin Bound?
            </h2>
            <p className="font-body text-sm text-[#6B7280] leading-relaxed">
              Resin bound gravel is quickly becoming the preferred surfacing solution for public
              spaces, with schools at the forefront of this shift. Its outstanding combination of
              safety, durability, and aesthetic flexibility makes it superior to traditional
              materials in virtually every performance category.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#111111]/8 shadow-card hover:border-[#43D5E9]/30 transition-all duration-200"
              >
                <CheckCircle size={16} className="text-[#43D5E9] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body font-semibold text-sm text-[#111111]">{f.title}</p>
                  <p className="font-body text-xs text-[#6B7280]">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#050505] rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
            <div className="relative">
              <h3 className="font-heading font-bold italic uppercase text-xl text-white tracking-tight mb-3">
                VIEW OUR PREMIUM SAMPLES
              </h3>
              <p className="font-body text-sm text-[#B8B8B8] mb-3 max-w-lg mx-auto">
                Want to see samples from our extensive range of exclusive aggregate blends? Just
                speak with Jaye to arrange a viewing.
              </p>
              <p className="font-body text-sm text-[#B8B8B8] mb-4 max-w-lg mx-auto">
                Our collection includes blends made from Marble, Granite, Quartz, and Basalt,
                sourced from premium quarries across Europe, Ireland, and the UK. With the largest
                selection available, there is a blend to suit every style.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#43D5E9]/10 border border-[#43D5E9]/30 mb-5">
                <span className="font-body font-semibold text-sm text-[#43D5E9]">
                  100+ Premium aggregate blends available
                </span>
              </div>
              <div className="block">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#43D5E9] text-black font-body font-semibold rounded-full transition-all duration-300 hover:bg-[#7EF3FF] hover:shadow-cyan text-sm"
                >
                  Request Samples
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
