import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { BestDirectory } from '@/components/sections/best-directory';
import { Breadcrumb } from '@/components/ui/breadcrumb';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('best');
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function BestPage() {
  return (
    <div className="space-y-8">
      <Breadcrumb />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Best Platforms</h1>
      </div>
      <BestDirectory />
    </div>
  );
}
