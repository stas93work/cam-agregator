import { Hero } from '@/components/sections/hero';
import { FeaturedPlatforms } from '@/components/sections/featured-platforms';
import { TopComparisons } from '@/components/sections/top-comparisons';
import { TopGuides } from '@/components/sections/top-guides';
import { LatestArticles } from '@/components/sections/latest-articles';
import { SearchSection } from '@/components/sections/search-section';
import { TelegramSection } from '@/components/sections/telegram-section';

export default function HomePage() {
  return (
    <div className="space-y-20">
      <Hero />
      <SearchSection />
      <FeaturedPlatforms />
      <TopComparisons />
      <TopGuides />
      <LatestArticles />
      <TelegramSection />
    </div>
  );
}
