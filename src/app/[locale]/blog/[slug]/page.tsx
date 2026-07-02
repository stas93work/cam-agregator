import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { BlogArticle } from '@/components/sections/blog-article';
import { RelatedBlogArticles } from '@/components/sections/related-blog-articles';
import { Breadcrumb } from '@/components/ui/breadcrumb';

interface Props {
  params: { locale: string; slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations('blog');
  
  return {
    title: `${params.slug} - ${t('title')}`,
    description: t('description'),
  };
}

export default async function BlogArticlePage({ params: { locale, slug } }: Props) {
  // TODO: Fetch article data from Supabase
  const article = null;

  if (!article) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <Breadcrumb />
      <BlogArticle />
      <RelatedBlogArticles />
    </div>
  );
}
