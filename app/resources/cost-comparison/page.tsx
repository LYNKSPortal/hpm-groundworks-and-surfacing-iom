import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Hammer, Wrench, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: '20-Year Surfacing Cost Comparison | Resin vs Tarmac vs Paving',
  description:
    'Which driveway surface is cheapest long-term? Compare 20-year costs of resin bound gravel, tarmac, concrete and block paving. Expert analysis by HPM Groundworks Isle of Man.',
  keywords: [
    'resin driveway cost comparison Isle of Man',
    'resin vs tarmac cost',
    'driveway cost comparison IOM',
    'cheapest driveway surface long term',
    'resin bound value for money Isle of Man',
  ],
  alternates: {
    canonical: 'https://hpm.im/resources/cost-comparison',
  },
  openGraph: {
    title: '20-Year Driveway Cost Comparison | HPM Groundworks Isle of Man',
    description:
      'Compare the real long-term cost of resin bound, tarmac, concrete and block paving over 20 years. Isle of Man.',
    url: 'https://hpm.im/resources/cost-comparison',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Surfacing Cost Comparison Guide' }],
  },
  twitter: {
    title: '20-Year Driveway Cost Comparison | HPM Groundworks',
    description: 'Resin vs tarmac vs block paving — which is cheapest over 20 years? Find out from HPM Groundworks Isle of Man.',
    images: ['/images/og-image.png'],
  },
};

const surfaces = [
  {
    name: 'Resin Bound Gravel',
    subname: null,
    badge: 'Most Cost-Effective',
    highlight: true,
    rows: [
      { icon: <Hammer size={13} />, label: 'Initial Install', value: '£70/m²' },
      { icon: <Wrench size={13} />, label: 'Annual Maint.', value: '£1.50/m²' },
      { icon: <Calendar size={13} />, label: 'Major Repairs', value: 'Every 10 yrs' },
      { icon: <TrendingUp size={13} />, label: '20 Yr Maint.', value: '£30/m²' },
      { icon: <TrendingUp size={13} />, label: '20 Yr Repairs', value: '£19/m²' },
    ],
    total: '£119/m²',
  },
  {
    name: 'Tarmacadam',
    subname: '(Asphalt)',
    badge: null,
    highlight: false,
    rows: [
      { icon: <Hammer size={13} />, label: 'Initial Install', value: '£57/m²' },
      { icon: <Wrench size={13} />, label: 'Annual Maint.', value: '£2/m²' },
      { icon: <Calendar size={13} />, label: 'Major Repairs', value: '£20/m²' },
      { icon: <TrendingUp size={13} />, label: '20 Yr Maint.', value: '£40/m²' },
      { icon: <TrendingUp size={13} />, label: '20 Yr Repairs', value: '£40/m²' },
    ],
    total: '£137/m²',
  },
  {
    name: 'Concrete',
    subname: null,
    badge: null,
    highlight: false,
    rows: [
      { icon: <Hammer size={13} />, label: 'Initial Install', value: '£85/m²' },
      { icon: <Wrench size={13} />, label: 'Annual Maint.', value: '£2/m²' },
      { icon: <Calendar size={13} />, label: 'Major Repairs', value: '£15/m²' },
      { icon: <TrendingUp size={13} />, label: '20 Yr Maint.', value: '£40/m²' },
      { icon: <TrendingUp size={13} />, label: '20 Yr Repairs', value: '£30/m²' },
    ],
    total: '£155/m²',
  },
  {
    name: 'Block Paving',
    subname: null,
    badge: null,
    highlight: false,
    rows: [
      { icon: <Hammer size={13} />, label: 'Initial Install', value: '£100/m²' },
      { icon: <Wrench size={13} />, label: 'Annual Maint.', value: '£3/m²' },
      { icon: <Calendar size={13} />, label: 'Major Repairs', value: '£20/m²' },
      { icon: <TrendingUp size={13} />, label: '20 Yr Maint.', value: '£60/m²' },
      { icon: <TrendingUp size={13} />, label: '20 Yr Repairs', value: '£40/m²' },
    ],
    total: '£200/m²',
  },
];

