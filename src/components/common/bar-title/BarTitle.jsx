import PropTypes from 'prop-types';
import React from 'react';

import styles from './BarTitle.module.css';

function BarTitle(props) {
  const { mainText, subText, mainLevel, subLevel, barLevel, toUpperCase } = props;
  const MainTag = `h${mainLevel}`;
  const SubTag = `h${subLevel}`;
  const mainChild = toUpperCase ? mainText.toUpperCase() : mainText;
  const subChild = toUpperCase ? subText.toUpperCase() : subText;
  return (
    <div className={styles['bar-title']}>
      {mainText !== '' && <MainTag>{mainChild}</MainTag>}
      <div className={`${styles.bar} ${styles[`bar-h-${barLevel}`]}`} />
      {subText !== '' && <SubTag>{subChild}</SubTag>}
    </div>
  );
}

BarTitle.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  mainLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  subLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  barLevel: PropTypes.oneOf([1, 2, 3, 4, 5]),
  toUpperCase: PropTypes.bool,
};

BarTitle.defaultProps = {
  mainText: '',
  subText: '',
  mainLevel: 1,
  subLevel: 4,
  barLevel: 1,
  toUpperCase: false,
};

export default BarTitle;
