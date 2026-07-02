import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from '@/providers/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import '@/app/globals.css';

const SUPPORTED_LANGUAGES = ['en', 'ru', 'uk', 'de', 'fr', 'es'];

export const metadata: Metadata = {
  title: 'Streaming Hub AI - Platform Reviews & Guides',
  description: 'Comprehensive reviews, comparisons, and educational guides for streaming platforms.',
  icons: {
    icon: '/favicon.ico',
  },
};

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({
    locale: lang,
  }));
}

interface Props {
  children: ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  if (!SUPPORTED_LANGUAGES.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider messages={messages}>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
