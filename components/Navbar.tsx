'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Insurance', href: '/insurance' },
  { label: 'Resources', href: '/resources' },
  { label: 'Our Suppliers', href: '/suppliers' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8"
      >
        <div
          className={cn(
            'max-w-site mx-auto rounded-full px-6 py-3 transition-all duration-300',
            scrolled
              ? 'bg-white shadow-glass border border-[#111111]/8'
              : 'bg-white border border-[#111111]/8 shadow-glass'
          )}
        >
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="HPM Groundworks & Surfacing LTD"
                width={120}
                height={48}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-3 py-1.5 rounded-full text-xs font-body font-medium transition-all duration-200',
                    pathname === link.href
                      ? 'bg-[#111111] text-white'
                      : 'text-[#111111]/70 hover:text-[#111111] hover:bg-black/5'
                  )}
                >
                  {pathname === link.href && (
                    <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C5213E]" />
                  )}
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#43D5E9] text-black text-xs font-body font-semibold rounded-full transition-all duration-300 hover:bg-[#7EF3FF] hover:shadow-cyan hover:scale-105"
              >
                Get a Free Quote
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-black/5 transition-colors"
                aria-label="Toggle menu"
              >
                <span className="text-xs font-body font-bold text-[#111111] tracking-widest">MENU</span>
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] lg:hidden"
            style={{ background: 'linear-gradient(135deg, #09090B 0%, #10191D 100%)' }}
          >
            {/* Subtle radial glow */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(67,213,233,0.08) 0%, transparent 70%)' }} />

            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Close menu"
            >
              <X size={22} className="text-white" />
            </button>

            {/* Logo top-left */}
            <div className="absolute top-5 left-6">
              <Image
                src="/images/logo.png"
                alt="HPM Groundworks"
                width={100}
                height={40}
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </div>

            {/* Nav items */}
            <div className="flex flex-col items-center justify-center h-full gap-2 px-8 pt-16 pb-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                  className="w-full max-w-xs"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'flex items-center justify-between w-full px-5 py-4 rounded-2xl font-heading font-bold uppercase tracking-tight text-lg transition-all duration-200',
                      pathname === link.href
                        ? 'bg-[#43D5E9] text-black'
                        : 'bg-white/5 text-white hover:bg-white/10'
                    )}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <span className="w-2 h-2 rounded-full bg-black flex-shrink-0" />
                    )}
                  </Link>
                </motion.div>
              ))}

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: navLinks.length * 0.05 + 0.05 }}
                className="w-full max-w-xs mt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full px-5 py-4 rounded-2xl bg-[#43D5E9] text-black font-heading font-bold uppercase tracking-tight text-lg hover:bg-[#7EF3FF] transition-all duration-200"
                >
                  Get a Free Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
