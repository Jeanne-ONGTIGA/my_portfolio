'use client';

import { useEffect, useRef, useState } from 'react';
import { getTestimonials } from '@/lib/translations';
import { Reveal } from '@/components/reveal';
import { LuStar, LuQuote, LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { cn } from '@/lib/utils';
import { useI18n } from '@/components/language-provider';

export function Testimonials() {
  const { lang, t } = useI18n();
  const testimonials = getTestimonials(lang);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - perView);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  const goTo = (i: number) => setIndex(Math.max(0, Math.min(i, maxIndex)));
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  return (
    <section id="testimonials" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-dots opacity-[0.3] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {t.ui.testimonials.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t.ui.testimonials.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.ui.testimonials.subtitle}
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="relative mt-14">
            <div className="overflow-hidden" ref={trackRef}>
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
              >
                {testimonials.map((tm) => (
                  <div
                    key={tm.name}
                    className="shrink-0 px-3"
                    style={{ width: `${100 / perView}%` }}
                  >
                    <figure className="relative h-full rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-float-lg">
                      <LuQuote className="absolute right-5 top-5 h-10 w-10 text-primary/15" />

                      <div className="flex items-center gap-1 text-warning">
                        {Array.from({ length: tm.rating }).map((_, s) => (
                          <LuStar key={s} className="h-4 w-4 fill-warning" />
                        ))}
                      </div>

                      <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                        &ldquo;{tm.quote}&rdquo;
                      </blockquote>

                      <figcaption className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4">
                        <img
                          /*src={}
                          alt={tm.name}
                          className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/20"
                          loading="lazy" */
                        />
                        <div>
                          <p className="font-display text-sm font-semibold">{tm.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {tm.role} · {tm.company}
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </div>

            {maxIndex > 0 && (
              <div className="mt-8 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  disabled={index === 0}
                  aria-label={t.ui.testimonials.prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card/50 text-foreground transition-all hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <LuChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex items-center gap-1.5">
                  {Array.from({ length: maxIndex + 1 }).map((_, d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => goTo(d)}
                      aria-label={`${t.ui.testimonials.dotAria} ${d + 1}`}
                      className={cn(
                        'h-2 rounded-full transition-all duration-300',
                        index === d ? 'w-6 bg-primary' : 'w-2 bg-border hover:bg-muted-foreground/50'
                      )}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={next}
                  disabled={index === maxIndex}
                  aria-label={t.ui.testimonials.next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card/50 text-foreground transition-all hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <LuChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
