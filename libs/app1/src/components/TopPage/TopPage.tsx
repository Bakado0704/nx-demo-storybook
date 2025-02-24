import { Article } from '@common/components/article';

import { articles } from '@app1/assets/articles';

import styles from './TopPage.module.scss';

export function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.fv}>
        <p className={styles.fvText}>アプリケーションA</p>
      </div>
      <p className={styles.title}>Latest News</p>
      <div className={styles.articleList}>
        {articles.map((article, index) => {
          return <Article key={index} article={article} />;
        })}
      </div>
    </div>
  );
}

export default Index;
