import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { EarningsDirectory } from '@/components/sections/earnings-directory';
import { EarningsCalculator } from '@/components/sections/earnings-calculator';
import { Breadcrumb } from '@/components/ui/breadcrumb';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('earnings');
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function EarningsPage() {
  return (
    <div className="space-y-8">
      <Breadcrumb />
      <EarningsCalculator />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Earnings Guides</h1>
      </div>
      <EarningsDirectory />
    </div>
  );
}
