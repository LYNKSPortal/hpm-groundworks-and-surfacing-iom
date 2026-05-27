import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for HPM Groundworks & Surfacing LTD — the terms governing use of our website and services.',
};

const sections = [
  {
    title: '1. Introduction',
    content:
      'These Terms of Service govern your use of the HPM Groundworks & Surfacing LTD website and services. By accessing our website or engaging our services, you agree to be bound by these terms.',
  },
  {
    title: '2. Services',
    content:
      'HPM Groundworks & Surfacing LTD provides groundworks, surfacing, civil engineering, and plant hire services. All work is subject to a separate written agreement or accepted quotation.',
  },
  {
    title: '3. Quotations',
    bullets: [
      'Quotations are free and provided without obligation.',
      'Quotes are valid for 30 days from the date of issue.',
      'Prices are subject to change after the validity period.',
      'We reserve the right to re-quote if site conditions differ materially from those assessed.',
    ],
  },
  {
    title: '4. Payment Terms',
    bullets: [
      'A deposit may be required to secure your project start date.',
      'Final payment is due upon completion of the works.',
      'All prices are exclusive of VAT unless otherwise stated.',
      'Late payments may incur interest charges.',
    ],
  },
  {
    title: '5. Client Responsibilities',
    bullets: [
      'Ensuring safe, unobstructed access to the work site.',
      'Providing accurate information about underground services or utilities.',
      'Obtaining any necessary permissions or permits prior to works commencing.',
    ],
  },
  {
    title: '6. Liability',
    content:
      'HPM Groundworks & Surfacing LTD carries comprehensive public liability insurance. Our liability for any claim is limited to the value of the contracted works. We are not liable for unforeseen subsurface conditions unless caused by our negligence.',
  },
  {
    title: '7. Warranties',
    content:
      'All works are carried out to industry standards. Any defects arising from our workmanship will be rectified at our cost within 12 months of completion, provided the surface has been maintained in accordance with our care and maintenance guidelines.',
  },
  {
    title: '8. Cancellation',
    content:
      'Projects cancelled by the client after acceptance of quotation may be subject to cancellation charges to cover preparatory costs incurred. We will provide written notice of any charges applicable.',
  },
  {
    title: '9. Intellectual Property',
    content:
      'All content on this website, including images, text, and design, is the property of HPM Groundworks & Surfacing LTD and is protected by applicable copyright laws. You may not reproduce or use any content without prior written consent.',
  },
  {
    title: '10. Governing Law',
    content:
      'These Terms are governed by the laws of the Isle of Man. Any disputes shall be subject to the exclusive jurisdiction of the courts of the Isle of Man.',
  },
  {
    title: '11. Changes to Terms',
    content:
      'We reserve the right to update these Terms of Service at any time. The current version will always be available on this page. Last updated: January 2025.',
  },
  {
    title: '12. Contact',
    content:
      'For any queries regarding these terms, contact us at jaye@hpm.im or write to 7 Brookfield Avenue, Ramsey, IM8 2AD, Isle of Man.',
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        title="TERMS OF"
        titleHighlight="SERVICE"
        subtitle="The terms governing use of our website and services."
      />
      <section className="py-16 px-4 md:px-8 bg-[#F7F7F7]">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-5">
            {sections.map((section) => (
              <div
                key={section.title}
                className="bg-white rounded-2xl border border-[#111111]/8 shadow-card p-6"
              >
                <h2 className="font-heading font-bold italic uppercase text-lg text-[#111111] tracking-tight mb-3">
                  {section.title}
                </h2>
                {'content' in section && section.content && (
                  <p className="font-body text-sm text-[#6B7280] leading-relaxed">{section.content}</p>
                )}
                {'bullets' in section && section.bullets && (
                  <ul className="flex flex-col gap-2">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#43D5E9] flex-shrink-0 mt-2" />
                        <span className="font-body text-sm text-[#6B7280]">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
