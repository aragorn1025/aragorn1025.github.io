import PropTypes from 'prop-types';
import React from 'react';

import './Title.css';

function Title(props) {
  const { text, level, toUppercase } = props;
  const Tag = `h${level}`;
  return (
    <div className="title">
      <Tag className={`mx-auto${toUppercase ? ' uppercase' : ''}`}>{text}</Tag>
    </div>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  toUppercase: PropTypes.bool,
};

Title.defaultProps = {
  level: 1,
  toUppercase: false,
};

export default Title;
