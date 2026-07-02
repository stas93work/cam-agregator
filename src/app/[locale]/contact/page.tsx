import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ContactForm } from '@/components/sections/contact-form';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('contact');
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ContactPage() {
  return <ContactForm />;
}
