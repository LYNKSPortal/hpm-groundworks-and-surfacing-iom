'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setVisible(true);
    setFadeOut(false);
    setProgress(0);

    const duration = 1400;
    const interval = 20;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const eased = Math.min(100, Math.round((1 - Math.pow(1 - current / steps, 3)) * 100));
      setProgress(eased);

      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => setFadeOut(true), 100);
        setTimeout(() => setVisible(false), 700);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(160deg, #f0f6f7 0%, #e8f4f6 50%, #f4f9fa 100%)',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.6s ease',
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      <div
        style={{
          transform: fadeOut ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 0.6s ease',
        }}
        className="flex flex-col items-center"
      >
        <Image
          src="/images/logo.png"
          alt="HPM Groundworks & Surfacing LTD"
          width={220}
          height={88}
          className="object-contain mb-12"
          priority
        />

        {/* Progress bar track */}
        <div className="w-64 h-px bg-[#43D5E9]/20 relative overflow-hidden rounded-full">
          <div
            className="absolute left-0 top-0 h-full bg-[#43D5E9] rounded-full transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p
          className="mt-5 text-[11px] font-body font-semibold tracking-[0.35em] uppercase text-[#6B7280]"
        >
          Loading Experience
        </p>
      </div>
    </div>
  );
}
