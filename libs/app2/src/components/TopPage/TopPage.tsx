import { Article } from '@common/components/article';

import { articles } from '@app2/assets/articles';

import styles from './TopPage.module.scss';

import fv from '@app2/assets/forest.webp';
import Image from 'next/image';

export function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.fv}>
        <Image className={styles.image} src={fv} fill alt='fv' />
        <div className={styles.bg} />
        <p className={styles.fvText}>アプリケーションB</p>
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
