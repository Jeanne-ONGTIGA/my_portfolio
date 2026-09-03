'use client';

import { profileStatic, socials } from '@/lib/translations';
import { getSocialIcon } from '@/lib/icons';
import { Reveal } from '@/components/reveal';
import { useI18n } from '@/components/language-provider';
import { LuArrowRight, LuMapPin, LuCircle } from 'react-icons/lu';

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-40">
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-20 right-0 -z-10 h-72 w-72 rounded-full bg-chart-4/20 blur-[100px] animate-float-slow" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3.5 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                {t.ui.hero.available}
              </span>
            </Reveal>

            <Reveal delay={3} as="h2" className="mt-7 text-4xl font-bold leading-[1.10] tracking-tight sm:text-5xl lg:text-5xl">
              <span className="block">{profileStatic.firstName} ONGTIGA</span>
              <span className="mt-2 block pb-2 text-gradient">
                {t.ui.hero.titleLine2}
              </span>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-balance">
                {t.profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-float transition-all duration-300 hover:shadow-float-lg hover:brightness-110"
                >
                  {t.ui.hero.seeProjects}
                  <LuArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card"
                >
                  {t.ui.hero.contactMe}
                </a>
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <LuMapPin className="h-4 w-4 text-primary" />
                  {profileStatic.location}
                </span>
                <span className="h-4 w-px bg-border" />
                <div className="flex items-center gap-2">
                  {socials.map((s) => {
                    const Icon = getSocialIcon(s.icon);
                    return (
                      <a
                        key={s.name}
                        href={s.href}
                        target={s.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        aria-label={s.name}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-card/40 text-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={2} variant="scale" className="relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/30 via-chart-4/20 to-chart-2/20 blur-2xl" />
              <div className="overflow-hidden rounded-[1.5rem] border border-border/60 shadow-float-lg">
                <img
                  src="https://images.pexels.com/photos/34803986/pexels-photo-34803986.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt={t.ui.hero.alt}
                  className="aspect-[4/3] w-full object-cover"
                  loading="eager"
                />
              </div>

              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border/60 bg-card/90 p-4 shadow-float-lg backdrop-blur-md sm:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/15 text-success">
                    <LuCircle className="h-5 w-5 fill-success/20" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold">{t.ui.hero.yearsBadge}</p>
                    <p className="text-xs text-muted-foreground">{t.ui.hero.yearsLabel}</p>
                  </div>
                </div>
              </div>

             
            </div>
          </Reveal>
        </div>
      </div>

      {/*<a
        href="#about"
        aria-label={t.ui.hero.scroll}
        className="mx-auto mt-20 hidden h-10 w-6 items-start justify-center rounded-full border border-border/60 p-1.5 lg:flex"
      >
        <span className="h-2 w-1 rounded-full bg-foreground/40 animate-bounce" />
      </a>*/}
    </section>
  );
}
