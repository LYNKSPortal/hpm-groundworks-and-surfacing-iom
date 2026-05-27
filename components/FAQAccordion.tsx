'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  dark?: boolean;
}

export default function FAQAccordion({ items, dark = false }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            'rounded-2xl border overflow-hidden transition-all duration-300',
            dark
              ? openIndex === index
                ? 'border-[#43D5E9]/50 bg-white/5 shadow-lg'
                : 'border-white/10 bg-white/5 hover:border-[#43D5E9]/30 hover:shadow-md'
              : openIndex === index
                ? 'border-[#43D5E9]/50 bg-white shadow-lg'
                : 'border-[#111111]/10 bg-white shadow-sm hover:shadow-md hover:border-[#43D5E9]/30'
          )}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left group"
            aria-expanded={openIndex === index}
          >
            <span
              className={cn(
                'font-body font-bold text-base md:text-lg transition-colors',
                dark
                  ? openIndex === index ? 'text-[#43D5E9]' : 'text-white group-hover:text-[#43D5E9]'
                  : openIndex === index ? 'text-[#111111]' : 'text-[#111111] group-hover:text-[#43D5E9]'
              )}
            >
              {item.question}
            </span>
            <ChevronDown
              size={18}
              className={cn(
                'flex-shrink-0 transition-transform duration-200',
                openIndex === index ? 'rotate-180' : '',
                dark ? 'text-[#43D5E9]' : 'text-[#43D5E9]'
              )}
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <div
                  className={cn(
                    'px-6 pb-6 font-body text-base leading-relaxed',
                    dark ? 'text-[#B8B8B8]' : 'text-[#6B7280]'
                  )}
                >
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
