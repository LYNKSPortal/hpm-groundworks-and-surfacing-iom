import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Award,
  Users,
  Phone,
  MapPin,
  Zap,
  Clock,
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'HPM Groundworks & Surfacing LTD | Expert Groundworks Isle of Man',
  description:
    'Isle of Man\'s #1 groundworks & surfacing contractor. Resin bound driveways, tarmac, block paving, drainage & civil engineering. 500+ projects. Free site surveys. Call +44 7624 229993.',
  keywords: [
    'groundworks Isle of Man',
    'resin bound driveway Isle of Man',
    'tarmac driveway Isle of Man',
    'block paving Isle of Man',
    'surfacing contractor IOM',
    'driveway installer Isle of Man',
    'free driveway survey Isle of Man',
  ],
  alternates: {
    canonical: 'https://hpm.im',
  },
  openGraph: {
    title: 'HPM Groundworks & Surfacing LTD | Expert Groundworks Isle of Man',
    description:
      'Isle of Man\'s leading groundworks & surfacing contractor. Resin bound driveways, tarmac, paving, drainage. Free site surveys. 500+ projects completed.',
    url: 'https://hpm.im',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'HPM Groundworks & Surfacing — Isle of Man' }],
  },
  twitter: {
    title: 'HPM Groundworks & Surfacing LTD | Isle of Man',
    description: 'Resin bound driveways, tarmac, paving & groundworks across the Isle of Man. Free site surveys. 500+ projects completed.',
    images: ['/images/og-image.png'],
  },
};

const stats = [
  { value: '500+', label: 'Projects Completed', icon: <Award size={18} /> },
  { value: '5.0★', label: 'Average Rating', icon: <Star size={18} /> },
  { value: '15+', label: 'Years Experience', icon: <Users size={18} /> },
  { value: '100%', label: 'Fully Insured', icon: <Shield size={18} /> },
];

const whyChooseCards = [
  {
    icon: <Zap size={24} className="text-[#43D5E9]" />,
    title: 'Unbeatable Prices',
    desc: 'For all aspects of works.',
  },
  {
    icon: <Award size={24} className="text-[#43D5E9]" />,
    title: 'Industry Experts',
    desc: 'Groundworks & Civils.',
  },
  {
    icon: <CheckCircle size={24} className="text-[#43D5E9]" />,
    title: 'Free Surveys',
    desc: 'No obligation quotes.',
  },
  {
    icon: <Star size={24} className="text-[#43D5E9]" />,
    title: 'Superior Service',
    desc: '100% satisfaction.',
  },
];

const serviceCards = [
  {
    title: 'Groundworks & Civils',
    desc: 'Expert excavation, foundations, drainage, and civils for domestic and commercial projects.',
    img: '/images/civil-excavators.jpeg',
    alt: 'Excavator performing groundworks on site in Isle of Man',
    icon: <Zap size={22} />,
  },
  {
    title: 'Resin Bound & Tarmac',
    desc: 'Premium resin bound and tarmac driveways installed to the highest standard.',
    img: '/images/resin-driveway-1.jpeg',
    alt: 'Premium resin bound driveway surfacing in Isle of Man',
    icon: <Award size={22} />,
  },
  {
    title: 'Paving & Patios',
    desc: 'Beautiful outdoor living spaces created with high-quality paving stones.',
    img: '/images/block-paving-2.jpeg',
    alt: 'Premium patio paving installation in Isle of Man',
    icon: <CheckCircle size={22} />,
  },
];

const howItWorks = [
  { step: '01', title: 'Get in Touch', desc: 'Contact us for a free, no-obligation consultation.' },
  { step: '02', title: 'Site Survey', desc: 'We visit your site and provide an unbeatable quote.' },
  { step: '03', title: 'Expert Work', desc: 'Our skilled team completes the project to perfection.' },
  { step: '04', title: 'Aftercare', desc: 'We ensure you are 100% satisfied with the result.' },
];

const testimonials = [
  {
    text: 'If you need your driveway replaced/constructed these guys do a terrific job and in a timely fashion, highly recommended',
    author: 'John Crowe',
    source: 'Facebook Review',
  },
  {
    text: "Jaye and his team did a great job replacing our driveway. These lads are hard workers, polite and helpful. We are very pleased with the result and would definitely recommend. Cheers Jaye and the team 👍",
    author: 'Bill Mccann',
    source: 'Facebook Review',
  },
  {
    text: 'Jaye and the team did a magnificent job on our driveway today. Complete professionalism from start to finish, couldn\'t ask for more. If you want something like this done, HPM are your go-to guys!',
    author: 'Karen Peach',
    source: 'Facebook Review',
  },
];

