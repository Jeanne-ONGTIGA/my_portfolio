'use client';

import { profileStatic, socials } from '@/lib/translations';
import { getSocialIcon } from '@/lib/icons';
import { useI18n } from '@/components/language-provider';
import { LuArrowUp, LuHeart } from 'react-icons/lu';

const sectionIds = ['home', 'about', 'skills', 'services', 'projects', 'experience', 'testimonials', 'contact'] as const;

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const navLinks = sectionIds.map((id) => ({ href: `#${id}`, label: t.ui.nav[id] }));

  return (
    <footer className="relative border-t border-border/60">
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.2] [mask-image:radial-gradient(ellipse_at_bottom,black,transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a href="#home" className="group flex items-center gap-2.5" aria-label={t.ui.nav.home}>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-chart-4 font-display text-sm font-bold text-white">
                JO
              </span>
              <span className="font-display text-base font-semibold tracking-tight">
                {profileStatic.name}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t.profile.role}. {t.ui.footer.based} {profileStatic.location}, available worldwide.
            </p>
            <div className="mt-5 flex gap-2">
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

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/90">
              {t.ui.footer.navigation}
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/90">
              {t.ui.footer.contact}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${profileStatic.email}`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {profileStatic.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profileStatic.phone.replace(/\s/g, '')}`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {profileStatic.phone}
                </a>
              </li>
              <li className="text-muted-foreground">{profileStatic.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            © {year} {profileStatic.name}. {t.ui.footer.designed}
            <LuHeart className="h-3.5 w-3.5 fill-destructive text-destructive" />
            and Next.js.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-2 text-sm font-medium text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
          >
            {t.ui.footer.backToTop}
            <LuArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
