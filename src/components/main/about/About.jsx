import PropTypes from 'prop-types';
import React from 'react';

import me from '../../../assets/images/me.jpg';
import BarTitle from '../../common/bar-title/BarTitle';
import QuotationBlock from '../../common/quote-block/QuotationBlock';
import Title from '../../common/title/Title';
import getFunction from '../Functions';

import styles from './About.module.css';

function getValue(type, value) {
  switch (type) {
    case 'number':
    case 'string':
      return value;
    case 'link':
      return (
        <a
          href={value.reference}
          target="_blank"
          rel="noreferrer"
        >
          {value.text === undefined || value.text === '' ? value.reference : value.text}
        </a>
      );
    case 'function':
      return getFunction(value.name)(...Object.values(value.arguments));
    case 'array(number)':
    case 'array(string)':
      return (
        <ul>
          {value.map((element) => (
            <li key={element}>{element}</li>
          ))}
        </ul>
      );
    case 'array(link)':
    case 'array(function)':
      throw new Error('Type is not implemented yet.');
    default:
      throw new Error('Unknown type.');
  }
}

function About(props) {
  const { name, quotation, info, autobiography } = props;
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
                  <b>{`${key.toCapitalize()} `}</b>
                  {getValue(type, value)}
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
}

About.propTypes = {
  name: PropTypes.string.isRequired,
  quotation: PropTypes.shape({
    sentence: PropTypes.string.isRequired,
    from: PropTypes.string,
  }).isRequired,
  info: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      type: PropTypes.oneOf([
        'number',
        'string',
        'link',
        'function',
        'array(number)',
        'array(string)',
        'array(link)',
        'array(function)',
      ]).isRequired,
      value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.shape({
          reference: PropTypes.string.isRequired,
          text: PropTypes.string,
          className: PropTypes.string,
        }),
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          arguments: PropTypes.object,
        }),
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(
          PropTypes.shape({
            reference: PropTypes.string.isRequired,
            text: PropTypes.string,
            className: PropTypes.string,
          }),
        ),
        PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            arguments: PropTypes.object,
          }),
        ),
      ]).isRequired,
    }),
  ).isRequired,
  autobiography: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default About;
