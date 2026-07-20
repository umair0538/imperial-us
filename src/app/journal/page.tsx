import JournalHero from "@/components/journal/JournalHero";
import FeaturedArticle from "@/components/journal/FeaturedArticle";
import ArticleGrid from "@/components/journal/ArticleGrid";
import Newsletter from "@/components/journal/Newsletter";

export default function JournalPage() {
  return (
    <main>
      <JournalHero />
      <FeaturedArticle />
      <ArticleGrid />
      <Newsletter />
    </main>
  );
}