'use client';

import { useState, useEffect } from 'react';
import { PoundSterling, Calendar, TrendingUp, Flame, Info, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const TERM_OPTIONS = [1, 3, 5, 10];

export default function FinanceCalculator() {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate] = useState(7);
  const [termIndex, setTermIndex] = useState(2); // default 5 years
  const [monthly, setMonthly] = useState<number | null>(null);

  const loanTerm = TERM_OPTIONS[termIndex];

  useEffect(() => {
    const principal = loanAmount;
    const rate = interestRate / 100 / 12;
    const payments = loanTerm * 12;
    if (principal > 0 && rate > 0 && payments > 0) {
      const m = (principal * (rate * Math.pow(1 + rate, payments))) / (Math.pow(1 + rate, payments) - 1);
      setMonthly(m);
    }
  }, [loanAmount, interestRate, loanTerm]);

  const fmt = (n: number) =>
    new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(n);

  const totalPaid = monthly ? monthly * loanTerm * 12 : 0;
  const totalInterest = totalPaid - loanAmount;
  const sliderPct = ((loanAmount - 1000) / (100000 - 1000)) * 100;
  const termPct = (termIndex / (TERM_OPTIONS.length - 1)) * 100;

  return (
    <section className="py-20 px-4 md:px-8 relative" style={{ background: 'linear-gradient(135deg, #09090B 0%, #10191D 100%)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(67,213,233,0.07) 0%, transparent 70%)' }} />
      </div>

      <div className="relative max-w-site mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#43D5E9]/10 border border-[#43D5E9]/20 mb-5">
            <PoundSterling size={14} className="text-[#43D5E9]" />
            <span className="text-xs font-body font-semibold text-[#43D5E9]">Finance Options</span>
          </div>
          <h2 className="font-heading font-bold uppercase tracking-tight text-white text-3xl md:text-4xl mb-3">
            Project <span className="text-[#43D5E9]">Finance Calculator</span>
          </h2>
          <p className="font-body text-[#B8B8B8] max-w-lg mx-auto text-sm">
            Estimate your monthly payments. Flexible financing available — get in touch to discuss options for your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* ── Controls ── */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col gap-7">

            {/* Loan Amount */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-body text-sm font-semibold text-white">Loan Amount</label>
                <span className="font-heading font-bold text-[#43D5E9] text-lg">{fmt(loanAmount)}</span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min={1000}
                  max={100000}
                  step={500}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #43D5E9 0%, #43D5E9 ${sliderPct}%, rgba(255,255,255,0.1) ${sliderPct}%, rgba(255,255,255,0.1) 100%)`,
                  }}
                />
              </div>
              <div className="flex justify-between text-xs font-body text-[#6B7280] mt-2">
                <span>£1,000</span><span>£100,000</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/8">
              <div>
                <p className="font-body text-sm font-semibold text-white">Interest Rate</p>
                <p className="font-body text-xs text-[#6B7280] mt-0.5">Representative APR (subject to approval)</p>
              </div>
              <span className="font-heading font-bold text-[#43D5E9] text-xl">{interestRate}%</span>
            </div>

            {/* Loan Term */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-body text-sm font-semibold text-white">Loan Term</label>
                <span className="font-heading font-bold text-[#43D5E9] text-lg">{loanTerm} {loanTerm === 1 ? 'Year' : 'Years'}</span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min={0}
                  max={TERM_OPTIONS.length - 1}
                  step={1}
                  value={termIndex}
                  onChange={(e) => setTermIndex(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #43D5E9 0%, #43D5E9 ${termPct}%, rgba(255,255,255,0.1) ${termPct}%, rgba(255,255,255,0.1) 100%)`,
                  }}
                />
              </div>
              <div className="flex justify-between text-xs font-body text-[#6B7280] mt-2">
                {TERM_OPTIONS.map((y) => <span key={y}>{y}yr</span>)}
              </div>
            </div>

            {/* Tips */}
            <div className="p-4 rounded-xl bg-[#43D5E9]/8 border border-[#43D5E9]/20">
              <div className="flex items-center gap-2 mb-3">
                <Info size={14} className="text-[#43D5E9]" />
                <p className="font-body text-xs font-semibold text-[#43D5E9] uppercase tracking-wide">Quick Tips</p>
              </div>
              <ul className="flex flex-col gap-2">
                {[
                  'Longer terms = lower monthly payments but more interest overall',
                  'This is an estimate — actual rates depend on credit profile',
                  'We can help connect you with flexible financing options',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#43D5E9] flex-shrink-0 mt-1.5" />
                    <span className="font-body text-xs text-[#B8B8B8]">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Results ── */}
          <div className="flex flex-col gap-4">
            {/* Monthly payment hero */}
            <div className="rounded-2xl p-7 text-center border border-[#43D5E9]/30 bg-[#0D1F24]" style={{ boxShadow: '0 0 40px rgba(67,213,233,0.10)' }}>
              <p className="font-body text-xs text-[#6B7280] uppercase tracking-widest mb-2">Estimated Monthly Payment</p>
              <p className="font-heading font-bold text-[#43D5E9] text-5xl mb-1">
                {monthly ? fmt(monthly) : '—'}
              </p>
              <p className="font-body text-xs text-[#6B7280]">
                Over {loanTerm} {loanTerm === 1 ? 'year' : 'years'} at {interestRate}% APR
              </p>
            </div>

            {/* Breakdown */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
              {[
                { icon: <PoundSterling size={15} />, label: 'Loan Amount', value: fmt(loanAmount), highlight: false },
                { icon: <Calendar size={15} />, label: 'Total Payments', value: `${loanTerm * 12} months`, highlight: false },
                { icon: <Flame size={15} />, label: 'Total Interest', value: monthly ? fmt(totalInterest) : '—', highlight: true },
                { icon: <TrendingUp size={15} />, label: 'Total Amount Paid', value: monthly ? fmt(totalPaid) : '—', highlight: false },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-3 pb-4 border-b border-white/6 last:pb-0 last:border-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[#43D5E9] opacity-70">{row.icon}</span>
                    <span className="font-body text-sm text-[#8A8A8A]">{row.label}</span>
                  </div>
                  <span className={`font-body text-sm font-semibold ${row.highlight ? 'text-orange-400' : 'text-white'}`}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/8">
              <Info size={14} className="text-[#43D5E9] flex-shrink-0 mt-0.5" />
              <p className="font-body text-xs text-[#6B7280] leading-relaxed">
                This calculator provides an estimate only. Actual rates and terms are subject to credit approval and may vary.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/contact#form"
              className="inline-flex items-center justify-center gap-2 w-full py-4 bg-[#43D5E9] text-black font-body font-bold rounded-full text-sm hover:bg-[#7EF3FF] hover:shadow-cyan transition-all duration-300"
            >
              Discuss Financing With Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
