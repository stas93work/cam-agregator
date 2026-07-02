import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { BestRanking } from '@/components/sections/best-ranking';
import { BestFilters } from '@/components/sections/best-filters';
import { Breadcrumb } from '@/components/ui/breadcrumb';

interface Props {
  params: { locale: string; slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations('best');
  
  return {
    title: `${params.slug} - ${t('title')}`,
    description: t('description'),
  };
}

export default async function BestRankingPage({ params: { locale, slug } }: Props) {
  // TODO: Fetch ranking data from Supabase
  const ranking = null;

  if (!ranking) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <Breadcrumb />
      <BestFilters />
      <BestRanking />
    </div>
  );
}
