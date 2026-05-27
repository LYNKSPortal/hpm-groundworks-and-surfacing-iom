import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Resin Bound Surface Care & Maintenance Guide',
  description:
    'Complete care and maintenance guide for resin bound driveways and paths. Cleaning tips, seasonal care, what to avoid — from HPM Groundworks & Surfacing Isle of Man.',
  keywords: [
    'resin bound driveway maintenance',
    'how to clean resin driveway Isle of Man',
    'resin bound surface care guide',
    'driveway maintenance tips IOM',
  ],
  alternates: {
    canonical: 'https://hpm.im/resources/care-maintenance',
  },
  openGraph: {
    title: 'Resin Bound Surface Care & Maintenance Guide | HPM Groundworks',
    description:
      'How to look after your resin bound driveway or path. Cleaning, seasonal care and maintenance tips from HPM Groundworks Isle of Man.',
    url: 'https://hpm.im/resources/care-maintenance',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Resin Bound Care & Maintenance Guide' }],
  },
  twitter: {
    title: 'Resin Driveway Care & Maintenance Guide | HPM Groundworks',
    description: 'Keep your resin bound driveway looking its best. Expert care tips from HPM Groundworks Isle of Man.',
    images: ['/images/og-image.jpg'],
  },
};

const alternatingSections = [
  {
    title: 'Introduction',
    label: 'Getting Started',
    content:
      'Thank you for choosing HPM Groundworks & Surfacing LTD for your resin bound gravel installation. With proper care, your new driveway or path will remain attractive and durable for many years. Following these simple guidelines will protect your investment.',
    img: '/images/resin-driveway-1.jpeg',
    imgAlt: 'Completed resin bound driveway',
    imageLeft: true,
  },
  {
    title: 'General Care',
    label: 'Day to Day',
    bullets: [
      'Sweep regularly with a stiff broom to remove loose debris.',
      'Wash with a pressure washer on fan setting — max 150 bar / 2,200 psi, nozzle at least 200mm from surface.',
      'Avoid a concentrated jet directly on the resin surface.',
      'Clean spills immediately with warm soapy water and a soft brush.',
      'Avoid harsh chemicals or solvents.',
    ],
    img: '/images/resin-path.jpeg',
    imgAlt: 'Sweeping a resin bound path',
    imageLeft: false,
  },
  {
    title: 'Weed & Moss Prevention',
    label: 'Plant Growth',
    bullets: [
      'Remove weeds by hand or use a water-based weed killer.',
      'Treat shaded or damp areas with a proprietary moss or algae remover.',
      'Apply a suitable sealant to help resist biological growth.',
      'Avoid solvents or acids — these can damage the resin binder.',
    ],
    img: '/images/resin-garden.jpeg',
    imgAlt: 'Resin bound garden surface',
    imageLeft: true,
  },
  {
    title: 'Winter Care',
    label: 'Cold Weather',
    bullets: [
      'Use a plastic shovel or soft brush to clear snow — avoid metal shovels.',
      'Use non-corrosive de-icing salts where possible.',
      'Avoid rock salt where possible as it can cause surface damage over time.',
      'Sweep away residue when conditions improve.',
    ],
    img: '/images/tarmac-1.jpeg',
    imgAlt: 'Winter driveway maintenance',
    imageLeft: false,
  },
  {
    title: 'Heavy Loads & Usage',
    label: 'Vehicle Use',
    bullets: [
      'The surface is suitable for standard cars and light vehicles.',
      'Avoid heavy vehicles, skip lorries, and sharp or pointed objects.',
      'Use protective pads under heavy planters or garden furniture.',
      'Avoid turning on the spot — drive straight on and off where possible.',
    ],
    img: '/images/van-site.jpeg',
    imgAlt: 'HPM fleet vehicle on a resin driveway',
    imageLeft: true,
  },
];

const checklist = [
  'Sweep regularly',
  'Wash every few months',
  'Remove stains promptly',
  'Treat weeds and moss as required',
  'Inspect for any damage or lifting',
  'Contact HPM for repairs or advice',
];

export default function CareMaintenancePage() {
  return (
    <>
      <PageHero
        title="CARE &"
        titleHighlight="MAINTENANCE"
        subtitle="Preserving the beauty and longevity of your premium resin bound surfaces."
      />

      <section className="bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto pt-10 pb-4">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-body text-[#6B7280] hover:text-[#43D5E9] transition-colors"
          >
            <ArrowLeft size={16} /> Back to Resources
          </Link>
        </div>

        {/* Alternating sections */}
        {alternatingSections.map((s, i) => (
          <div
            key={s.title}
            className={`max-w-5xl mx-auto py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
              i < alternatingSections.length - 1 ? 'border-b border-[#111111]/6' : ''
            }`}
          >
            {/* Image — conditionally first or last */}
            <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] shadow-card ${s.imageLeft ? 'md:order-1' : 'md:order-2'}`}>
              <Image src={s.img} alt={s.imgAlt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#43D5E9]" />
              </div>
            </div>

            {/* Text */}
            <div className={s.imageLeft ? 'md:order-2' : 'md:order-1'}>
              <span className="inline-block text-xs font-body font-semibold text-[#43D5E9] uppercase tracking-widest border-b-2 border-[#43D5E9] pb-0.5 mb-4">
                {s.label}
              </span>
              <h2 className="font-heading font-bold uppercase tracking-tight text-[#111111] mb-4" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                {s.title}
              </h2>
              {'content' in s && s.content && (
                <p className="font-body text-sm text-[#6B7280] leading-relaxed">{s.content}</p>
              )}
              {'bullets' in s && s.bullets && (
                <ul className="flex flex-col gap-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle size={15} className="text-[#43D5E9] flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-[#6B7280]">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Maintenance Checklist + CTA */}
      <section className="py-16 px-4 md:px-8 bg-[#F7F7F7] bg-grid-light">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Checklist card */}
            <div className="bg-white rounded-2xl border border-[#111111]/8 shadow-card p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#43D5E9]/10 border border-[#43D5E9]/20 mb-5">
                <span className="text-xs font-body font-semibold text-[#43D5E9]">Annual Reminder</span>
              </div>
              <h3 className="font-heading font-bold uppercase tracking-tight text-[#111111] text-xl mb-6">
                Maintenance Checklist
              </h3>
              <ul className="flex flex-col gap-3 mb-8">
                {checklist.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-[#43D5E9] flex-shrink-0" />
                    <span className="font-body text-sm text-[#6B7280]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#43D5E9] text-black font-body font-semibold rounded-full text-sm hover:bg-[#7EF3FF] hover:shadow-cyan transition-all duration-300"
              >
                Contact Us <ArrowRight size={15} />
              </Link>
            </div>

            {/* Worker image */}
            <div className="relative rounded-2xl overflow-hidden min-h-[300px]">
              <Image
                src="/images/civil-groundworks.jpeg"
                alt="HPM Groundworks team on site"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-heading font-bold uppercase text-white text-lg tracking-tight mb-1">Need a Repair?</p>
                <p className="font-body text-sm text-white/80 mb-4">We offer repair services and are always happy to advise on any issues.</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#43D5E9] text-black font-body font-semibold rounded-full text-sm hover:bg-[#7EF3FF] transition-all duration-300"
                >
                  Contact HPM <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
