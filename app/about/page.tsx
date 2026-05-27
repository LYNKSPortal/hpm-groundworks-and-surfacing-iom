import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Star, CheckCircle, Wrench, Package, Cpu } from 'lucide-react';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about HPM Groundworks & Surfacing LTD — your trusted Isle of Man groundworks and surfacing specialists. Expert craftsmanship, unbeatable prices, free surveys.',
};

const coreValues = [
  { icon: <Award size={20} className="text-[#43D5E9]" />, title: 'Expert Craftsmanship', desc: 'Highest standards in surfacing & civils' },
  { icon: <Star size={20} className="text-[#43D5E9]" />, title: 'Superior Service', desc: 'Customer satisfaction is our priority' },
  { icon: <CheckCircle size={20} className="text-[#43D5E9]" />, title: 'Unbeatable Prices', desc: 'Premium quality without the premium price tag' },
  { icon: <CheckCircle size={20} className="text-[#43D5E9]" />, title: 'Reliable Timelines', desc: 'We deliver on time, every time' },
];

const whyCards = [
  {
    icon: <Cpu size={22} className="text-[#43D5E9]" />,
    title: 'Expert Knowledge',
    desc: 'Our team consists of highly trained professionals with deep expertise in all aspects of groundworks and surfacing.',
  },
  {
    icon: <Package size={22} className="text-[#43D5E9]" />,
    title: 'Premium Materials',
    desc: 'We only source the highest quality tarmac, resin, and paving materials to ensure a durable and stunning finish.',
  },
  {
    icon: <Wrench size={22} className="text-[#43D5E9]" />,
    title: 'Fully Equipped',
    desc: 'From mini-diggers to heavy plant machinery, we own and operate the best equipment for the job.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="ABOUT HPM"
        titleHighlight="GROUNDWORKS"
        subtitle="Your trusted partners in groundworks, surfacing, civils, and plant hire. Delivering excellence on every project."
      />

      <section className="py-20 px-4 md:px-8 bg-white bg-grid-light">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-px bg-[#43D5E9]" />
                <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-[#43D5E9]">
                  Our Story
                </span>
              </div>
              <h2 className="font-heading font-bold uppercase tracking-tight text-[#111111] mb-5 leading-none pb-2 pr-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 4rem)' }}>
                BUILT ON QUALITY{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #43D5E9, #7EF3FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  AND TRUST
                </span>
              </h2>
              <p className="font-body text-[#6B7280] text-base leading-relaxed mb-4">
                At HPM Groundworks & Surfacing LTD, we pride ourselves on delivering superior
                customer service and unbeatable prices for all aspects of works. With years of
                experience in the industry, our team of experts handles everything from domestic
                driveways to large-scale commercial civils.
              </p>
              <p className="font-body text-[#6B7280] text-base leading-relaxed mb-8">
                We understand that every project is unique, which is why we offer free site surveys
                and no-obligation quotes to ensure we meet your exact requirements and budget.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreValues.map((v) => (
                  <div
                    key={v.title}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F7F7] border border-[#111111]/8 hover:border-[#43D5E9]/30 transition-all duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#43D5E9]/10 flex items-center justify-center flex-shrink-0">
                      {v.icon}
                    </div>
                    <div>
                      <p className="font-body font-semibold text-base text-[#111111]">{v.title}</p>
                      <p className="font-body text-sm text-[#6B7280]">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/depot.jpeg"
                  alt="HPM Groundworks depot and fleet Isle of Man"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#050505] border border-white/10 rounded-2xl p-5 shadow-glass">
                <p className="font-heading font-bold text-[#C5213E] text-3xl">15+</p>
                <p className="font-body text-white text-xs mt-1">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-[#F7F7F7] bg-grid-light">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left — photo card */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(67,213,233,0.2)] border-2 border-[#43D5E9]/30">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/jaye-on-bike.jpg"
                    alt="Jaye Birchall — Managing Director, HPM Groundworks & Surfacing LTD"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-[#050505]/80 backdrop-blur-sm">
                  <p className="font-body font-bold text-white text-base">Jaye Birchall</p>
                  <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#43D5E9] mt-0.5">Managing Director</p>
                </div>
              </div>
            </div>
            {/* Right — text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C5213E]/10 border border-[#C5213E]/20 mb-6">
                <span className="text-xs font-body font-semibold text-[#C5213E]">Leadership</span>
              </div>
              <h2 className="font-heading font-bold uppercase tracking-tight leading-none pb-2 mb-4" style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}>
                <span className="text-[#111111]">MEET THE</span><br />
                <span style={{ background: 'linear-gradient(135deg, #43D5E9, #7EF3FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  FOUNDER
                </span>
              </h2>
              <p className="font-heading font-bold uppercase tracking-widest text-[#111111] text-base mb-6">
                Jaye Birchall
              </p>
              <div className="space-y-4 border-l-2 border-[#43D5E9] pl-5">
                <p className="font-body text-[#6B7280] text-base leading-relaxed">
                  Jaye Birchall founded HPM Groundworks &amp; Surfacing LTD with a vision to deliver
                  unmatched quality and reliability in the groundworks and surfacing industry.
                </p>
                <p className="font-body text-[#6B7280] text-base leading-relaxed">
                  Under his leadership, the company has grown into a trusted name, known for its
                  dedication to superior craftsmanship, unbeatable prices, and a customer-first
                  approach. Jaye&apos;s hands-on expertise ensures that every project, from domestic
                  driveways to commercial civils, meets the highest standards of excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-[#050505] relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>
        <div className="relative max-w-site mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold uppercase tracking-tight text-white leading-none pb-2 pr-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 4rem)' }}>
              WHY CHOOSE US
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#43D5E9]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#43D5E9]/10 border border-[#43D5E9]/20 flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="font-heading font-bold uppercase text-lg text-white tracking-tight mb-3">
                  {card.title}
                </h3>
                <p className="font-body text-base text-[#B8B8B8] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#43D5E9] text-black font-body font-semibold rounded-full transition-all duration-300 hover:bg-[#7EF3FF] hover:shadow-cyan hover:scale-105 text-base"
            >
              Get a Free Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
