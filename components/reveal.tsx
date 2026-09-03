'use client';

import { useEffect, useRef } from 'react';

/**
 * Reveal wrapper: adds the `.reveal` / `.reveal-scale` class to children
 * and toggles `.is-visible` when the element scrolls into view.
 * Pass `variant="scale"` for a scale-in effect and `delay` 1–5 for stagger.
 */
type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'up' | 'scale';
  delay?: 1 | 2 | 3 | 4 | 5;
  as?: 'div' | 'section' | 'li' | 'article' | 'span' | 'h1' | 'h2' | 'p';
};

export function Reveal({
  children,
  className = '',
  variant = 'up',
  delay,
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const base = variant === 'scale' ? 'reveal-scale' : 'reveal';
  const delayClass = delay ? ` reveal-delay-${delay}` : '';

  return (
    // @ts-expect-error — dynamic tag with ref
    <Tag ref={ref} className={`${base}${delayClass} ${className}`}>
      {children}
    </Tag>
  );
}
