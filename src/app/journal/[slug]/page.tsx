import { notFound } from "next/navigation";

import { articles } from "@/data/articles";

import ArticleHero from "@/components/journal/ArticleHero";
import ArticleContent from "@/components/journal/ArticleContent";
import RelatedArticles from "@/components/journal/RelatedArticles";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter(
      (item) =>
        item.category === article.category &&
        item.slug !== article.slug
    )
    .slice(0, 3);

  return (
    <main>
      <ArticleHero article={article} />

      <ArticleContent article={article} />

      <RelatedArticles articles={relatedArticles} />
    </main>
  );
}