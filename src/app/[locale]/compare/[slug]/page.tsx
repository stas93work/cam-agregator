import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { ComparisonTable } from '@/components/sections/comparison-table';
import { ComparisonWinner } from '@/components/sections/comparison-winner';
import { ComparisonFAQ } from '@/components/sections/comparison-faq';
import { Breadcrumb } from '@/components/ui/breadcrumb';

interface Props {
  params: { locale: string; slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations('comparisons');
  
  return {
    title: `${params.slug} - ${t('title')}`,
    description: t('description'),
  };
}

export default async function ComparisonPage({ params: { locale, slug } }: Props) {
  // TODO: Fetch comparison data from Supabase
  const comparison = null;

  if (!comparison) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <Breadcrumb />
      <ComparisonTable />
      <ComparisonWinner />
      <ComparisonFAQ />
    </div>
  );
}
