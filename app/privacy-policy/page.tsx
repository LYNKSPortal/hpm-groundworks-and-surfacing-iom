import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for HPM Groundworks & Surfacing LTD — how we collect, use, and protect your personal data.',
  alternates: {
    canonical: 'https://hpm.im/privacy-policy',
  },
  robots: {
    index: false,
    follow: false,
  },
};

const sections = [
  {
    title: '1. Introduction',
    content:
      'HPM Groundworks & Surfacing LTD ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal data when you visit our website or contact us for our services.',
  },
  {
    title: '2. Data We Collect',
    bullets: [
      'Name, email address, phone number, and address when you contact us or request a quote.',
      'Project details and files you share with us.',
      'Website usage data via cookies and analytics tools.',
    ],
  },
  {
    title: '3. How We Use Your Data',
    bullets: [
      'To respond to your enquiries and provide quotes.',
      'To deliver the services you have requested.',
      'To improve our website and services.',
      'To comply with legal obligations.',
    ],
  },
  {
    title: '4. Data Sharing',
    content:
      'We do not sell or rent your personal data. We may share your data with trusted third-party service providers who assist us in operating our business (e.g. email hosting), subject to confidentiality agreements. We will not disclose your data unless required by law.',
  },
  {
    title: '5. Data Retention',
    content:
      'We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Enquiry data is typically retained for 2 years.',
  },
  {
    title: '6. Your Rights',
    bullets: [
      'The right to access your personal data.',
      'The right to rectify inaccurate data.',
      'The right to erasure of your data.',
      'The right to restrict or object to processing.',
      'The right to data portability.',
    ],
  },
  {
    title: '7. Cookies',
    content:
      'Our website uses essential cookies to function correctly. We may also use analytics cookies to understand how visitors use our site. You can control cookie settings in your browser.',
  },
  {
    title: '8. Security',
    content:
      'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or destruction.',
  },
  {
    title: '9. Contact',
    content:
      'If you have questions about this policy or wish to exercise your rights, please contact us at: jaye@hpm.im or 7 Brookfield Avenue, Ramsey, IM8 2AD, Isle of Man.',
  },
  {
    title: '10. Changes to This Policy',
    content:
      'We may update this Privacy Policy from time to time. The latest version will always be available on this page. Last updated: January 2025.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="PRIVACY"
        titleHighlight="POLICY"
        subtitle="How HPM Groundworks & Surfacing LTD collects, uses, and protects your personal data."
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
