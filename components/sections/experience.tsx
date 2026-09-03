'use client';

import { getExperiences } from '@/lib/translations';
import { Reveal } from '@/components/reveal';
import { LuBriefcase, LuMapPin, LuCircle } from 'react-icons/lu';
import { cn } from '@/lib/utils';
import { useI18n } from '@/components/language-provider';

export function Experience() {
  const { lang, t } = useI18n();
  const experiences = getExperiences(lang);

  return (
    <section id="experience" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {t.ui.experience.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t.ui.experience.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.ui.experience.subtitle}
          </p>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={`${exp.company}-${exp.period}`} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div
                    className={cn(
                      'relative grid gap-4 sm:grid-cols-2 sm:gap-8',
                      isLeft ? '' : 'sm:[direction:rtl]'
                    )}
                  >
                    <div className={cn('sm:[direction:ltr]', isLeft ? 'sm:text-right' : '')}>
                      <div className="rounded-2xl border border-border/60 bg-card/50 p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-float">
                        <div
                          className={cn(
                            'flex items-center gap-2',
                            isLeft ? 'sm:justify-end' : ''
                          )}
                        >
                          {exp.current && (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-2.5 py-0.5 text-xs font-medium text-success">
                              <LuCircle className="h-2.5 w-2.5 fill-success" />
                              {t.ui.experience.current}
                            </span>
                          )}
                          <span className="font-mono text-xs text-muted-foreground">
                            {exp.period}
                          </span>
                        </div>
                        <h3 className="mt-2 font-display text-lg font-semibold">{exp.role}</h3>
                        <p className="text-sm font-medium text-primary">{exp.company}</p>
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground sm:justify-end">
                          <LuMapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {exp.description}
                        </p>
                       <ul className="mt-3 space-y-1.5">
                          {exp.achievements.map((a) => (
                            <li
                              key={a}
                              className={cn(
                                'flex items-start gap-2 text-sm text-foreground/80',
                                isLeft ? 'sm:flex-row-reverse sm:text-right' : ''
                              )}
                            >
                              <LuBriefcase className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <span
                      className={cn(
                        'absolute left-4 top-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full border-2 border-background bg-primary shadow-float sm:left-1/2',
                      )}
                    >
                      <span className="h-1 w-1 rounded-full bg-background" />
                    </span>

                    <div className="hidden sm:block" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
