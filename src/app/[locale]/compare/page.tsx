import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ComparisonsDirectory } from '@/components/sections/comparisons-directory';
import { Breadcrumb } from '@/components/ui/breadcrumb';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('comparisons');
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ComparisonsPage() {
  return (
    <div className="space-y-8">
      <Breadcrumb />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Comparisons</h1>
      </div>
      <ComparisonsDirectory />
    </div>
  );
}
