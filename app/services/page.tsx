import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Groundworks & Surfacing Services',
  description:
    'Full range of professional groundworks and surfacing services on the Isle of Man: resin bound driveways, tarmac, block paving, drainage, foundations, haulage & plant hire.',
  keywords: [
    'resin bound surfacing Isle of Man',
    'tarmac surfacing Isle of Man',
    'block paving contractor Isle of Man',
    'drainage contractor Isle of Man',
    'groundworks and foundations Isle of Man',
    'plant hire Isle of Man',
    'haulage Isle of Man',
    'commercial surfacing Isle of Man',
  ],
  alternates: {
    canonical: 'https://hpm.im/services',
  },
  openGraph: {
    title: 'Groundworks & Surfacing Services | Isle of Man',
    description:
      'Resin bound driveways, tarmac, block paving, drainage, foundations, haulage & plant hire. Professional groundworks across the Isle of Man.',
    url: 'https://hpm.im/services',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'HPM Groundworks Services — Isle of Man' }],
  },
  twitter: {
    title: 'Groundworks & Surfacing Services | HPM — Isle of Man',
    description: 'Resin bound, tarmac, block paving, drainage & groundworks across the Isle of Man. Get a free quote today.',
    images: ['/images/og-image.png'],
  },
};

const services = [
  {
    number: '01',
    title: 'GROUNDWORKS & CONSTRUCTION',
    desc: 'Comprehensive groundworks services including foundations, footings, and site preparation for both domestic and commercial construction projects. We ensure a solid foundation for every build.',
    bullets: ['Site Clearance', 'Foundations & Footings', 'Trenching', 'Concrete Slabs'],
    img: '/images/civil-groundworks.jpeg',
    alt: 'Professional groundworks and site preparation in Isle of Man',
  },
  {
    number: '02',
    title: 'RESIN BOUND SURFACING',
    desc: 'A stunning, permeable, and highly durable surfacing option perfect for modern driveways, paths, and patios. Available in a wide variety of colors to match your property perfectly.',
    bullets: ['SUDS Compliant', 'Weed Resistant', 'Smooth Finish', 'Various Color Blends'],
    img: '/images/resin-compass.jpeg',
    alt: 'Premium resin bound driveway surfacing Isle of Man',
  },
  {
    number: '03',
    title: 'TARMAC & ASPHALT',
    desc: 'Classic, cost-effective, and incredibly durable. We provide expert tarmac laying for driveways, roads, and car parks, ensuring a perfectly smooth and long-lasting finish.',
    bullets: ['Red or Black Tarmac', 'Machine Laying', 'Pothole Repairs', 'Resurfacing'],
    img: '/images/tarmac-2.jpeg',
    alt: 'Expert tarmac driveway installation Isle of Man',
  },
  {
    number: '04',
    title: 'PAVING & PATIOS',
    desc: 'Transform your outdoor living space with our premium paving services. We specialise in creating beautiful, functional patios using the finest materials available.',
    bullets: ['Block Paving', 'Indian Sandstone', 'Porcelain Tiles', 'Custom Patterns'],
    img: '/images/block-paving-1.jpeg',
    alt: 'Premium patio paving and block paving Isle of Man',
  },
  {
    number: '05',
    title: 'DRAINAGE SOLUTIONS',
    desc: 'Expert drainage solutions to prevent flooding and water damage. We handle everything from soakaways to main sewer connections with precision and compliance.',
    bullets: ['Soakaways', 'French Drains', 'Inspection Chambers', 'Pipe Laying'],
    img: '/images/groundworks-drainage.jpeg',
    alt: 'Professional drainage installation and solutions Isle of Man',
  },
  {
    number: '06',
    title: 'HAULAGE & PLANT HIRE',
    desc: 'Reliable haulage services for muck away and aggregate delivery, plus operated plant hire for your projects. We have the machinery and expertise to handle heavy lifting.',
    bullets: ['Muck Away', 'Aggregate Delivery', 'Operated Diggers', 'Site Clearance'],
    img: '/images/civil-excavators.jpeg',
    alt: 'Haulage and plant hire services Isle of Man',
  },
];

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'HPM Groundworks & Surfacing Services',
  url: 'https://hpm.im/services',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.title,
      description: s.desc,
      provider: {
        '@type': 'LocalBusiness',
        name: 'HPM Groundworks & Surfacing LTD',
        url: 'https://hpm.im',
      },
      areaServed: 'Isle of Man',
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <PageHero
        title="OUR"
        titleHighlight="SERVICES"
        subtitle="Experts in Groundworks, Surfacing, Civils & Plant. Unbeatable prices for all aspects of works across the Isle of Man."
      />

      <div className="bg-white bg-grid-light">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section key={service.number} className="py-16 px-4 md:px-8 border-b border-[#111111]/6 last:border-0">
              <div className="max-w-site mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="inline-flex items-center gap-2 mb-4">
                      <span className="w-6 h-px bg-[#C5213E]" />
                      <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-[#C5213E]">
                        Service {service.number}
                      </span>
                    </div>
                    <h2
                      className="font-heading font-bold uppercase tracking-tight text-[#111111] mb-4 leading-none pb-2 pr-4"
                      style={{ fontSize: 'clamp(1.75rem, 3vw, 3rem)' }}
                    >
                      {service.title}
                    </h2>
                    <p className="font-body text-[#6B7280] text-base leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <CheckCircle size={15} className="text-[#43D5E9] flex-shrink-0" />
                          <span className="font-body text-base text-[#111111]">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#43D5E9] text-black font-body font-semibold rounded-full transition-all duration-300 hover:bg-[#7EF3FF] hover:shadow-cyan text-sm"
                    >
                      Get a Quote <ArrowRight size={15} />
                    </Link>
                  </div>
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                      <Image
                        src={service.img}
                        alt={service.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="py-20 px-4 md:px-8 bg-[#050505] relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold uppercase tracking-tight text-white mb-4 leading-none pb-2 pr-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 4rem)' }}>
            READY TO START YOUR{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #43D5E9, #7EF3FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              PROJECT?
            </span>
          </h2>
          <p className="font-body text-[#B8B8B8] text-base leading-relaxed mb-8 max-w-lg mx-auto">
            Contact us today for a free site survey and a no-obligation quote. Our experts are ready
            to deliver unbeatable results anywhere on the Isle of Man.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#43D5E9] text-black font-body font-semibold rounded-full transition-all duration-300 hover:bg-[#7EF3FF] hover:shadow-cyan text-base"
            >
              Request Free Quote <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+447624229993"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-body font-semibold rounded-full transition-all duration-300 hover:bg-white/10 text-base"
            >
              <Phone size={16} /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
