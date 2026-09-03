'use client';

import { useState } from 'react';
import { useI18n } from '@/components/language-provider';
import { LuLanguages, LuCheck } from 'react-icons/lu';
import { cn } from '@/lib/utils';

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <div className={cn('relative', className)}>
      <button
        type="button"
        aria-label={t.ui.language.toggle}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border/60 bg-card/50 px-3 text-sm font-medium text-foreground/80 transition-all duration-300 hover:border-primary/40 hover:text-primary hover:shadow-float"
      >
        <LuLanguages className="h-[18px] w-[18px]" />
        <span className="uppercase">{lang}</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-12 z-50 w-40 overflow-hidden rounded-xl border border-border/60 bg-popover p-1 shadow-float-lg"
        >
          {(['fr', 'en'] as const).map((l) => (
            <button
              key={l}
              type="button"
              role="menuitemradio"
              aria-checked={lang === l}
              onMouseDown={(e) => {
                e.preventDefault();
                setLang(l);
                setOpen(false);
              }}
              className={cn(
                'flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors',
                lang === l ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-muted'
              )}
            >
              <span>{l === 'fr' ? t.ui.language.fr : t.ui.language.en}</span>
              {lang === l && <LuCheck className="h-4 w-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
