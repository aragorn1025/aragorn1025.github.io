import React from 'react';

import BarTitle from '../../common/bar-title/BarTitle';
import Title from '../../common/title/Title';

function Contact() {
  return (
    <section id="contact">
      <div className="container bg-dark bg-opacity-75 text-light text-opacity-75 p-4">
        <Title
          text="Contact"
          toUpperCase
        />
        <div>
          <BarTitle
            mainText="Contact Information"
            subText="Contact me"
            mainLevel={3}
            subLevel={6}
            barLevel={3}
            toUpperCase
          />
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <div className="contact-card">
                <div className="icon">
                  <i className="bi bi-geo-alt" />
                </div>
                <div className="content">
                  <h1>My Location</h1>
                  <p>Taipei City, Taiwan</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="contact-card">
                <div className="icon">
                  <i className="bi bi-share" />
                </div>
                <div className="content">
                  <h1>Social Profiles</h1>
                  <p>
                    <a
                      href="https://aragorn1025.github.io/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-globe2 pe-2" />
                    </a>
                    <a
                      href="https://github.com/aragorn1025"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-github pe-2" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/aragorn1025/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-linkedin" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12">
              <div className="contact-card">
                <div className="icon">
                  <i className="bi bi-envelope" />
                </div>
                <div className="content">
                  <h1>Email Me</h1>
                  <p>
                    <a href="mailto:tzjie.dai@gmail.com"> tzjie.dai@gmail.com </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none bg-dark bg-opacity-50 mt-3 p-4">
            <form>
              <div className="row g-3 mb-3">
                <div className="form-floating col-md">
                  <label
                    htmlFor="contact-name"
                    className="px-4"
                  >
                    Your Name
                    <input
                      type="text"
                      className="form-control"
                      id="contact-name"
                      placeholder="Name"
                    />
                  </label>
                </div>
                <div className="form-floating col-md">
                  <label
                    htmlFor="contact-email"
                    className="px-4"
                  >
                    Your Email
                    <input
                      type="email"
                      className="form-control"
                      id="contact-email"
                      placeholder="name@example.com"
                    />
                  </label>
                </div>
                <div className="form-floating col-12">
                  <label
                    htmlFor="contact-subject"
                    className="px-4"
                  >
                    <input
                      type="text"
                      className="form-control"
                      id="contact-subject"
                      placeholder="Subject"
                    />
                    Subject
                  </label>
                </div>
                <div className="form-floating col-12">
                  <label
                    htmlFor="contact-message"
                    className="px-4"
                  >
                    Message
                    <textarea
                      className="form-control"
                      id="contact-message"
                      placeholder="Message"
                    />
                  </label>
                </div>
              </div>
              <button
                type="button"
                className="btn d-flex mx-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
