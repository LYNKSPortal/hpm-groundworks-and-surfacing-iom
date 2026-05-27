'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

interface Props {
  src: string;
  alt: string;
}

export default function ImageLightbox({ src, alt }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const lightbox = open && mounted ? createPortal(
    <div
      style={{
        position: 'fixed',
        inset: 0,
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 999999,
        backgroundColor: 'rgba(0,0,0,0.93)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
      onClick={() => setOpen(false)}
    >
      {/* Close button */}
      <button
        onClick={() => setOpen(false)}
        style={{ position: 'absolute', top: 20, right: 20, zIndex: 1000000 }}
        className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
      >
        <X size={22} />
      </button>

      {/* Image */}
      <div
        style={{ position: 'relative', maxWidth: '1200px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={1800}
          className="w-auto h-auto max-w-full max-h-[92vh] object-contain rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.8)]"
          priority
        />
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="relative w-[400px] max-w-full bg-white rounded-2xl border border-[#111111]/8 shadow-card overflow-hidden cursor-zoom-in group"
      >
        <div className="relative w-full aspect-[3/4]">
          <Image src={src} alt={alt} fill className="object-contain" />
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-200 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 rounded-full p-3">
            <ZoomIn size={20} className="text-white" />
          </div>
        </div>
      </div>

      {lightbox}
    </>
  );
}
