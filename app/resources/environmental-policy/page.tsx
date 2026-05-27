import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Leaf, CheckCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Environmental Policy',
  description:
    'HPM Groundworks & Surfacing LTD Environmental Policy — our commitment to responsible, sustainable working practices.',
};

const sections = [
  {
    title: 'Introduction',
    img: '/images/resin-driveway-1.jpeg',
    content: 'HPM Groundworks & Surfacing LTD is committed to minimising our environmental impact and promoting sustainability in all aspects of our groundwork and surfacing operations, with a focus on the installation of resin bound gravel driveways and paths.',
  },
  {
    title: 'Policy Objectives',
    img: '/images/civil-excavators.jpeg',
    bullets: [
      'Compliance with all relevant environmental legislation',
      'Responsible sourcing of materials',
      'Use of recycled and sustainable aggregates where possible',
      'Use of low-VOC resins where possible',
      'Reduction of waste through precise material ordering',
    ],
  },
  {
    title: 'Waste Management',
    img: '/images/civil-groundworks.jpeg',
    bullets: [
      'Segregate waste into appropriate streams (recyclable, general, hazardous)',
      'Recycle materials wherever feasible',
      'Dispose of all waste responsibly and legally',
    ],
  },
  {
    title: 'Pollution Prevention',
    img: '/images/groundworks-drainage.jpeg',
    bullets: [
      'Prevent contamination of soil, water, and air',
      'Store chemicals, resins, and fuels in secure, contained areas',
      'Respond quickly and effectively to any spills or incidents',
    ],
  },
  {
    title: 'Energy and Water Use',
    img: '/images/fleet-vehicles.jpeg',
    bullets: [
      'Use plant and equipment efficiently to minimise fuel consumption',
      'Reduce unnecessary water use on site',
      'Maintain equipment to ensure optimal efficiency',
    ],
  },
  {
    title: 'Wildlife and Habitat Protection',
    img: '/images/block-paving-1.jpeg',
    bullets: [
      'Respect local habitats and minimise disturbance to wildlife',
      'Avoid scheduling operations during sensitive ecological periods where possible',
    ],
  },
  {
    title: 'Continuous Improvement',
    img: '/images/block-paving-commercial.jpeg',
    content: 'We are committed to continually improving our environmental performance. This includes reviewing this policy annually, setting measurable targets, and communicating progress to all staff and stakeholders.',
  },
  {
    title: 'Implementation & Responsibility',
    img: '/images/depot.jpeg',
    content: 'All directors, employees, and subcontractors are responsible for implementing this policy within their areas of work. The Managing Director holds overall responsibility for environmental performance.',
  },
];

export default function EnvironmentalPolicyPage() {
  return (
    <>
      <PageHero
        title="ENVIRONMENTAL"
        titleHighlight="POLICY"
        subtitle="Our commitment to responsible working practices and a sustainable future."
        dark
      />

      <section className="py-16 px-4 md:px-8 bg-white bg-grid-light">
        <div className="max-w-site mx-auto">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-body text-[#6B7280] hover:text-[#43D5E9] mb-12 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Resources
          </Link>

          <div className="flex flex-col divide-y divide-[#111111]/6">
            {sections.map((section, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={section.title} className="py-16">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center`}>
                    {/* Image */}
                    <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                      <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-[0_8px_40px_rgba(0,0,0,0.1)] border border-[#111111]/8">
                        <Image
                          src={section.img}
                          alt={section.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                      <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-7 h-7 rounded-lg bg-[#43D5E9]/10 flex items-center justify-center flex-shrink-0">
                          <Leaf size={14} className="text-[#43D5E9]" />
                        </div>
                        <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-[#43D5E9]">
                          Environmental Policy
                        </span>
                      </div>
                      <h2 className="font-heading font-bold uppercase tracking-tight text-[#111111] mb-5 leading-none" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                        {section.title}
                      </h2>
                      {'content' in section && section.content && (
                        <p className="font-body text-[#6B7280] text-base leading-relaxed">{section.content}</p>
                      )}
                      {'bullets' in section && section.bullets && (
                        <ul className="flex flex-col gap-3">
                          {section.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-3">
                              <CheckCircle size={16} className="text-[#43D5E9] flex-shrink-0 mt-0.5" />
                              <span className="font-body text-base text-[#6B7280] leading-relaxed">{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
