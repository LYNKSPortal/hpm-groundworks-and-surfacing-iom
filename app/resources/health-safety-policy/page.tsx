import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText, Users, AlertTriangle, HardHat, Shield, Phone, Leaf, BookOpen } from 'lucide-react';
import PageHero from '@/components/PageHero';
import HealthSafetyTimeline from '@/components/HealthSafetyTimeline';

export const metadata: Metadata = {
  title: 'Health & Safety Policy',
  description:
    'HPM Groundworks & Surfacing LTD Health & Safety Policy — safe working practices for resin bound gravel installation, tarmac surfacing, groundworks and civils across the Isle of Man.',
  alternates: {
    canonical: 'https://hpm.im/resources/health-safety-policy',
  },
  openGraph: {
    title: 'Health & Safety Policy | HPM Groundworks Isle of Man',
    description:
      'Our health and safety policy for resin bound gravel, tarmac surfacing and groundworks projects across the Isle of Man.',
    url: 'https://hpm.im/resources/health-safety-policy',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'HPM Groundworks Health & Safety Policy' }],
  },
  twitter: {
    title: 'Health & Safety Policy | HPM Groundworks Isle of Man',
    description: 'HPM Groundworks health & safety commitment for all groundworks and surfacing projects on the Isle of Man.',
    images: ['/images/og-image.jpg'],
  },
};

const sections = [
  {
    title: 'Policy Statement',
    icon: <FileText size={16} />,
    content:
      'HPM Groundworks & Surfacing LTD is committed to providing a safe and healthy environment for all employees, contractors, clients, and the public during the preparation and installation of resin bound gravel driveways and paths. We strive to prevent accidents, injuries, and ill health by adhering to all relevant legislation and best practices.',
  },
  {
    title: 'Responsibilities',
    icon: <Users size={16} />,
    items: [
      { label: 'Management', desc: 'Responsible for implementing, maintaining, and reviewing health and safety procedures. Ensures all staff are trained and equipped for safe working.' },
      { label: 'Employees', desc: 'Must follow all health and safety instructions, use PPE as required, and report hazards or incidents immediately.' },
      { label: 'Subcontractors', desc: "Required to comply with HPM's health and safety standards and site rules." },
    ],
  },
  {
    title: 'Risk Assessment',
    icon: <AlertTriangle size={16} />,
    intro: 'We identify and assess the following hazards on all sites:',
    bullets: [
      'Manual handling of heavy materials',
      'Use of machinery and tools',
      'Exposure to chemicals',
      'Slips, trips, and falls',
      'Noise and dust exposure',
    ],
  },
  {
    title: 'Safe Working Practices',
    icon: <HardHat size={16} />,
    bullets: [
      'Site Preparation — clearing and securing the work area before operations begin',
      'Manual Handling — use of mechanical aids and correct lifting techniques',
      'Machinery & Tools — pre-use inspections and operator training',
      'Chemical Safety — COSHH assessments, correct storage and disposal',
      'Surface Preparation & Laying — follow manufacturer guidelines at all times',
    ],
  },
  {
    title: 'Personal Protective Equipment',
    icon: <Shield size={16} />,
    bullets: [
      'High-visibility clothing',
      'Safety boots',
      'Gloves',
      'Eye protection',
      'Dust masks or respirators',
    ],
  },
  {
    title: 'Emergency Procedures',
    icon: <Phone size={16} />,
    bullets: [
      'First aid kits are available on all sites.',
      'Emergency contact numbers are displayed on site.',
      'All accidents, injuries, and near misses must be reported.',
      'Fire extinguishers are available where required.',
    ],
  },
  {
    title: 'Environmental Considerations',
    icon: <Leaf size={16} />,
    bullets: [
      'Prevent contamination of drains and watercourses.',
      'Dispose of waste materials responsibly.',
    ],
  },
  {
    title: 'Training & Communication',
    icon: <BookOpen size={16} />,
    content:
      'All employees receive health and safety induction and task-specific training. Toolbox talks are held regularly. This policy is reviewed annually and communicated to all staff and subcontractors.',
  },
];

export default function HealthSafetyPage() {
  return (
    <>
      <PageHero
        title="HEALTH &"
        titleHighlight="SAFETY"
        subtitle="Preparation & Installation of Resin Bound Gravel Driveways and Paths"
      />

      <section className="py-16 px-4 md:px-8 bg-[#F7F7F7] bg-grid-light">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-body text-[#6B7280] hover:text-[#43D5E9] mb-14 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Resources
          </Link>

          <HealthSafetyTimeline sections={sections} />
        </div>
      </section>
    </>
  );
}
