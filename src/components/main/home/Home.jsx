import PropTypes from 'prop-types';
import React from 'react';

import './Home.css';

function Home(props) {
  const { title, subtitle } = props;
  return (
    <section
      id="home"
      className="vh-100"
    >
      <div className="cover">
        <div className="mask bg-black bg-opacity-50 text-light text-opacity-100">
          <div className="mw-75">
            <h1 className="my-0 py-2 text-center fw-bolder">{title}</h1>
            {subtitle !== '' && <h4 className="my-0 py-2 text-center">{subtitle}</h4>}
          </div>
        </div>
      </div>
    </section>
  );
}

Home.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

Home.defaultProps = {
  subtitle: '',
};

export default Home;
