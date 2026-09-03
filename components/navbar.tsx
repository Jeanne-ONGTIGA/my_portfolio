'use client';

import { useEffect, useState } from 'react';
import { profileStatic } from '@/lib/translations';
import { useI18n } from '@/components/language-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import { LuMenu, LuX, LuArrowDownToLine } from 'react-icons/lu';
import { cn } from '@/lib/utils';

const sectionIds = ['home', 'about', 'skills', 'services', 'projects', 'experience', 'testimonials', 'contact'] as const;

export function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = sectionIds.map((id) => ({
    href: `#${id}`,
    id,
    label: t.ui.nav[id],
  }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-2.5" aria-label={t.ui.nav.home}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-chart-4 font-display text-sm font-bold text-white shadow-float transition-transform duration-300 group-hover:scale-105">
            JO
          </span>
          <span className="hidden font-display text-base font-semibold tracking-tight sm:block">
            {profileStatic.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = activeSection === link.id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300',
                    active
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute inset-x-3 -bottom-px h-px origin-center bg-primary transition-transform duration-300',
                      active ? 'scale-x-100' : 'scale-x-0'
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <a
            href={profileStatic.resumeUrl}
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-float transition-all duration-300 hover:shadow-float-lg hover:brightness-110 sm:inline-flex"
          >
            <LuArrowDownToLine className="h-4 w-4" />
            {t.ui.resume}
          </a>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card/50 text-foreground lg:hidden"
          >
            {mobileOpen ? <LuX className="h-5 w-5" /> : <LuMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          'overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-all duration-400 lg:hidden',
          mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 border-transparent opacity-0'
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => {
            const active = activeSection === link.id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                    active ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-muted'
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li className="mt-2">
            <a
              href={profileStatic.resumeUrl}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-base font-semibold text-primary-foreground"
            >
              <LuArrowDownToLine className="h-4 w-4" />
              {t.ui.resume}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
