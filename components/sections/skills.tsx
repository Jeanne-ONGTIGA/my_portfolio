'use client';

import { getCategoryIcon, getTechIcon } from '@/lib/icons';
import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { useI18n } from '@/components/language-provider';

function SkillBar({ name, level, icon, delay }: { name: string; level: number; icon: string; delay: number }) {
  const Icon = getTechIcon(icon);
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(e.target);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium">
          <Icon className="h-4 w-4 text-primary" />
          {name}
        </span>
        <span className="font-mono text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-chart-4 transition-all duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : '0%', transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-dots opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {t.ui.skills.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t.ui.skills.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.ui.skills.subtitle}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {t.skillCategories.map((cat, ci) => {
            const CatIcon = getCategoryIcon(cat.icon);
            return (
              <Reveal key={cat.title} delay={(ci + 1) as 1 | 2 | 3} variant="scale">
                <div className="group h-full rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-float-lg">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        'flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-float',
                        cat.accent
                      )}
                    >
                      <CatIcon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
                  </div>

                  <div className="mt-6 space-y-5">
                    {cat.skills.map((skill, si) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        icon={skill.icon}
                        delay={si * 120}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={3}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border/60 bg-card/30 py-5">
            <div className="flex w-max animate-marquee items-center gap-12 px-6">
              {[...t.skillCategories].flatMap((cat) =>
                cat.skills.map((s) => {
                  const Icon = getTechIcon(s.icon);
                  return (
                    <span
                      key={`${cat.title}-${s.name}`}
                      className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-muted-foreground"
                    >
                      <Icon className="h-5 w-5 text-foreground/70" />
                      {s.name}
                    </span>
                  );
                })
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
