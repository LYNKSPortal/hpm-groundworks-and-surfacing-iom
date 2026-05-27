import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Leaf, Droplets, School, TrendingUp, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Resources & Guides',
  description:
    'Free guides and information from HPM Groundworks & Surfacing: surface care & maintenance, 20-year cost comparisons, health & safety policy, environmental policy and more.',
  keywords: [
    'resin bound driveway guide Isle of Man',
    'surfacing cost comparison Isle of Man',
    'groundworks health and safety Isle of Man',
    'driveway maintenance guide IOM',
  ],
  alternates: {
    canonical: 'https://hpm.im/resources',
  },
  openGraph: {
    title: 'Resources & Guides | HPM Groundworks Isle of Man',
    description:
      'Free guides from HPM Groundworks: care & maintenance, cost comparisons, health & safety and environmental policy.',
    url: 'https://hpm.im/resources',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'HPM Groundworks Resources & Guides' }],
  },
  twitter: {
    title: 'Resources & Guides | HPM Groundworks Isle of Man',
    description: 'Free surfacing guides, cost comparisons & policies from HPM Groundworks Isle of Man.',
    images: ['/images/og-image.png'],
  },
};

const resources = [
  {
    href: '/resources/health-safety-policy',
    icon: <Shield size={22} />,
    title: 'Health & Safety Policy',
    desc: 'Our commitment to safe working practices during resin bound gravel installations.',
    tag: 'Policy',
    img: '/images/civil-groundworks.jpeg',
  },
  {
    href: '/resources/environmental-policy',
    icon: <Leaf size={22} />,
    title: 'Environmental Policy',
    desc: 'Our commitment to responsible, sustainable working practices.',
    tag: 'Policy',
    img: '/images/resin-driveway-1.jpeg',
  },
  {
    href: '/resources/care-maintenance',
    icon: <Droplets size={22} />,
    title: 'Care & Maintenance Guide',
    desc: 'How to preserve the beauty and longevity of your resin bound surface.',
    tag: 'Guide',
    img: '/images/block-paving-2.jpeg',
  },
  {
    href: '/resources/public-spaces-schools',
    icon: <School size={22} />,
    title: 'Public Spaces & Schools',
    desc: 'Why resin bound surfacing is the ideal choice for high-traffic public environments.',
    tag: 'Information',
    img: '/images/school-paving.jpeg',
  },
  {
    href: '/resources/cost-comparison',
    icon: <TrendingUp size={22} />,
    title: '20-Year Cost Comparison',
    desc: 'Compare the long-term value of resin bound vs tarmac, concrete, and block paving.',
    tag: 'Comparison',
    img: '/images/fleet-vehicles.jpeg',
  },
];

export default function ResourcesPage() {
  const [featured, ...rest] = resources;

  return (
    <>
      <PageHero
        title="RESOURCES &"
        titleHighlight="GUIDES"
        subtitle="Helpful guides, policies, comparisons, and information from HPM Groundworks & Surfacing LTD."
        dark
      />

      <section className="py-20 px-4 md:px-8 bg-[#F7F7F7] bg-grid-light">
        <div className="max-w-site mx-auto">

          {/* Featured card */}
          <Link
            href={featured.href}
            className="group relative block rounded-3xl overflow-hidden mb-5 h-[420px] shadow-[0_8px_40px_rgba(0,0,0,0.15)] border border-[#111111]/8 hover:shadow-[0_8px_60px_rgba(67,213,233,0.15)] transition-all duration-500"
          >
            <Image
              src={featured.img}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C5213E]/80 border border-[#C5213E]/40 mb-5 w-fit">
                <span className="text-xs font-body font-semibold text-white tracking-wide">{featured.tag}</span>
              </div>
              <h2 className="font-heading font-bold uppercase tracking-tight text-white leading-none mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
                {featured.title}
              </h2>
              <p className="font-body text-[#B8B8B8] text-base leading-relaxed mb-6">{featured.desc}</p>
              <div className="inline-flex items-center gap-2 text-[#43D5E9] font-body font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                Read More <ArrowRight size={16} />
              </div>
            </div>
          </Link>

          {/* Remaining cards — one per row */}
          <div className="flex flex-col gap-5">
            {rest.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group relative block rounded-2xl overflow-hidden h-52 shadow-card border border-[#111111]/8 hover:shadow-[0_8px_40px_rgba(67,213,233,0.15)] hover:border-[#43D5E9]/30 transition-all duration-500"
              >
                <Image
                  src={r.img}
                  alt={r.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />
                <div className="absolute inset-0 flex items-center p-8 md:p-12">
                  <div className="flex items-center gap-6 max-w-2xl">
                    {/* Icon */}
                    <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-[#43D5E9]/20 border border-[#43D5E9]/30 items-center justify-center text-[#43D5E9] flex-shrink-0 group-hover:bg-[#43D5E9] group-hover:text-black transition-all duration-300">
                      {r.icon}
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#C5213E]/80 border border-[#C5213E]/40 mb-3">
                        <span className="text-[10px] font-body font-semibold text-white tracking-wide uppercase">{r.tag}</span>
                      </div>
                      <h2 className="font-heading font-bold uppercase tracking-tight text-white text-xl md:text-2xl leading-tight mb-2">
                        {r.title}
                      </h2>
                      <p className="font-body text-sm text-[#B8B8B8] leading-relaxed mb-3 max-w-lg">{r.desc}</p>
                      <div className="flex items-center gap-2 text-[#43D5E9] font-body text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                        Read More <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
