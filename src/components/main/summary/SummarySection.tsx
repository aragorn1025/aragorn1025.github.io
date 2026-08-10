import React from 'react';

import me from '../../../assets/images/me.jpg';
import BarTitle from '../../common/bar-title/BarTitle';
import Title from '../../common/title/Title';

import styles from './SummarySection.module.css';

interface SummaryLinkItem {
  reference: string;
  text?: string;
  className?: string;
}

type SummaryItemType =
  'number' | 'string' | 'html' | 'link' | 'array(number)' | 'array(string)' | 'array(html)' | 'array(link)';

type SummaryItem = number | string | SummaryLinkItem | number[] | string[] | SummaryLinkItem[];

export interface SummarySectionProps {
  name: string;
  info: {
    key: string;
    type: SummaryItemType;
    value: SummaryItem;
  }[];
  summary: string[];
}

const getSummaryItem = (type: SummaryItemType, value: SummaryItem) => {
  switch (type) {
    case 'number':
      return value as number;
    case 'string':
      return value as string;
    case 'html':
      return <span dangerouslySetInnerHTML={{ __html: value as string }} />;
    case 'link': {
      const item = value as SummaryLinkItem;
      return (
        <a href={item.reference} target="_blank" rel="noreferrer">
          {item.text === undefined ? item.reference : item.text}
        </a>
      );
    }
    case 'array(number)': {
      const items = value as number[];
      return (
        <ul>
          {items.map((element: number) => (
            <li>{element}</li>
          ))}
        </ul>
      );
    }
    case 'array(string)': {
      const items = value as string[];
      return (
        <ul>
          {items.map((element: string) => (
            <li>{element}</li>
          ))}
        </ul>
      );
    }
    case 'array(html)': {
      const items = value as string[];
      return (
        <ul>
          {items.map((element: string) => (
            <li>
              <div dangerouslySetInnerHTML={{ __html: element }} />
            </li>
          ))}
        </ul>
      );
    }
    case 'array(link)':
      throw new Error('TODO: Not implemented error.');
    default:
      throw new Error('Unknown type.');
  }
};

const SummarySection: React.FunctionComponent<SummarySectionProps> = ({ name, info, summary }) => {
  return (
    <section id="summary">
      <div className="container bg-dark bg-opacity-75 text-light text-opacity-75 p-4">
        <Title text={name} />
        <div className="row">
          <BarTitle barLevel={3} />
          <div className="col-12 col-lg-4">
            <img className={styles.me} src={me} alt={name} />
          </div>
          <div className="col-12 col-lg-8 pt-3 pt-lg-0">
            <ul className={styles.info}>
              {info.map(({ key, type, value }) => (
                <li>
                  <b>{`${key} `}</b>
                  {getSummaryItem(type, value)}
                </li>
              ))}
            </ul>
            <article className={styles.summary}>
              {summary.map((paragraph) => (
                <p>{paragraph}</p>
              ))}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
