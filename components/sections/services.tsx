'use client';

import { getServices } from '@/lib/translations';
import { getServiceIcon } from '@/lib/icons';
import { Reveal } from '@/components/reveal';
import { LuCheck, LuArrowRight } from 'react-icons/lu';
import { useI18n } from '@/components/language-provider';

export function Services() {
  const { lang, t } = useI18n();
  const services = getServices(lang);

  return (
    <section id="services" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {t.ui.services.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t.ui.services.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.ui.services.subtitle}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = getServiceIcon(service.icon);
            return (
              <Reveal key={service.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} variant="scale">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-float-lg">
                  <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-chart-4 text-white shadow-float transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>

                  <h3 className="mt-5 font-display text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                        <LuCheck className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <div className="flex items-center justify-between border-t border-border/60 pt-4">
                      <span className="text-sm font-semibold text-primary">{service.price}</span>
                      <a
                        href="#contact"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground/70 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                        aria-label={t.ui.services.requestAria}
                      >
                        <LuArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
