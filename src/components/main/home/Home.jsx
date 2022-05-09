import PropTypes from 'prop-types';
import React from 'react';

import styles from './Home.module.css';

function Home(props) {
  const { title, subtitle } = props;
  return (
    <section
      id="home"
      className="vh-100"
    >
      <div className={styles.cover}>
        <div className={styles.mask}>
          <div className={styles.content}>
            <h1>{title}</h1>
            {subtitle !== '' && <h4>{subtitle}</h4>}
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
