import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Insurance', href: '/insurance' },
  { label: 'Resources', href: '/resources' },
  { label: 'Our Suppliers', href: '/suppliers' },
  { label: 'Contact', href: '/contact' },
];

const services = [
  { label: 'Groundworks & Construction', href: '/services' },
  { label: 'Driveway Surfacing', href: '/services' },
  { label: 'Tarmac & Resin Bound', href: '/services' },
  { label: 'Paving & Patios', href: '/services' },
  { label: 'Drainage & Haulage', href: '/services' },
];

export default function Footer() {
  return (
    <footer
      className="text-white relative"
      style={{ background: 'linear-gradient(135deg, #09090B 0%, #10191D 100%)' }}
    >
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C5213E] to-transparent" />
      <div className="relative max-w-site mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="HPM Groundworks & Surfacing LTD"
                width={140}
                height={56}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="font-body text-sm text-[#B8B8B8] leading-relaxed mb-5">
              Experts in Groundworks, Surfacing, Civils & Plant. Delivering superior quality and
              unbeatable prices for all aspects of works.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#B8B8B8] hover:text-white hover:bg-[#1877F2]/20 hover:border-[#1877F2]/40 transition-all duration-200"
              >
                <Facebook size={15} className="text-[#1877F2]" />
                <span className="font-body text-xs font-semibold">Facebook</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[#B8B8B8] hover:text-[#43D5E9] transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#43D5E9]/50 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="font-body text-sm text-[#B8B8B8] hover:text-[#43D5E9] transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#43D5E9]/50 flex-shrink-0" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#43D5E9]/10 border border-[#43D5E9]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#43D5E9]/20 transition-colors">
                    <Phone size={14} className="text-[#43D5E9]" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-[#6B7280] mb-0.5">Phone</p>
                    <p className="font-body text-sm text-[#B8B8B8] group-hover:text-[#43D5E9] transition-colors">
                      {siteConfig.phone}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#43D5E9]/10 border border-[#43D5E9]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#43D5E9]/20 transition-colors">
                    <Mail size={14} className="text-[#43D5E9]" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-[#6B7280] mb-0.5">Email</p>
                    <p className="font-body text-sm text-[#B8B8B8] group-hover:text-[#43D5E9] transition-colors">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#43D5E9]/10 border border-[#43D5E9]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={14} className="text-[#43D5E9]" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-[#6B7280] mb-0.5">Address</p>
                    <p className="font-body text-sm text-[#B8B8B8]">
                      {siteConfig.address.full}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#43D5E9]/10 border border-[#43D5E9]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={14} className="text-[#43D5E9]" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-[#6B7280] mb-0.5">Hours</p>
                    <p className="font-body text-xs text-[#B8B8B8]">Mon–Fri: 8:00AM–5:00PM</p>
                    <p className="font-body text-xs text-[#B8B8B8]">Sat: 10:00AM–2:00PM</p>
                    <p className="font-body text-xs text-[#6B7280]">Sun: Closed</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#242427] pt-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="h-14 w-auto rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/images/gallery-24.jpeg"
                alt="Construction Isle of Man Accredited"
                width={120}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </div>
            <div className="h-14 w-auto rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/images/gallery-09.jpeg"
                alt="VUBA Approved Installer"
                width={120}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl">
              <div className="w-6 h-6 rounded bg-[#43D5E9]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#43D5E9] text-[10px] font-bold">✓</span>
              </div>
              <span className="font-body text-xs font-semibold text-[#B8B8B8] tracking-wide">Fully Insured</span>
            </div>
          </div>
          <div className="border-t border-[#242427] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-[#6B7280] text-center md:text-left">
              © 2026 HPM Groundworks & Surfacing LTD. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy-policy"
                className="font-body text-xs text-[#6B7280] hover:text-[#43D5E9] transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-white/20">|</span>
              <Link
                href="/terms-of-service"
                className="font-body text-xs text-[#6B7280] hover:text-[#43D5E9] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
