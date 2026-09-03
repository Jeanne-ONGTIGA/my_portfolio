import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { ThemeProviderWrapper } from '@/components/theme-provider';
import { LanguageProvider } from '@/components/language-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
});
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jeanneongtiga.dev'),
  title: 'Jeanne ONGTIGA  — Développeuse Full-Stack & UI Engineer',
  description:
    "Portfolio de Jeanne ONGTIGA , développeuse full-stack spécialisé en React, Next.js, TypeScript et Node.js. Je conçois des interfaces élégantes et des applications performantes.",
  keywords: [
    'développeuse full-stack',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'UI engineer',
    'freelance',
    'portfolio',
  ],
  authors: [{ name: 'Jeanne ONGTIGA ' }],
  openGraph: {
    title: 'Jeanne ONGTIGA — Développeuse Full-Stack & UI Engineer',
    description:
      'Je conçois des interfaces élégantes et des applications web performantes avec React, Next.js et TypeScript.',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeanne ONGTIGA  — Développeuse Full-Stack & UI Engineer',
    description:
      'Je conçois des interfaces élégantes et des applications web performantes avec React, Next.js et TypeScript.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jakarta.variable} ${jetbrains.variable} font-sans`}
      >
        <ThemeProviderWrapper>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
