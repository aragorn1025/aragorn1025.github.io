import React from 'react';

import './Home.css';

function Home() {
  return (
    <section
      id="home"
      className="vh-100"
    >
      <div className="cover">
        <div className="mask bg-black bg-opacity-50 text-light text-opacity-100">
          <div className="mw-75">
            <h1 className="my-0 py-2 text-center fw-bolder">Aragorn Dai</h1>
            <h4 className="my-0 py-2 text-center">
              I&apos;m an enthusiastic programmer&nbsp;
              <br className="d-flex d-md-none" />
              from Taipei, Taiwan.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
