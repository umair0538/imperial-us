"use client";

import { articles } from "@/data/articles";
import ArticleCard from "./ArticleCard";
import styles from "./ArticleGrid.module.css";

export default function ArticleGrid() {

  const latestArticles = articles
    .filter(article => !article.featured)
    .slice(0, 6);

  return (
    <section className={styles.section}>
      <div className="container">

        <div className={styles.header}>

          <span className={styles.eyebrow}>
            Latest Stories
          </span>

          <h2>
            Explore More
          </h2>

        </div>

        <div className={styles.grid}>

          {latestArticles.map((article, index) => (
            <ArticleCard
              key={article.slug}
              article={article}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
}