const areas = [
  'Douglas', 'Ramsey', 'Peel', 'Castletown', 'Onchan', 'Port Erin',
  'Port St Mary', 'Laxey', 'Andreas', 'Arbory', 'Ballaugh', 'Braddan',
  'Bride', 'German', 'Jurby', 'Lezayre', 'Lonan', 'Malew',
  'Marown', 'Maughold', 'Michael', 'Patrick', 'Rushen', 'Santon',
  'Ayre', 'Garff', 'Glenfaba', 'Middle', 'Rushen Sheading', 'Michael Sheading',
];

const faqItems = [
  {
    question: 'Do you offer free quotes?',
    answer:
      'Yes! We offer completely free, no-obligation site surveys and quotes for all projects. Simply get in touch and we\'ll arrange a convenient time to visit your property.',
  },
  {
    question: 'What types of surfacing do you do?',
    answer:
      'We specialise in resin bound surfacing, tarmac/asphalt, block paving, Indian sandstone, porcelain tiles, and concrete. We cover driveways, patios, paths, car parks, and more.',
  },
  {
    question: 'Are you fully insured?',
    answer:
      'Yes, HPM Groundworks & Surfacing LTD carries full public liability insurance, employer\'s liability insurance, and all-risk contractors insurance. We are also Construction Isle of Man Accredited and VUBA Approved Installers.',
  },
  {
    question: 'How long does a new driveway take?',
    answer:
      'Installation times vary by size and type. A standard residential driveway typically takes 1-3 days. Larger or more complex projects may take longer. We\'ll give you a clear timeline during your free site survey.',
  },
  {
    question: 'Do you handle drainage?',
    answer:
      'Absolutely. We provide comprehensive drainage solutions including soakaways, French drains, inspection chambers, and pipe laying. Our resin bound surfaces are also SUDS-compliant, aiding natural drainage.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'HPM Groundworks & Surfacing LTD',
  url: 'https://hpm.im',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://hpm.im/?s={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <section className="relative min-h-screen flex flex-col justify-center w-full bg-[#050505]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/resin-hero.png"
            alt="Premium resin bound driveway surfacing — HPM Groundworks Isle of Man"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/55 via-[#050505]/45 to-[#050505]" />
        </div>

        <div className="relative z-10 w-full px-4 md:px-8 pt-32 pb-28 flex flex-col items-center text-center">
          {/* Pill label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 border border-white/15 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[#43D5E9] flex-shrink-0" />
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-white">
              UNBEATABLE PRICES • FREE SITE SURVEY
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-heading font-bold uppercase tracking-tight leading-none pb-2 mb-8"
            style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}
          >
            <span className="text-white">EXPERTS IN</span>
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #43D5E9, #7EF3FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              GROUNDWORKS
            </span>
            <br />
            <span className="text-white">& SURFACING</span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-base md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
            Delivering superior customer service and premium quality for commercial and domestic
            projects. We build the foundations of tomorrow.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#43D5E9] text-black font-body font-bold rounded-full transition-all duration-300 hover:bg-[#7EF3FF] hover:shadow-cyan hover:scale-105 text-base"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1C1C1C] border border-white/15 text-white font-body font-bold rounded-full transition-all duration-300 hover:bg-white/10 text-base"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-body text-[10px] text-white/40 uppercase tracking-[0.3em]">Scroll to Explore</span>
          <div className="w-6 h-9 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-white/50 animate-bounce" />
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F7] bg-grid-light py-12 px-4 md:px-8">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-5 border border-[#111111]/8 shadow-card text-center group hover:border-[#43D5E9]/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#43D5E9]/10 flex items-center justify-center mx-auto mb-3 text-[#43D5E9] group-hover:bg-[#43D5E9]/20 transition-colors">
                  {stat.icon}
                </div>
                <p className="font-heading font-bold text-2xl text-[#111111] mb-1">{stat.value}</p>
                <p className="font-body text-xs text-[#6B7280]">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center mt-6">
            {['Construction Isle of Man Accredited', 'VUBA Approved Installer'].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#111111]/10 shadow-card"
              >
                <div className="w-4 h-4 rounded-full bg-[#43D5E9]/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={10} className="text-[#43D5E9]" />
                </div>
                <span className="font-body text-xs font-semibold text-[#111111]">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white bg-grid-light">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Image with floating overlays */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                <Image
                  src="/images/fleet-vehicles.jpeg"
                  alt="HPM Groundworks fleet — Isle of Man"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Top-right floating badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#050505]/80 backdrop-blur-md border border-[#C5213E]/30 rounded-2xl px-4 py-2.5 shadow-glass">
                <div className="w-8 h-8 rounded-xl bg-[#C5213E]/20 flex items-center justify-center flex-shrink-0">
                  <Shield size={16} className="text-[#C5213E]" />
                </div>
                <div>
                  <p className="font-heading font-bold text-white text-xs uppercase tracking-wide leading-none">Fully</p>
                  <p className="font-heading font-bold text-[#43D5E9] text-xs uppercase tracking-wide leading-none mt-0.5">Insured</p>
                </div>
              </div>
              {/* Bottom floating card */}
              <div className="absolute bottom-4 left-4 right-16 bg-[#050505]/80 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-glass">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#43D5E9]/20 flex items-center justify-center flex-shrink-0">
                    <Star size={16} className="text-[#43D5E9]" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white text-sm uppercase tracking-tight">Unbeatable Prices</p>
                    <p className="font-body text-xs text-[#B8B8B8]">Without compromising on premium quality.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C5213E]/10 border border-[#C5213E]/20 mb-5">
                <Award size={13} className="text-[#C5213E]" />
                <span className="text-xs font-body font-semibold text-[#C5213E]">Award-Winning Service</span>
              </div>
              <h2 className="font-heading font-bold uppercase tracking-tight text-[#111111] mb-5 leading-none pb-2 pr-4" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3.5rem)' }}>
                WHY CHOOSE HPM{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #43D5E9, #7EF3FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  GROUNDWORKS?
                </span>
              </h2>
              <p className="font-body text-[#6B7280] text-base leading-relaxed mb-7">
                We are a trusted company delivering premium quality groundworks and surfacing for
                both commercial and domestic projects. Our commitment to superior customer service
                means we won&apos;t stop until you are 100% satisfied.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {whyChooseCards.map((card) => (
                  <div
                    key={card.title}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#111111]/8 shadow-card hover:border-[#43D5E9]/30 hover:shadow-[0_4px_20px_rgba(67,213,233,0.08)] transition-all duration-200"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#43D5E9]/10 flex items-center justify-center flex-shrink-0">
                      {card.icon}
                    </div>
                    <div>
                      <p className="font-heading font-bold uppercase text-sm text-[#111111] tracking-wide mb-1">{card.title}</p>
                      <p className="font-body text-sm text-[#6B7280]">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#43D5E9] text-black font-body font-semibold rounded-full transition-all duration-300 hover:bg-[#7EF3FF] hover:shadow-cyan hover:scale-105 text-sm"
              >
                Get Your Free Quote
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 relative" style={{ background: 'linear-gradient(135deg, #09090B 0%, #10191D 100%)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-grid opacity-15" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(67,213,233,0.07) 0%, rgba(5,5,5,0) 70%)' }} />
        </div>
        <div className="relative max-w-site mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C5213E]/10 border border-[#C5213E]/20 mb-5">
              <Zap size={13} className="text-[#C5213E]" />
              <span className="text-xs font-body font-semibold text-[#C5213E]">Expert Solutions</span>
            </div>
            <h2 className="font-heading font-bold uppercase tracking-tight text-white mb-4 leading-none pb-2 pr-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)' }}>
              OUR{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #43D5E9, #7EF3FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                SERVICES
              </span>
            </h2>
            <p className="font-body text-[#B8B8B8] text-base max-w-lg mx-auto">
              We specialise in all aspects of groundworks, surfacing, civils, and plant hire. No job
              is too big or too small.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className="relative overflow-hidden rounded-3xl group cursor-pointer h-[420px] border-2 border-transparent group-hover:border-[#43D5E9] transition-all duration-500 shadow-[0_8px_40px_rgba(0,0,0,0.3)] group-hover:shadow-[0_8px_40px_rgba(67,213,233,0.2)]"
              >
                <Image
                  src={card.img}
                  alt={card.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-black/30 to-transparent transition-opacity duration-500" />
                {/* Bottom panel */}
                <div className="absolute bottom-0 left-0 right-0 m-3 p-5 rounded-2xl bg-[#111111]/70 backdrop-blur-sm group-hover:bg-[#0a0a0a]/85 group-hover:backdrop-blur-md transition-all duration-500">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-full bg-[#43D5E9]/15 border border-[#43D5E9]/40 flex items-center justify-center text-[#43D5E9] mb-3 transition-all duration-300 group-hover:bg-[#43D5E9] group-hover:border-[#43D5E9] group-hover:text-black">
                    {card.icon}
                  </div>
                  <h3 className="font-heading font-bold uppercase text-lg text-white tracking-tight mb-1 leading-tight">
                    {card.title}
                  </h3>
                  {/* Description — hidden by default, revealed on hover */}
                  <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 mb-0 group-hover:mb-3">
                    <p className="font-body text-sm text-[#B8B8B8] leading-relaxed pt-1">{card.desc}</p>
                  </div>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-[#43D5E9] font-body text-xs font-semibold tracking-[0.15em] uppercase group-hover:gap-2.5 transition-all duration-200"
                  >
                    Explore Service <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#43D5E9] text-black font-body font-semibold rounded-full transition-all duration-300 hover:bg-[#7EF3FF] hover:shadow-cyan text-sm"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white bg-grid-light">
        <div className="max-w-site mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C5213E]/10 border border-[#C5213E]/20 mb-5">
              <Clock size={13} className="text-[#C5213E]" />
              <span className="text-xs font-body font-semibold text-[#C5213E]">Simple Process</span>
            </div>
            <h2 className="font-heading font-bold uppercase tracking-tight text-[#111111] mb-4 leading-none pb-2 pr-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)' }}>
              HOW IT{' '}
              <span style={{ background: 'linear-gradient(135deg, #43D5E9, #7EF3FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                WORKS
              </span>
            </h2>
            <p className="font-body text-[#6B7280] text-base max-w-lg mx-auto">
              A streamlined, transparent process from your first call to the final flawless finish.
            </p>
          </div>

          {/* Icon connector row */}
          <div className="relative flex items-center justify-between mb-10 px-8 md:px-16 lg:px-24">
            <div className="absolute top-1/2 left-8 right-8 md:left-16 md:right-16 lg:left-24 lg:right-24 h-px bg-gradient-to-r from-[#43D5E9]/20 via-[#43D5E9]/60 to-[#43D5E9]/20 -translate-y-1/2" />
            {[
              { icon: <Phone size={26} className="text-[#43D5E9]" />, n: '01' },
              { icon: <MapPin size={26} className="text-[#43D5E9]" />, n: '02' },
              { icon: <Zap size={26} className="text-[#43D5E9]" />, n: '03' },
              { icon: <Shield size={26} className="text-[#43D5E9]" />, n: '04' },
            ].map(({ icon, n }) => (
              <div key={n} className="relative z-10 flex flex-col items-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-white border-2 border-[#43D5E9]/40 shadow-[0_4px_20px_rgba(67,213,233,0.15)] rounded-2xl rotate-45 flex items-center justify-center">
                    <span className="-rotate-45">{icon}</span>
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-[#C5213E] rounded-full flex items-center justify-center text-white font-body font-bold text-[11px] leading-none">
                    {n}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Text cards row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {howItWorks.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 border border-[#111111]/8 shadow-card text-center hover:border-[#43D5E9]/30 transition-all duration-300"
              >
                <h3 className="font-heading font-bold uppercase text-lg text-[#111111] tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-base text-[#6B7280] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 relative" style={{ background: 'linear-gradient(135deg, #09090B 0%, #10191D 100%)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-grid opacity-15" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(67,213,233,0.07) 0%, rgba(5,5,5,0) 70%)' }} />
        </div>
        <div className="relative max-w-site mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold uppercase tracking-tight text-white mb-4 leading-none pb-2 pr-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)' }}>
              WHAT OUR{' '}
              <span style={{ background: 'linear-gradient(135deg, #43D5E9, #7EF3FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                CLIENTS SAY
              </span>
            </h2>
            <p className="font-body text-[#6B7280] text-base max-w-md mx-auto">
              Don&apos;t just take our word for it. Read what our satisfied customers have to say about our work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.author} className="relative pt-8">
                {/* Floating quote badge */}
                <div className="absolute top-0 right-5 w-14 h-14 bg-[#43D5E9] rounded-2xl flex items-center justify-center shadow-cyan z-10">
                  <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 22V13.4C0 11.4 0.4 9.53333 1.2 7.8C2.02667 6.04 3.13333 4.53333 4.52 3.28C5.93333 2.02667 7.54667 1.10667 9.36 0.52L10.96 2.96C9.41333 3.54667 8.10667 4.44 7.04 5.64C5.97333 6.81333 5.33333 8.18667 5.12 9.76H9.36V22H0ZM15.64 22V13.4C15.64 11.4 16.04 9.53333 16.84 7.8C17.6667 6.04 18.7733 4.53333 20.16 3.28C21.5733 2.02667 23.1867 1.10667 25 0.52L26.6 2.96C25.0533 3.54667 23.7467 4.44 22.68 5.64C21.6133 6.81333 20.9733 8.18667 20.76 9.76H25V22H15.64Z" fill="white"/>
                  </svg>
                </div>
                <div className="bg-[#18181B] border border-[#242427] rounded-2xl p-6 h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="#43D5E9" className="text-[#43D5E9]" />
                    ))}
                  </div>
                  <p className="font-body text-base text-white/90 leading-relaxed mb-7 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#43D5E9] to-[#1AABB8] flex items-center justify-center flex-shrink-0">
                      <span className="font-heading font-bold text-black text-base">{t.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-body font-bold text-base text-white">{t.author}</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#4267B2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        <p className="font-body text-xs text-[#6B7280]">{t.source}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Facebook CTA */}
          <div className="text-center mt-12">
            <p className="font-body text-[#6B7280] text-sm mb-4">
              If you&apos;d like to see more of our reviews, check out our Facebook page
            </p>
            <a
              href="https://www.facebook.com/highpressuremaintenance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#43D5E9] text-black font-body font-semibold rounded-full transition-all duration-300 hover:bg-[#7EF3FF] hover:shadow-cyan hover:scale-105 text-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="black"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              See More Reviews on Facebook
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-[#F7F7F7] bg-grid-light">
        <div className="max-w-site mx-auto">
          <div className="bg-white rounded-3xl border border-[#111111]/8 shadow-card p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C5213E]/10 border border-[#C5213E]/20 mb-6">
                  <MapPin size={13} className="text-[#C5213E]" />
                  <span className="text-xs font-body font-semibold text-[#C5213E]">Isle of Man Coverage</span>
                </div>
                <h2 className="font-heading font-bold uppercase tracking-tight text-[#111111] leading-none pb-2 pr-4 mb-5" style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)' }}>
                  AREAS WE<br />
                  <span style={{ background: 'linear-gradient(135deg, #43D5E9, #7EF3FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    COVER
                  </span>
                </h2>
                <p className="font-body text-[#6B7280] text-sm leading-relaxed mb-7">
                  Based at 7 Brookfield Avenue, Ramsey, IM8 2AD, Isle of Man, we provide our expert groundworks and surfacing services across the entire island. We are fully equipped to handle both domestic and commercial projects anywhere on the island.
                </p>
                <div className="grid grid-cols-3 gap-2 mb-8 max-h-52 overflow-y-auto pr-1">
                  {areas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg bg-[#F7F7F7] border border-[#111111]/8 hover:border-[#43D5E9]/30 hover:bg-[#43D5E9]/5 transition-all duration-200"
                    >
                      <MapPin size={11} className="text-[#43D5E9] flex-shrink-0" />
                      <span className="font-body text-xs text-[#111111] leading-tight">{area}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#43D5E9] text-black font-body font-semibold rounded-full transition-all duration-300 hover:bg-[#7EF3FF] hover:shadow-cyan text-sm"
                >
                  Check Availability <ArrowRight size={15} />
                </Link>
              </div>

              {/* Right — map */}
              <div className="relative rounded-2xl overflow-hidden" style={{ height: '420px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187152.41!2d-4.5!3d54.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b51dc06df28b9%3A0x6ca8f5acef944c1!2sIsle%20of%20Man!5e0!3m2!1sen!2suk!4v1622548282764!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Isle of Man map"
                />
                {/* Floating card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 shadow-card flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#43D5E9] flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-black" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-[#111111] uppercase tracking-tight">Fast Response Time</p>
                    <p className="font-body text-xs text-[#6B7280]">We are ready to deploy our teams to your site quickly and efficiently.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-[#F7F7F7] bg-grid-light">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Left */}
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#43D5E9]/10 border border-[#43D5E9]/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#43D5E9]" />
                <span className="text-xs font-body font-semibold text-[#43D5E9]">Got Questions?</span>
              </div>
              <h2 className="font-heading font-bold uppercase tracking-tight text-[#111111] leading-none pb-2 pr-4 mb-5" style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)' }}>
                FREQUENTLY<br />ASKED<br />
                <span style={{ background: 'linear-gradient(135deg, #43D5E9, #7EF3FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  QUESTIONS
                </span>
              </h2>
              <p className="font-body text-[#6B7280] text-base leading-relaxed mb-8">
                Everything you need to know about our services, pricing, and processes. Can&apos;t find the answer you&apos;re looking for?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#43D5E9] text-black font-body font-semibold rounded-full transition-all duration-300 hover:bg-[#7EF3FF] hover:shadow-cyan text-sm"
              >
                Contact Our Team <ArrowRight size={15} />
              </Link>
            </div>
            {/* Right */}
            <div>
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
