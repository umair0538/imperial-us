import ArticleCard from "./ArticleCard";
import styles from "./RelatedArticles.module.css";

export default function RelatedArticles({
  articles,
}: any) {
  if (!articles.length) return null;

  return (
    <section className={styles.section}>
      <div className="container">

        <div className={styles.header}>
          <span>Continue Reading</span>

          <h2>
            Related Articles
          </h2>
        </div>

        <div className={styles.grid}>
          {articles.map(
            (article: any, index: number) => (
              <ArticleCard
                key={article.slug}
                article={article}
                index={index}
              />
            )
          )}
        </div>

      </div>
    </section>
  );
}