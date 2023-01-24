import React from 'react';

import styles from './HomeSection.module.css';

interface HomeSectionProps {
  title: string;
  subtitle?: string;
}

const HomeSection: React.FunctionComponent<HomeSectionProps> = ({ title, subtitle }) => {
  return (
    <section
      id="home"
      className="vh-100"
    >
      <div className={styles.cover}>
        <div className={styles.mask}>
          <div className={styles.content}>
            <h1>{title}</h1>
            {subtitle !== undefined && <h4>{subtitle}</h4>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
