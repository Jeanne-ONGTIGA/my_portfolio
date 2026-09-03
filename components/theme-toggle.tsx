'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { LuMoon, LuSun } from 'react-icons/lu';
import { cn } from '@/lib/utils';
import { useI18n } from '@/components/language-provider';

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label={t.ui.theme.toggle}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card/50 text-foreground/80 transition-all duration-300 hover:border-primary/40 hover:text-primary hover:shadow-float',
        className
      )}
    >
      {mounted ? (
        <LuSun
          className={cn(
            'absolute h-[18px] w-[18px] transition-all duration-500',
            isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          )}
        />
      ) : null}
      {mounted ? (
        <LuMoon
          className={cn(
            'absolute h-[18px] w-[18px] transition-all duration-500',
            isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          )}
        />
      ) : null}
      {!mounted ? <span className="h-[18px] w-[18px]" /> : null}
    </button>
  );
}
