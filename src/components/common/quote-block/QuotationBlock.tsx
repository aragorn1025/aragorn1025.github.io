import React from 'react';

import styles from './QuotationBlock.module.css';

interface QuotationBlockProps {
  sentence: string;
  from?: string;
}

const QuotationBlock: React.FunctionComponent<QuotationBlockProps> = ({ sentence, from }) => {
  return (
    <div className={styles['quotation-block']}>
      <div>
        <div>{sentence}</div>
      </div>
      {from !== undefined && (
        <div>
          <div>{from}</div>
        </div>
      )}
    </div>
  );
};

export default QuotationBlock;
