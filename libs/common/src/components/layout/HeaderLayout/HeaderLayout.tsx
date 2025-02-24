import { ReactNode } from 'react';
import styles from './HeaderLayout.module.scss';

const HeaderLayout = ({ children }: { children?: ReactNode }) => {
  return <div className={styles.sectionWrap}>{children}</div>;
};
export default HeaderLayout;
