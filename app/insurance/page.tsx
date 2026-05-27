import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, CheckCircle, ArrowRight, FileText } from 'lucide-react';
import ImageLightbox from '@/components/ImageLightbox';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Insurance & Accreditation',
  description:
    'HPM Groundworks & Surfacing LTD is 100% fully insured. Public liability, employer\'s liability & all-risk contractors insurance. VUBA approved and Construction Isle of Man accredited.',
  keywords: [
    'insured groundworks contractor Isle of Man',
    'public liability insurance Isle of Man contractor',
    'accredited surfacing company Isle of Man',
    'fully insured driveway installer IOM',
  ],
  alternates: {
    canonical: 'https://hpm.im/insurance',
  },
  openGraph: {
    title: 'Insurance & Accreditation | HPM Groundworks Isle of Man',
    description:
      '100% fully insured. Public liability, employer\'s liability & all-risk contractors insurance. VUBA approved and Construction Isle of Man accredited.',
    url: 'https://hpm.im/insurance',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'HPM Groundworks — Fully Insured & Accredited' }],
  },
  twitter: {
    title: 'Insurance & Accreditation | HPM Groundworks Isle of Man',
    description: '100% fully insured groundworks contractor. VUBA approved installer. Isle of Man.',
    images: ['/images/og-image.png'],
  },
};

const coverItems = [
  'Full Public Liability Insurance',
  'Employer\'s Liability Insurance',
  'All Risk Contractors Insurance',
  'Fully Accredited & Approved Installers',
];

const certificates = [
  {
    title: 'Employers\' Liability Insurance Certificate',
    desc: 'Protecting our workforce and your peace of mind on every project.',
    icon: <FileText size={24} className="text-[#43D5E9]" />,
  },
  {
    title: 'Contractors Combined Insurance Certificate',
    desc: 'Comprehensive coverage for all groundworks and surfacing operations.',
    icon: <Shield size={24} className="text-[#43D5E9]" />,
  },
];

const accreditations = [
  'Construction Isle of Man Accredited',
  'VUBA Approved Installer',
];

export default function InsurancePage() {
  return (
    <>
      <PageHero
        title="YOUR PEACE OF MIND"
        titleHighlight="GUARANTEED"
        subtitle="We carry comprehensive public liability insurance, ensuring that every project we undertake is fully protected from start to finish."
      />

      <section className="py-20 px-4 md:px-8 bg-white bg-grid-light">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#43D5E9]" />
              <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-[#43D5E9]">
                Full Protection
              </span>
              <span className="w-6 h-px bg-[#43D5E9]" />
            </div>
            <h2 className="font-heading font-bold uppercase tracking-tight text-[#111111] mb-5 leading-none pb-2 pr-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 4rem)' }}>
              COMPREHENSIVE{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #43D5E9, #7EF3FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                COVERAGE
              </span>
            </h2>
            <p className="font-body text-[#6B7280] text-base leading-relaxed max-w-2xl mx-auto">
              When you choose HPM Groundworks & Surfacing LTD, you&apos;re choosing a professional
              team that takes risk management seriously. Our comprehensive insurance policies cover
              all aspects of our groundworks, surfacing, and civil engineering projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {coverItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 p-5 rounded-2xl bg-[#F7F7F7] border border-[#111111]/8 hover:border-[#43D5E9]/30 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#43D5E9]/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={20} className="text-[#43D5E9]" />
                </div>
                <span className="font-body font-semibold text-base text-[#111111]">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                className="bg-white rounded-2xl border border-[#111111]/10 shadow-card p-6 hover:border-[#43D5E9]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#43D5E9]/10 border border-[#43D5E9]/20 flex items-center justify-center mb-4">
                  {cert.icon}
                </div>
                <h3 className="font-heading font-bold uppercase text-base text-[#111111] tracking-tight mb-2">
                  {cert.title}
                </h3>
                <p className="font-body text-base text-[#6B7280] leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>

          {/* Insurance providers */}
          <div className="mb-12">
            <p className="text-center text-xs font-body font-semibold tracking-[0.2em] uppercase text-[#6B7280] mb-6">Our Insurance Providers</p>
            <div className="flex flex-wrap justify-center gap-6">
              <ImageLightbox src="/images/insurance/avia-insurance.png" alt="Avia Insurance Certificate" />
              <ImageLightbox src="/images/insurance/zurich-insurance.jpg" alt="Zurich Insurance Certificate" />
            </div>
          </div>

          <div className="bg-[#050505] rounded-3xl p-8 text-center relative">
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              <div className="absolute inset-0 bg-grid opacity-20" />
            </div>
            <div className="relative">
              <h3 className="font-heading font-bold uppercase text-2xl text-white tracking-tight mb-5">
                ACCREDITATIONS
              </h3>
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                {accreditations.map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-[#43D5E9]/30"
                  >
                    <CheckCircle size={14} className="text-[#43D5E9]" />
                    <span className="font-body text-base font-semibold text-white">{badge}</span>
                  </div>
                ))}
              </div>
              <p className="font-body text-[#B8B8B8] text-base mb-6 max-w-md mx-auto">
                Want to verify our credentials or ask about our insurance? Get in touch and we&apos;ll
                be happy to provide documentation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#43D5E9] text-black font-body font-semibold rounded-full transition-all duration-300 hover:bg-[#7EF3FF] hover:shadow-cyan text-base"
              >
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
