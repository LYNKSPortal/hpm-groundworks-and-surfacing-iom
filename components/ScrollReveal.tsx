'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const init = () => {
      // Collect two levels of children inside every section container
      const level1 = Array.from(
        document.querySelectorAll<HTMLElement>('section > div > *')
      );
      const level2 = Array.from(
        document.querySelectorAll<HTMLElement>('section > div > div > *')
      );

      // Any level1 element that has level2 children should be skipped —
      // we animate the children instead (gives per-card stagger on all pages)
      const level2Parents = new Set(level2.map((el) => el.parentElement));
      const targets = [
        ...level1.filter((el) => !level2Parents.has(el)),
        ...level2,
      ];

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add('sr-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.07, rootMargin: '0px 0px -40px 0px' }
      );

      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 40) {
          el.classList.add('sr-skip');
          return;
        }
        const siblings = Array.from(el.parentElement?.children ?? []);
        const idx = siblings.indexOf(el);
        el.style.transitionDelay = `${Math.min(idx * 80, 320)}ms`;
        el.classList.add('sr-hidden');
        observer.observe(el);
      });

      return observer;
    };

    const timer = setTimeout(() => {
      const obs = init();
      return () => obs.disconnect();
    }, 80);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
