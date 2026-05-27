import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Sparkles, HeartHandshake, ArrowRight, Phone } from 'lucide-react';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Our Suppliers',
  description:
    'HPM Groundworks & Surfacing LTD partners with VUBA — industry leaders in premium resin bound surfacing materials and technical support.',
};

const whyVubaCards = [
  {
    icon: <Shield size={22} className="text-[#43D5E9]" />,
    title: '15 Year Guarantee',
    desc: 'Unmatched durability and peace of mind.',
  },
  {
    icon: <Sparkles size={22} className="text-[#43D5E9]" />,
    title: 'Premium Aesthetics',
    desc: 'Stunning finishes that elevate any property.',
  },
  {
    icon: <HeartHandshake size={22} className="text-[#43D5E9]" />,
    title: 'Expert Support',
    desc: 'Full technical backing for flawless installations.',
  },
];

const blends = [
  {
    name: 'Kilimanjaro',
    desc: 'A stunning blend of warm earth tones, perfect for natural settings.',
    img: '/images/blend-kilimanjaro.webp',
  },
  {
    name: 'Bison Ranch',
    desc: 'Rich, deep colours that provide a striking contrast and elegant finish.',
    img: '/images/blend-bison-ranch.webp',
  },
  {
    name: 'Bellagio',
    desc: 'A luxurious mix of light and dark aggregates for a premium look.',
    img: '/images/blend-bellagio.webp',
  },
  {
    name: 'St Kitts',
    desc: 'Bright, coastal-inspired tones that bring spaces to life.',
    img: '/images/blend-st-kitts.webp',
  },
];

export default function SuppliersPage() {
  return (
    <>
      <PageHero
        title="OUR"
        titleHighlight="SUPPLIER"
        subtitle="Partnering with the industry's best to deliver uncompromising quality, stunning aesthetics, and guaranteed durability for every project."
      />

      {/* Why VUBA */}
      <section className="py-20 px-4 md:px-8 bg-white bg-grid-light">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="w-6 h-px bg-[#43D5E9]" />
                <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-[#43D5E9]">Our Partner</span>
              </div>
              <h2 className="font-heading font-bold uppercase tracking-tight text-[#111111] mb-5 leading-none pb-2" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}>
                WHY{' '}
                <span style={{ background: 'linear-gradient(135deg, #43D5E9, #7EF3FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  VUBA?
                </span>
              </h2>
              <p className="font-body text-[#6B7280] text-base leading-relaxed mb-8">
                After extensive research, HPM chose to partner with Vuba — a long-established
                industry leader supplying premium materials for our resin installations.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {whyVubaCards.map((card) => (
                  <div
                    key={card.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#F7F7F7] border border-[#111111]/8 hover:border-[#43D5E9]/30 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#43D5E9]/10 flex items-center justify-center flex-shrink-0">
                      {card.icon}
                    </div>
                    <div>
                      <p className="font-body font-semibold text-base text-[#111111]">{card.title}</p>
                      <p className="font-body text-sm text-[#6B7280]">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#43D5E9] text-black font-body font-semibold rounded-full transition-all duration-300 hover:bg-[#7EF3FF] hover:shadow-cyan hover:scale-105 text-sm"
              >
                Enquire About VUBA <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-[#111111]/8">
              <video
                src="https://hpm.im/wp-content/uploads/2025/07/d37e02d5062841ad84555eaea77d78fe.HD-1080p-7.2Mbps-20172608.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover block"
                style={{ maxHeight: '560px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                <blockquote className="font-body text-sm text-white leading-relaxed">
                  &ldquo;Providing not just quality materials, but the technical support to ensure
                  longevity.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top VUBA Picks — dark gradient section */}
      <section className="py-20 px-4 md:px-8 relative" style={{ background: 'linear-gradient(135deg, #09090B 0%, #10191D 100%)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-grid opacity-15" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(67,213,233,0.07) 0%, rgba(5,5,5,0) 70%)' }} />
        </div>
        <div className="relative max-w-site mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C5213E]/10 border border-[#C5213E]/20 mb-5">
              <span className="text-xs font-body font-semibold text-[#C5213E]">Premium Selection</span>
            </div>
            <h2 className="font-heading font-bold uppercase tracking-tight text-white leading-none pb-2 mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)' }}>
              HPM&apos;S TOP VUBA PICKS FOR{' '}
              <span style={{ background: 'linear-gradient(135deg, #43D5E9, #7EF3FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                2026!
              </span>
            </h2>
            <p className="font-body text-[#B8B8B8] text-base max-w-lg mx-auto">
              We offer an extensive selection of exclusive aggregate blends. Explore our
              favourites for 2026 and find the perfect match to elevate your property&apos;s aesthetic.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {blends.map((blend) => (
              <div
                key={blend.name}
                className="relative overflow-hidden rounded-2xl group cursor-pointer aspect-[3/4] border border-white/8 hover:border-[#43D5E9]/40 transition-all duration-300 shadow-[0_8px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_40px_rgba(67,213,233,0.15)]"
              >
                <Image
                  src={blend.img}
                  alt={`${blend.name} resin bound aggregate blend`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-heading font-bold uppercase text-sm text-white tracking-widest">
                    {blend.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* View Our Samples — light section */}
      <section className="py-20 px-4 md:px-8 bg-[#F7F7F7] bg-grid-light">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C5213E]/10 border border-[#C5213E]/20 mb-6">
                <span className="text-xs font-body font-semibold text-[#C5213E]">Supplier Standards</span>
              </div>
              <h2 className="font-heading font-bold uppercase tracking-tight text-[#111111] leading-none pb-2 mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}>
                VIEW OUR{' '}
                <span style={{ background: 'linear-gradient(135deg, #43D5E9, #7EF3FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  SAMPLES
                </span>
              </h2>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#111111]/8 shadow-card mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#43D5E9]/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles size={20} className="text-[#43D5E9]" />
                </div>
                <div>
                  <p className="font-body font-bold text-sm text-[#111111] uppercase tracking-wide mb-1">Premium-Sourced Materials</p>
                  <p className="font-body text-sm text-[#6B7280]">Marble, Granite, Quartz & Basalt — sourced from the finest quarries across Europe, Ireland & the UK.</p>
                </div>
              </div>
              <p className="font-body text-[#6B7280] text-base leading-relaxed mb-8">
                With the largest selection available on the island, we guarantee you&apos;ll find
                the perfect match for your project. Just speak with Jaye to arrange a viewing.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#43D5E9] text-black font-body font-semibold rounded-full transition-all duration-300 hover:bg-[#7EF3FF] hover:shadow-cyan hover:scale-105 text-sm"
                >
                  Request a Sample Viewing <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:+447624229993"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#111111]/20 text-[#111111] font-body font-semibold rounded-full transition-all duration-300 hover:bg-[#111111] hover:text-white text-sm"
                >
                  <Phone size={16} /> Call Jaye Directly
                </a>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden aspect-square shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-[#111111]/8">
              <Image
                src="/images/blends-showcase.webp"
                alt="VUBA premium resin bound aggregate blends showcase"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
