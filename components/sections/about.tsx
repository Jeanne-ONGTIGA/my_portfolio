'use client';

import { profileStatic } from '@/lib/translations';
import { Reveal } from '@/components/reveal';
import { useI18n } from '@/components/language-provider';
import { LuCircleCheckBig } from 'react-icons/lu';
import Image from 'next/image';

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> 
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {t.ui.about.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t.ui.about.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.ui.about.subtitle}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal variant="scale" className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 to-chart-4/15 blur-2xl" />
            <div className="overflow-hidden w-[350px] h-[420px] translate-x-10 border border-border/40 shadow-float-lg">
              <img
                src="/images/portrait.png"
                alt="Portrait"
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
                
              />
            </div>
            {/*<div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border/60 bg-card/95 p-5 shadow-float-lg backdrop-blur-md sm:block">
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-bold text-gradient-blue">60+</span>
                  <span className="text-xs text-muted-foreground">{t.ui.about.delivered}</span>
                </div>
                <span className="h-8 w-px bg-border" />
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-bold text-gradient-blue">98%</span>
                  <span className="text-xs text-muted-foreground">{t.ui.about.satisfaction}</span>
                </div>
              </div>
            </div>*/}
          </Reveal>

          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-foreground/90 text-balance">
                {t.profile.bio}
              </p>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                {t.profile.longBio}
              </p>
            </Reveal>

            <Reveal delay={2}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {t.ui.about.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-sm">
                    <LuCircleCheckBig className="h-5 w-5 shrink-0 text-success" />
                    <span className="text-foreground/80">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {t.profile.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border/60 bg-card/50 p-4 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-float"
                  >
                    <p className="font-display text-2xl font-bold text-gradient-blue sm:text-3xl">
                      {stat.value}
                      <span className="text-primary">{stat.suffix}</span>
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
