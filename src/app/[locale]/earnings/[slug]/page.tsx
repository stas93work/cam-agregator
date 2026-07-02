import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { EarningsArticle } from '@/components/sections/earnings-article';
import { RelatedEarningsArticles } from '@/components/sections/related-earnings-articles';
import { Breadcrumb } from '@/components/ui/breadcrumb';

interface Props {
  params: { locale: string; slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations('earnings');
  
  return {
    title: `${params.slug} - ${t('title')}`,
    description: t('description'),
  };
}

export default async function EarningsArticlePage({ params: { locale, slug } }: Props) {
  // TODO: Fetch article data from Supabase
  const article = null;

  if (!article) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <Breadcrumb />
      <EarningsArticle />
      <RelatedEarningsArticles />
    </div>
  );
}
