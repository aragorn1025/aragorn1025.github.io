import React from 'react';

import me from '../../../assets/images/me.jpg';
import BarTitle from '../../common/bar-title/BarTitle';
import QuotationBlock from '../../common/quote-block/QuotationBlock';
import Title from '../../common/title/Title';
import { capitalize } from '../../utils/utils';
import getFunction from './Functions';

import styles from './AboutSection.module.css';

interface AboutFunctionItem {
  name: string;
  arguments?: object;
}

interface AboutLinkItem {
  reference: string;
  text?: string;
  className?: string;
}

type AboutItemType =
  | 'number'
  | 'string'
  | 'function'
  | 'link'
  | 'array(number)'
  | 'array(string)'
  | 'array(function)'
  | 'array(link)';

type AboutItem =
  | number
  | string
  | AboutFunctionItem
  | AboutLinkItem
  | number[]
  | string[]
  | AboutFunctionItem[]
  | AboutLinkItem[];

export interface AboutSectionProps {
  name: string;
  quotation: {
    sentence: string;
    from?: string;
  };
  info: {
    key: string;
    type: AboutItemType;
    value: AboutItem;
  }[];
  autobiography: string[];
}

const getAboutItem = (type: AboutItemType, value: AboutItem) => {
  switch (type) {
    case 'number':
      return value as number;
    case 'string':
      return value as string;
    case 'link': {
      const item = value as AboutLinkItem;
      return (
        <a
          href={item.reference}
          target="_blank"
          rel="noreferrer"
        >
          {item.text === undefined ? item.reference : item.text}
        </a>
      );
    }
    case 'function': {
      const item = value as AboutFunctionItem;
      return getFunction(item.name)(item.arguments);
    }
    case 'array(number)': {
      const items = value as number[];
      return (
        <ul>
          {items.map((element: number) => (
            <li key={element}>{element}</li>
          ))}
        </ul>
      );
    }
    case 'array(string)': {
      const items = value as string[];
      return (
        <ul>
          {items.map((element: string) => (
            <li key={element}>{element}</li>
          ))}
        </ul>
      );
    }
    case 'array(link)':
    case 'array(function)':
      throw new Error('The AboutItemType is not implemented yet.');
    default:
      throw new Error('Unknown type.');
  }
};

const AboutSection: React.FunctionComponent<AboutSectionProps> = ({
  name,
  quotation,
  info,
  autobiography,
}) => {
  return (
    <section id="about">
      <div className="container bg-dark bg-opacity-75 text-light text-opacity-75 p-4">
        <Title
          text="About"
          toUpperCase
        />
        <div className="row">
          <BarTitle
            mainText="Information"
            subText="Learn more about me"
            mainLevel={3}
            subLevel={6}
            barLevel={3}
            toUpperCase
          />
          <div className="col-12 col-lg-4">
            <img
              className={styles.me}
              src={me}
              alt={name}
            />
            <QuotationBlock {...quotation} />
          </div>
          <div className="col-12 col-lg-8 pt-3 pt-lg-0">
            <h3 className="mb-3 fw-bold text-capitalize">{name}</h3>
            <ul className={styles.info}>
              {info.map(({ key, type, value }) => (
                <li key={key}>
                  <b>{`${capitalize(key)} `}</b>
                  {getAboutItem(type, value)}
                </li>
              ))}
            </ul>
            <article className={styles.autobiography}>
              {autobiography.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
