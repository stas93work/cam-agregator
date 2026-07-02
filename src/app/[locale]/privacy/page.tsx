import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { PrivacyContent } from '@/components/sections/privacy-content';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('privacy');
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function PrivacyPage() {
  return <PrivacyContent />;
}
