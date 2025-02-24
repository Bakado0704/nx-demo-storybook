import { format } from 'date-fns';
import Image from 'next/image';
import styles from './Article.module.scss';
import { ArticleProps } from './Article.types';

const Article = ({ article }: { article: ArticleProps }) => {
  return (
    <div className={styles.container}>
      <Image className={styles.image} alt='画像' src={article.Image} />
      <div className={styles.rightContainer}>
        <div className={styles.textContainer}>
          <p className={styles.title}>{article.title}</p>
          <p className={styles.description}>{article.description}</p>
        </div>

        <div className={styles.bottomContainer}>
          <div className={styles.personContainer}>
            <div className={styles.circle} />
            <p className={styles.name}>{article.name}</p>
          </div>
          <p className={styles.date}>
            {format(article.createdAt, article.dateType)}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Article;
