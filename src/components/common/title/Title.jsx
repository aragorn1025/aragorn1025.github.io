import PropTypes from 'prop-types';
import React from 'react';

import styles from './Title.module.css';

function Title(props) {
  const { text, level, toUpperCase } = props;
  const Tag = `h${level}`;
  const child = toUpperCase ? text.toUpperCase() : text;
  return (
    <div className={styles.title}>
      <Tag>{child}</Tag>
    </div>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  toUpperCase: PropTypes.bool,
};

Title.defaultProps = {
  level: 1,
  toUpperCase: false,
};

export default Title;
