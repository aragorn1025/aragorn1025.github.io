import React from 'react';

import me from '../../../assets/images/me.jpg';
import QuotationBlock from '../../common/quote-block/QuotationBlock';

import './About.css';

function getAge(year, month, day) {
  const today = new Date();
  const birthday = new Date(year, month - 1, day);
  const y = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();
  const d = today.getDate() - birthday.getDate();
  return y + (m < 0 || (m === 0 && d < 0) ? -1 : 0);
}

function About() {
  const birthday = {
    year: 1994,
    month: 10,
    day: 25,
  };
  return (
    <section id="about">
      <div className="container bg-dark bg-opacity-75 text-light text-opacity-75 p-4">
        <div className="title">
          <h1 className="mx-auto">About</h1>
        </div>
        <div className="row">
          <div className="title">
            <h3>Information</h3>
            <div className="bar bar-h-3" />
            <h6>Learn more about me</h6>
          </div>
          <div className="col-12 col-lg-4">
            <img
              className="me"
              src={me}
              alt="Aragorn Dai"
            />
            <QuotationBlock
              sentence="Perfection is not attainable, but if we chase perfection we can catch excellence."
              from="Vince Lombardi"
            />
          </div>
          <div className="col-12 col-lg-8 pt-3 pt-lg-0">
            <h3 className="mb-3 fw-bold text-capitalize">Aragorn Dai</h3>
            <div className="row">
              <ul className="list-unstyled mb-0 mb-xxl-3 col-12 col-xxl-7">
                <li>
                  <i className="bi bi-caret-right" />
                  <b>Age </b>
                  <span>{getAge(...Object.values(birthday))}</span>
                </li>
                <li>
                  <i className="bi bi-caret-right" />
                  <b>Gender </b>
                  <span>Male</span>
                </li>
                <li>
                  <i className="bi bi-caret-right" />
                  <b>Home </b>
                  <span>Taipei, Taiwan</span>
                </li>
                <li>
                  <i className="bi bi-caret-right" />
                  <b>Website </b>
                  <span>https://aragorn1025.github.io/</span>
                </li>
                <li>
                  <i className="bi bi-caret-right" />
                  <b>Education </b>
                  <span>National Central University, Taiwan</span>
                </li>
                <li>
                  <i className="bi bi-caret-right" />
                  <b>Major </b>
                  <span>Computer Science & Information Engineering</span>
                </li>
                <li>
                  <i className="bi bi-caret-right" />
                  <b>Degree </b>
                  <span>Master</span>
                </li>
              </ul>
              <ul className="list-unstyled col-12 col-xxl-5">
                <li>
                  <i className="bi bi-caret-right" />
                  <b>Focus </b>
                  <ul className="list-unstyled ms-4">
                    <li>
                      <i className="bi bi-tag" />
                      Artificial Intelligence
                    </li>
                    <li>
                      <i className="bi bi-tag" />
                      Deep Learning
                    </li>
                    <li>
                      <i className="bi bi-tag" />
                      Machine Learning
                    </li>
                    <li>
                      <i className="bi bi-tag" />
                      Image Processing
                    </li>
                    <li>
                      <i className="bi bi-tag" />
                      Software Engineering
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <article>
              <p>
                Hello, I&apos;m Aragorn. I graduated from National Central University, Taiwan. My
                major is Computer Science and Information Engineering, and I&apos;ve got my master
                degree after graduation. I&apos;m very interested in programming and have learned
                many kinds of programming languages, such as Java, Python, JavaScripts, Shell
                Scripts, etc. Thanks to the courses in my college, I have realized the importance of
                software engineering. As a consequence, I have studied hard in Object-oriented
                Programming, Version Control System, Virtualization, etc.
              </p>
              <p>
                After graduation, I had been a data scientist / software developer in a Taiwanese
                startup software company. My main responsibility was the backend development and
                maintenance. I implemented a micro-web-service architecture in Python which have
                been expanded to the most of the projects of the company. I also introduced the
                compiler and the encryption mechanism to the repository, for protecting the source
                codes from unauthorized cloning or black-hat hacking. Futhermore, I had been
                responsible for maintained a major product of the company, which is a cloud AI
                training / inferencing platform. In addition to debugging, I discussed the new user
                needs with the product manager, defined the API with the frontend developer,
                developed the new functions for meeting user needs, imporved the deployment
                procedures, managed the database, and monitored the hardware resources. Moreover, I
                had mentored about 15 interns on their special topics. Every week, I prepared course
                materials, hosted meetings and shared common concepts of software engineering with
                the college students. My work ability and programming skills was greatly imporved by
                cooperating with colleagues during this period.
              </p>
              <p>
                My hobby is bicycle and western pop music. In my leisure time, I&apos;ll put on my
                AirPods and go cycling in the riverside park. After enjoy pleasant breezes and brisk
                rhythm, I&apos;ll feel energetic. I&apos;m someone who is easy-going and
                trustworthy. Apart from my own tasks, I also love to communicate and cooperate with
                the team. Therefore, I always remind myself to be friendly and modest to everyone.
                As a proverb goes &quot;If you want to go fast, go alone; if you want to go far, go
                together.&quot;
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
