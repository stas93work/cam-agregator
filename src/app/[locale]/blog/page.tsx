import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { BlogDirectory } from '@/components/sections/blog-directory';
import { Breadcrumb } from '@/components/ui/breadcrumb';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('blog');
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function BlogPage() {
  return (
    <div className="space-y-8">
      <Breadcrumb />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
      </div>
      <BlogDirectory />
    </div>
  );
}
