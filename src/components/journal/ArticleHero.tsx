"use client";

import { motion } from "framer-motion";
import styles from "./ArticleHero.module.css";

export default function ArticleHero({ article }: any) {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,.6),
            rgba(0,0,0,.85)
          ),
          url(${article.featuredImage})
        `,
      }}
    >
      <div className="container">

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className={styles.category}>
            {article.category}
          </span>

          <h1>{article.title}</h1>

          <div className={styles.meta}>
            <span>{article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readingTime}</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}