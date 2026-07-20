"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ArticleCard.module.css";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readingTime: string;
}

interface Props {
  article: Article;
  index: number;
}

export default function ArticleCard({ article, index }: Props) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
    >
      <Link href={`/journal/${article.slug}`}>

        <div className={styles.imageWrapper}>
          <img
            src={article.image}
            alt={article.title}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>

          <span className={styles.category}>
            {article.category}
          </span>

          <h3>{article.title}</h3>

          <p>{article.excerpt}</p>

          <div className={styles.footer}>
            <span>{article.date}</span>
            <span>{article.readingTime}</span>
          </div>

        </div>

      </Link>
    </motion.article>
  );
}