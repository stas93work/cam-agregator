import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { TermsContent } from '@/components/sections/terms-content';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('terms');
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function TermsPage() {
  return <TermsContent />;
}
