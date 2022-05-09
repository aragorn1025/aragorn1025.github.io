import PropTypes from 'prop-types';
import React from 'react';

import styles from './QuotationBlock.module.css';

function QuotationBlock(props) {
  const { sentence, from } = props;
  return (
    <div className={styles['quotation-block']}>
      <div>
        <div>{sentence}</div>
      </div>
      {from !== '' && (
        <div>
          <div>{from}</div>
        </div>
      )}
    </div>
  );
}

QuotationBlock.propTypes = {
  sentence: PropTypes.string.isRequired,
  from: PropTypes.string,
};

QuotationBlock.defaultProps = {
  from: '',
};

export default QuotationBlock;
