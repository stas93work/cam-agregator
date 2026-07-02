import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { AcademyArticle } from '@/components/sections/academy-article';
import { RelatedAcademyArticles } from '@/components/sections/related-academy-articles';
import { Breadcrumb } from '@/components/ui/breadcrumb';

interface Props {
  params: { locale: string; slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations('academy');
  
  return {
    title: `${params.slug} - ${t('title')}`,
    description: t('description'),
  };
}

export default async function AcademyArticlePage({ params: { locale, slug } }: Props) {
  // TODO: Fetch article data from Supabase
  const article = null;

  if (!article) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <Breadcrumb />
      <AcademyArticle />
      <RelatedAcademyArticles />
    </div>
  );
}
