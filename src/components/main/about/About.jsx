import PropTypes from 'prop-types';
import React from 'react';

import me from '../../../assets/images/me.jpg';
import QuotationBlock from '../../common/quote-block/QuotationBlock';
import BarTitle from '../../common/title/BarTitle';
import Title from '../../common/title/Title';
import getFunction from '../Functions';

import './About.css';

function getValue(type, value) {
  switch (type) {
    case 'number':
    case 'string':
      return value;
    case 'link':
      if (value.text === undefined || value.text === '') {
        return <a href={value.reference}>{value.reference}</a>;
      }
      return <a href={value.reference}>{value.text}</a>;
    case 'function':
      return getFunction(value.name)(...Object.values(value.arguments));
    case 'array(number)':
    case 'array(string)':
    case 'array(link)':
      return (
        <ul>
          {value.map((element) => (
            <li key={element}>
              <i className="bi bi-tag" />
              {element}
            </li>
          ))}
        </ul>
      );
    case 'array(function)':
    default:
      throw new Error('Unknown type');
  }
}

function About(props) {
  const { name, quotation, info, autobiography } = props;
  return (
    <section id="about">
      <div className="container bg-dark bg-opacity-75 text-light text-opacity-75 p-4">
        <Title
          text="About"
          toUppercase
        />
        <div className="row">
          <BarTitle
            mainText="Information"
            subText="Learn more about me"
            mainLevel={3}
            subLevel={6}
            barLevel={3}
            toUppercase
          />
          <div className="col-12 col-lg-4">
            <img
              className="me"
              src={me}
              alt={name}
            />
            <QuotationBlock {...quotation} />
          </div>
          <div className="col-12 col-lg-8 pt-3 pt-lg-0">
            <h3 className="mb-3 fw-bold text-capitalize">{name}</h3>
            <div className="row">
              {info.map(({ key, children, className }) => (
                <ul
                  key={key}
                  className={`list-unstyled ${className}`}
                >
                  {children.map((child) => (
                    <li key={child.key}>
                      <i className="bi bi-caret-right" />
                      <b>{`${child.key.toCapitalize()} `}</b>
                      {getValue(child.type, child.value)}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <article>
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
      children: PropTypes.arrayOf(
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
      className: PropTypes.string,
    }),
  ).isRequired,
  autobiography: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default About;
