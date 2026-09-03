'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { translations, type Lang, type Translation } from '@/lib/translations';

type I18nContextValue = {
  lang: Lang;
  t: Translation;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = 'portfolio-lang';

function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'fr';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'fr' || stored === 'en') return stored;
  const browser = window.navigator.language.slice(0, 2).toLowerCase();
  return browser === 'en' ? 'en' : 'fr';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLangState(detectInitialLang());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, mounted]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggleLang = useCallback(() => setLangState((p) => (p === 'fr' ? 'en' : 'fr')), []);

  const value = useMemo<I18nContextValue>(
    () => ({ lang, t: translations[lang], setLang, toggleLang }),
    [lang, setLang, toggleLang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider');
  return ctx;
}
