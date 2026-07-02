import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { AboutContent } from '@/components/sections/about-content';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('about');
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function AboutPage() {
  return <AboutContent />;
}
