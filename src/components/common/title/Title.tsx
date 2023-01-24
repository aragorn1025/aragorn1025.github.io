import React from 'react';

import styles from './Title.module.css';

interface TitleProps {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  toUpperCase?: boolean;
}

const Title: React.FunctionComponent<TitleProps> = ({ text, level = 1, toUpperCase = false }) => {
  const Tag: keyof HTMLElementTagNameMap = `h${level}`;
  const transform = (text: string) => (toUpperCase ? text.toUpperCase() : text);
  return (
    <div className={styles.title}>
      <Tag>{transform(text)}</Tag>
    </div>
  );
};

export default Title;
