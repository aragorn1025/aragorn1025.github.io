import React from 'react';

import portfolio00 from '../../../assets/images/portfolio_00.png';
import portfolio01 from '../../../assets/images/portfolio_01.png';
import portfolio04 from '../../../assets/images/portfolio_04.png';
import portfolio10 from '../../../assets/images/portfolio_10.png';
import portfolio11 from '../../../assets/images/portfolio_11.png';
import portfolio12 from '../../../assets/images/portfolio_12.png';
import portfolio20 from '../../../assets/images/portfolio_20.png';

/*
function setTooltip(target) {
  $(target).prop('title', function () {
    return $(this).text().replaceAll('\t', '').replaceAll('\n', ' ');
  });
}
*/

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container bg-dark bg-opacity-75 text-light text-opacity-75 p-4">
        <div className="title">
          <h1 className="mx-auto">Portfolio</h1>
        </div>
        <div>
          <div className="title">
            <div className="bar bar-h-3" />
            <h6>My Works</h6>
          </div>
          <div className="row g-3">
            <div className="col-12 col-md-6 col-xl-4">
              <div className="card text-center">
                <img
                  src={portfolio00}
                  className="card-img-top"
                  alt="uml_editor.png"
                />
                <div className="card-body">
                  <h5 className="card-title">UML editor</h5>
                  <p className="card-text">
                    This is a simple UML editor, which was implemented in the course Object-oriented
                    Programming. I learned the three most important concepts in the course:
                    encapsulation, inheritance, polymorphism, and wish I could write better codes in
                    the future.
                    <br />
                    <br />
                    <br />
                  </p>
                  <a
                    href="https://github.com/aragorn1025/aragorn.uml-editor"
                    target="_blank"
                    className="btn"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github" />
                    &nbsp;GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4 d-none">
              <div className="card text-center">
                <img
                  src={portfolio01}
                  className="card-img-top"
                  alt="perceptron.png"
                />
                <div className="card-body">
                  <h5 className="card-title">Perceptron</h5>
                  <p className="card-text">
                    A perceptron is the smallest unit of the neural network. It is a binary
                    classifier used to divide linear separable data into two parts. Here&apos;s a
                    percrptorn I implemented in Java, so that we can observe the changes in each
                    epoch of the training of the perceptron.
                    <br />
                    <br />
                    <br />
                  </p>
                  <a
                    href="https://github.com/aragorn1025/aragorn.neural.network"
                    target="_blank"
                    className="btn"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github" />
                    &nbsp;GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <div className="card text-center">
                <img
                  src={portfolio04}
                  className="card-img-top"
                  alt="autonomous_car.png"
                />
                <div className="card-body">
                  <h5 className="card-title">Autonomous Car</h5>
                  <p className="card-text">
                    There are many well-designed algorithms to control a autonomous car, and the
                    fuzzy system is one of them. By fuzzifiers, fuzzy inference engines, and
                    defuzzifiers, a rule-based control system will be built. Here&apos;s a fuzzy
                    system for the autonomous car I implemented in Java. Let&apos;s take a look.
                    <br />
                    <br />
                    <br />
                  </p>
                  <a
                    href="https://github.com/aragorn1025/aragorn.autonomous-car"
                    target="_blank"
                    className="btn"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github" />
                    &nbsp;GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <div className="card text-center">
                <img
                  src={portfolio10}
                  className="card-img-top"
                  alt="patent_medicine_identification_system.png"
                />
                <div className="card-body">
                  <h5 className="card-title">Patent - Medicine Identification System</h5>
                  <p className="card-text">
                    Due to the large workload of the pharmacy, wrong drug distribution would
                    sometimes occurs. As a result, we cooperated with the hospital and invented this
                    device, using technologies such as AI / DL to identify pills, and compare with
                    the medicine list. It is hoped that the invention can help pharmacists reduce
                    medicine errors.
                    <br />
                    <br />
                    <br />
                  </p>
                  <a
                    href="https://www.futuretech.org.tw/futuretech/index.php?action=product_detail&prod_no=P0008700005557&web_lang=en-us"
                    target="_blank"
                    className="btn"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-globe2" />
                    &nbsp;More Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <div className="card text-center">
                <img
                  src={portfolio11}
                  className="card-img-top"
                  alt="mask_rcnn.png"
                />
                <div className="card-body">
                  <h5 className="card-title">Mask R-CNN</h5>
                  <p className="card-text">
                    The instance segmentation can mark the target object at the pixel level. As a
                    consequence, it is widely used in many fields. We referred to the official
                    PyTorch documents and reconstructed the source codes of Mask R-CNN. So that we
                    can train an AI to complete a instance segmentation task with the data labeled
                    by LabelMe.
                    <br />
                    <br />
                    <br />
                  </p>
                  <a
                    href="https://github.com/aragorn1025/mask-rcnn"
                    target="_blank"
                    className="btn"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github" />
                    &nbsp;GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <div className="card text-center">
                <img
                  src={portfolio12}
                  className="card-img-top"
                  alt="thesis_reflection_removal.png"
                />
                <div className="card-body">
                  <h5 className="card-title">Thesis - Reflection Removal</h5>
                  <p className="card-text">
                    If the dashcam image is disturbed by reflections on the glass, some object
                    detection algorithms may be affected. Therefore, we tried to remove the
                    reflection by Generative Adversarial Network and improve its precision. The
                    result is not good enough, but we still propose a new method to compare the
                    effects of GAN objectively.
                    <br />
                    <br />
                    <br />
                  </p>
                  <a
                    href="http://140.113.39.130/cgi-bin/gs32/ncugsweb.cgi?o=dncucdr&s=id=%22GC107522052%22.&searchmode=basic"
                    target="_blank"
                    className="btn"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-globe2" />
                    &nbsp;More Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <div className="card text-center">
                <img
                  src={portfolio20}
                  className="card-img-top"
                  alt="course_programminga_and_basic_ai.png"
                />
                <div className="card-body">
                  <h5 className="card-title">Course - Programming & Basic AI</h5>
                  <p className="card-text">
                    AI has become more important these years. Therefore, I was asked to teach
                    interns what is the AI in my first job. This is the course recorded at that
                    time, which contains the basic AI concepts, as well as some programming language
                    foundations. Wish you will like it.
                    <br />
                    <br />
                    <br />
                  </p>
                  <a
                    href="https://www.youtube.com/playlist?list=PLauXCvRn7tv75mc3mJQA9ApX67nM1dad8"
                    target="_blank"
                    className="btn"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-youtube" />
                    &nbsp;YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
