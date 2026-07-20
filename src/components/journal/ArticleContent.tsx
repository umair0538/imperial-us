import styles from "./ArticleContent.module.css";

export default function ArticleContent({ article }: any) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {article.content.map(
          (paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          )
        )}

      </div>
    </section>
  );
}