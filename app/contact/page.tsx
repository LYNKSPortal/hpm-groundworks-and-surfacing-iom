import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import FinanceCalculator from '@/components/FinanceCalculator';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with HPM Groundworks & Surfacing LTD for a free site survey and quote. Call +44 7624 229993 or fill in our contact form.',
};

const contactDetails = [
  {
    icon: <Phone size={20} className="text-[#43D5E9]" />,
    label: 'Phone',
    value: '+44 7624 229993',
    href: 'tel:+447624229993',
  },
  {
    icon: <Mail size={20} className="text-[#43D5E9]" />,
    label: 'Email',
    value: 'jaye@hpm.im',
    href: 'mailto:jaye@hpm.im',
  },
  {
    icon: <MapPin size={20} className="text-[#43D5E9]" />,
    label: 'Address',
    value: '7 Brookfield Avenue, Ramsey, IM8 2AD, Isle of Man',
    href: null,
  },
  {
    icon: <Clock size={20} className="text-[#43D5E9]" />,
    label: 'Hours',
    value: 'Mon–Fri: 7:00am – 6:00pm\nSat: 8:00am – 4:00pm',
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="GET IN"
        titleHighlight="TOUCH"
        subtitle="Ready to start your project? Contact us for a free, no-obligation site survey and quote."
      />

      <section className="py-16 px-4 md:px-8 bg-[#F7F7F7]">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl border border-[#111111]/8 shadow-card p-7 md:p-10">
                <h2 className="font-heading font-bold uppercase text-2xl text-[#111111] tracking-tight mb-2">
                  Send Us a Message
                </h2>
                <p className="font-body text-base text-[#6B7280] mb-8">
                  Fill in the form below and we&apos;ll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl border border-[#111111]/8 shadow-card p-5 hover:border-[#43D5E9]/30 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#43D5E9]/10 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-body text-sm text-[#6B7280] mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-body font-semibold text-base text-[#111111] hover:text-[#43D5E9] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-body font-semibold text-base text-[#111111] whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-[#050505] rounded-2xl p-5 border border-white/10">
                <p className="font-heading font-bold uppercase text-base text-white tracking-tight mb-2">
                  FREE SITE SURVEY
                </p>
                <p className="font-body text-base text-[#B8B8B8] leading-relaxed">
                  We offer free, no-obligation site surveys for all projects across the Isle of Man.
                  Just get in touch to book yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FinanceCalculator />
    </>
  );
}
