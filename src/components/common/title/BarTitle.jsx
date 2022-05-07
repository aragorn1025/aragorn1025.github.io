import PropTypes from 'prop-types';
import React from 'react';

import './Title.css';

function BarTitle(props) {
  const { mainText, subText, mainLevel, subLevel, barLevel, toUppercase } = props;
  const MainTag = `h${mainLevel}`;
  const SubTag = `h${subLevel}`;
  const tagClassName = `mx-auto${toUppercase ? ' uppercase' : ''}`;
  return (
    <div className="title">
      {mainText !== '' && <MainTag className={tagClassName}>{mainText}</MainTag>}
      <div className={`bar bar-h-${barLevel}`} />
      {subText !== '' && <SubTag className={tagClassName}>{subText}</SubTag>}
    </div>
  );
}

BarTitle.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  mainLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  subLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  barLevel: PropTypes.oneOf([1, 2, 3, 4, 5]),
  toUppercase: PropTypes.bool,
};

BarTitle.defaultProps = {
  mainText: '',
  subText: '',
  mainLevel: 1,
  subLevel: 4,
  barLevel: 1,
  toUppercase: false,
};

export default BarTitle;