const notes = [
  'Prices are averages for 2025 and should be confirmed for your specific location and project.',
  'Maintenance assumes regular cleaning and basic upkeep.',
  'Major repairs are estimated at two significant interventions over 20 years.',
  'Costs may vary based on site access, ground conditions, and material choices.',
];

export default function CostComparisonPage() {
  return (
    <>
      <PageHero
        title="20 YEAR"
        titleHighlight="COST COMPARISON"
        subtitle="It ticks the box Environmentally and Financially. Resin Bound Gravel 'wins' on what matters."
        dark
      />

      <section className="py-16 px-4 md:px-8 relative" style={{ background: 'linear-gradient(135deg, #09090B 0%, #10191D 100%)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-grid opacity-15" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(67,213,233,0.06) 0%, transparent 70%)' }} />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-body text-[#6B7280] hover:text-[#43D5E9] mb-10 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Resources
          </Link>

          {/* Header info card */}
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 mb-10">
            <div className="w-9 h-9 rounded-xl bg-[#43D5E9]/15 border border-[#43D5E9]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <TrendingUp size={18} className="text-[#43D5E9]" />
            </div>
            <div>
              <h2 className="font-heading font-bold uppercase tracking-tight text-white text-base mb-1">
                20-Year Lifetime Cost Comparison
              </h2>
              <p className="font-body text-sm text-[#B8B8B8] leading-relaxed">
                All costs are per square metre, excluding VAT. For a typical 50m² driveway, simply multiply by 50.
              </p>
            </div>
          </div>

          {/* 4-column comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {surfaces.map((s) => (
              <div
                key={s.name}
                className={`relative rounded-2xl p-5 flex flex-col border transition-all duration-200 ${
                  s.highlight
                    ? 'bg-[#0D1F24] border-[#43D5E9]/40 shadow-[0_0_40px_rgba(67,213,233,0.12)]'
                    : 'bg-white/5 border-white/10'
                }`}
              >
                {s.badge && (
                  <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#43D5E9] mb-3 w-fit">
                    <span className="text-[10px] font-body font-bold text-black uppercase tracking-wide">{s.badge}</span>
                  </div>
                )}
                <h3 className="font-heading font-bold uppercase tracking-tight text-white text-base leading-tight mb-0.5">
                  {s.name}
                </h3>
                {s.subname && (
                  <p className="font-body text-xs text-[#6B7280] italic mb-4">{s.subname}</p>
                )}
                {!s.subname && <div className="mb-4" />}

                <div className="flex flex-col gap-2.5 flex-1">
                  {s.rows.map((row) => (
                    <div key={row.label} className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#43D5E9] opacity-70">{row.icon}</span>
                        <span className="font-body text-xs text-[#8A8A8A]">{row.label}</span>
                      </div>
                      <span className="font-body text-xs font-semibold text-[#E0E0E0]">{row.value}</span>
                    </div>
                  ))}
                </div>

                <div className={`mt-5 pt-4 border-t ${s.highlight ? 'border-[#43D5E9]/25' : 'border-white/10'}`}>
                  <p className="font-body text-[10px] text-[#6B7280] uppercase tracking-widest mb-1">Total 20-Year Cost</p>
                  <p className={`font-heading font-bold text-3xl ${s.highlight ? 'text-[#43D5E9]' : 'text-white'}`}>
                    {s.total}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Important notes */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-10">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-lg bg-[#43D5E9]/15 flex items-center justify-center flex-shrink-0">
                <TrendingUp size={14} className="text-[#43D5E9]" />
              </div>
              <h3 className="font-heading font-bold uppercase tracking-tight text-white text-sm">
                Important Notes
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {notes.map((note) => (
                <li key={note} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-[#43D5E9] flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-[#B8B8B8]">{note}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#43D5E9] text-black font-body font-bold rounded-full transition-all duration-300 hover:bg-[#7EF3FF] hover:shadow-cyan hover:scale-105 text-sm"
            >
              Get Your Free Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
