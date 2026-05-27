'use client';

import { useRef } from 'react';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

type Section = {
  title: string;
  icon?: React.ReactNode;
  content?: string;
  intro?: string;
  bullets?: string[];
  items?: { label: string; desc: string }[];
};

function SectionCard({ section }: { section: Section }) {
  return (
    <div className="bg-white rounded-2xl border border-[#111111]/8 shadow-card p-6">
      <h2 className="font-heading font-bold uppercase tracking-tight text-[#111111] text-lg mb-4">
        {section.title}
      </h2>
      {section.content && (
        <p className="font-body text-sm text-[#6B7280] leading-relaxed">{section.content}</p>
      )}
      {section.intro && (
        <p className="font-body text-sm text-[#6B7280] mb-3">{section.intro}</p>
      )}
      {section.items && (
        <div className="flex flex-col gap-3">
          {section.items.map((item) => (
            <div key={item.label}>
              <p className="font-body font-semibold text-sm text-[#111111] mb-0.5">{item.label}</p>
              <p className="font-body text-sm text-[#6B7280]">{item.desc}</p>
            </div>
          ))}
        </div>
      )}
      {section.bullets && (
        <ul className="flex flex-col gap-2">
          {section.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <CheckCircle size={14} className="text-[#43D5E9] flex-shrink-0 mt-0.5" />
              <span className="font-body text-sm text-[#6B7280]">{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function HealthSafetyTimeline({ sections }: { sections: Section[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 85%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="relative">
      {/* Background track — centred on the 48px dot column = 50% of container */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#43D5E9]/15 -translate-x-1/2" />

      {/* Animated fill line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 overflow-hidden">
        <motion.div
          className="w-full bg-[#43D5E9] origin-top"
          style={{ height: lineHeight }}
        />
      </div>

      <div className="flex flex-col">
        {sections.map((section, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={section.title} className="mb-10">
              {/* Desktop: 3-col grid — left | dot | right */}
              <div className="hidden md:grid items-center" style={{ gridTemplateColumns: '1fr 64px 1fr' }}>

                {/* Left slot */}
                <div className="pr-8">
                  {isLeft ? (
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <SectionCard section={section} />
                    </motion.div>
                  ) : <div />}
                </div>

                {/* Centre dot — naturally centred in the middle column */}
                <div className="relative z-10 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.4, ease: 'backOut', delay: 0.15 }}
                  >
                    <div className="p-1.5 rounded-full bg-white mx-auto w-fit">
                      <div className="w-9 h-9 rounded-full bg-white border-2 border-[#43D5E9] flex items-center justify-center text-[#43D5E9]">
                        {section.icon ?? <div className="w-3 h-3 rounded-full bg-[#43D5E9]" />}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right slot */}
                <div className="pl-8">
                  {!isLeft ? (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <SectionCard section={section} />
                    </motion.div>
                  ) : <div />}
                </div>
              </div>

              {/* Mobile — full width */}
              <div className="md:hidden">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <SectionCard section={section} />
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
