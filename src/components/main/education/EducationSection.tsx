import React from 'react';

import BarTitle from '../../common/bar-title/BarTitle';
import Title from '../../common/title/Title';
import { getLastUpdatedString } from '../../utils/utils';

const EducationSection: React.FunctionComponent = () => {
  return (
    <section id="education">
      <div className="container bg-dark bg-opacity-75 text-light text-opacity-75 p-4">
        <Title
          text="Education"
          toUpperCase
        />
        <div className="d-flex">
          <h6 className="ms-auto">{getLastUpdatedString(2026, 8, 1, 23)}</h6>
        </div>
        <div>
          <BarTitle
            barLevel={3}
          />
          <div className="timeline mb-3">
            <div className="timeline-block">
              <div className="timeline-anchor">
                <div className="timeline-tag">
                  <div className="h5">Sep 2025–Jun 2027</div>
                  <div className="h6">(expected)</div>
                </div>
                <div className="timeline-title">
                  <h4>M.S. in Computer Science (minor in Artificial Intelligence)</h4>
                  <h5>GPA: 4.00/4.00</h5>
                </div>
              </div>
              <div className="timeline-content">
              </div>
            </div>
            <div className="timeline-block">
              <div className="timeline-anchor">
                <div className="timeline-tag">
                  <div className="h5">Sep 2018–Jun 2020</div>
                </div>
                <div className="timeline-title">
                  <h4>M.S. in Computer Science and Information Engineering</h4>
                  <h5>GPA: 3.53/4.00</h5>
                </div>
              </div>
              <div className="timeline-content">
                <ul>
                  <li>
                    Co-invented an AI-assisted medication verification system on NVIDIA Jetson TX2, cutting pharmacist workload by
                    an estimated <b>25%</b>—awarded a Taiwan Patent and a Gold Medal at Taiwan Innotech Expo 2020.
                  </li>
                  <li className="hidden">
                    Thesis:
                    <br />
                    The Application of the Generative Adversarial Network in the Reflection Removal
                    Algorithm for Dashcam Images
                    <br />
                    <a
                      className="button"
                      href="http://140.113.39.130/cgi-bin/gs32/ncugsweb.cgi?o=dncucdr&s=id=%22GC107522052%22.&searchmode=basic"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span />
                      <span />
                      <span />
                      <span />
                      <i className="bi bi-file-earmark-pdf" />
                      &nbsp;Here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline-block">
              <div className="timeline-anchor">
                <div className="timeline-tag">
                  <div className="h5">Sep 2013–Jun 2018</div>
                </div>
                <div className="timeline-title">
                  <h4>B.S. in Computer Science and Information Engineering </h4>
                </div>
              </div>
              <div className="timeline-content"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
