import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { PlatformHero } from '@/components/sections/platform-hero';
import { PlatformDetails } from '@/components/sections/platform-details';
import { RelatedComparisons } from '@/components/sections/related-comparisons';
import { RelatedArticles } from '@/components/sections/related-articles';
import { Breadcrumb } from '@/components/ui/breadcrumb';

interface Props {
  params: { locale: string; slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations('platforms');
  
  return {
    title: `${params.slug} - ${t('title')}`,
    description: t('description'),
  };
}

export default async function PlatformPage({ params: { locale, slug } }: Props) {
  // TODO: Fetch platform data from Supabase
  const platform = null;

  if (!platform) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <Breadcrumb />
      <PlatformHero />
      <PlatformDetails />
      <RelatedComparisons />
      <RelatedArticles />
    </div>
  );
}
