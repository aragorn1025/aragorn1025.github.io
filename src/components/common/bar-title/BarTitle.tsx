import React from 'react';

import styles from './BarTitle.module.css';

interface BarTitleProps {
  mainText?: string;
  subText?: string;
  mainLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  subLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  barLevel?: 1 | 2 | 3 | 4 | 5;
  toUpperCase?: boolean;
}

const BarTitle: React.FunctionComponent<BarTitleProps> = ({
  mainText,
  subText,
  mainLevel = 1,
  subLevel = 4,
  barLevel = 1,
  toUpperCase = false,
}) => {
  const MainTag: keyof HTMLElementTagNameMap = `h${mainLevel}`;
  const SubTag: keyof HTMLElementTagNameMap = `h${subLevel}`;
  const transform = (text: string) => (toUpperCase ? text.toUpperCase() : text);
  return (
    <div className={styles['bar-title']}>
      {mainText !== undefined && <MainTag>{transform(mainText)}</MainTag>}
      <div className={`${styles.bar} ${styles[`bar-h-${barLevel}`]}`} />
      {subText !== undefined && <SubTag>{transform(subText)}</SubTag>}
    </div>
  );
};

export default BarTitle;
