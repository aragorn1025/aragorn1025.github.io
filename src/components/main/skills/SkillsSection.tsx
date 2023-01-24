import React from 'react';

import BarTitle from '../../common/bar-title/BarTitle';
import Title from '../../common/title/Title';
import { getLastUpdatedString } from '../../utils/utils';

const SkillsSection: React.FunctionComponent = () => {
  return (
    <section id="skills">
      <div className="container bg-dark bg-opacity-75 text-light text-opacity-75 p-4">
        <Title
          text="Skills"
          toUpperCase
        />
        <div className="d-flex">
          <h6 className="ms-auto">{getLastUpdatedString(2023, 1, 3, 23)}</h6>
        </div>
        <div className="row">
          <div className="col-12 col-xl-6">
            <div className="row">
              <BarTitle
                mainText="Backend"
                mainLevel={3}
                barLevel={3}
              />
              <div className="col-12 col-md-7">
                <BarTitle
                  mainText="Programming Languages"
                  mainLevel={5}
                  barLevel={1}
                />
                <div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress skill-bar-85">
                      <div className="skill-bar-key">Python</div>
                      <div className="skill-bar-value">75%</div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress skill-bar-70">
                      <div className="skill-bar-key">Java</div>
                      <div className="skill-bar-value">60%</div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress skill-bar-60">
                      <div className="skill-bar-key">Go</div>
                      <div className="skill-bar-value">60%</div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress skill-bar-50">
                      <div className="skill-bar-key">PHP</div>
                      <div className="skill-bar-value">50%</div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress skill-bar-30">
                      <div className="skill-bar-key">C / C++</div>
                      <div className="skill-bar-value">30%</div>
                    </div>
                  </div>
                </div>
                <BarTitle
                  mainText="Frameworks"
                  mainLevel={5}
                  barLevel={1}
                />
                <div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress skill-bar-75">
                      <div className="skill-bar-key">Flask</div>
                      <div className="skill-bar-value">65%</div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress skill-bar-60">
                      <div className="skill-bar-key">FastAPI</div>
                      <div className="skill-bar-value">75%</div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress skill-bar-60">
                      <div className="skill-bar-key">Gin</div>
                      <div className="skill-bar-value">60%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5">
                <BarTitle
                  mainText="Data Science Libraries"
                  mainLevel={5}
                  barLevel={1}
                />
                <ul>
                  <li className="b">NumPy</li>
                  <li>pandas</li>
                  <li className="b">matplotlib</li>
                  <li className="b">OpenCV</li>
                  <li>scikit-learn</li>
                  <li className="b">PyTorch</li>
                  <li>TensorFlow</li>
                  <li>Keras</li>
                </ul>
                <BarTitle
                  mainText="Package Management"
                  mainLevel={5}
                  barLevel={1}
                />
                <ul>
                  <li className="b">Poetry</li>
                  <li>Anaconda</li>
                </ul>
                <BarTitle
                  mainText="Others"
                  mainLevel={5}
                  barLevel={1}
                />
                <ul>
                  <li className="b">pydantic</li>
                  <li className="b">SQLAlchemy</li>
                  <li className="b">Alembic</li>
                  <li className="b">pytest</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div className="row">
              <BarTitle
                mainText="Frontend"
                mainLevel={3}
                barLevel={3}
              />
              <div className="col-12 col-md-7">
                <BarTitle
                  mainText="Programming Languages"
                  mainLevel={5}
                  barLevel={1}
                />
                <div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress skill-bar-70">
                      <div className="skill-bar-key">HTML</div>
                      <div className="skill-bar-value">70%</div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress skill-bar-60">
                      <div className="skill-bar-key">JavaScripts</div>
                      <div className="skill-bar-value">60%</div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress skill-bar-50">
                      <div className="skill-bar-key">CSS</div>
                      <div className="skill-bar-value">50%</div>
                    </div>
                  </div>
                </div>
                <BarTitle
                  mainText="Frameworks"
                  mainLevel={5}
                  barLevel={1}
                />
                <div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress skill-bar-75">
                      <div className="skill-bar-key">Bootstrap</div>
                      <div className="skill-bar-value">60%</div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress skill-bar-50">
                      <div className="skill-bar-key">React</div>
                      <div className="skill-bar-value">45%</div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress skill-bar-50">
                      <div className="skill-bar-key">Vue.js</div>
                      <div className="skill-bar-value">45%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5">
                <BarTitle
                  mainText="Libraries"
                  mainLevel={5}
                  barLevel={1}
                />
                <ul>
                  <li>Material UI</li>
                  <li>Ant Design</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div className="row">
              <BarTitle
                mainText="General"
                mainLevel={3}
                barLevel={3}
              />
              <div className="col-12 col-md-7">
                <BarTitle
                  mainText="Basic"
                  mainLevel={5}
                  barLevel={1}
                />
                <div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress skill-bar-70">
                      <div className="skill-bar-key">Linux</div>
                      <div className="skill-bar-value">70%</div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress skill-bar-50">
                      <div className="skill-bar-key">Shell Script</div>
                      <div className="skill-bar-value">50%</div>
                    </div>
                  </div>
                </div>
                <BarTitle
                  mainText="DevOps"
                  mainLevel={5}
                  barLevel={1}
                />
                <div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress skill-bar-80">
                      <div className="skill-bar-key">Git</div>
                      <div className="skill-bar-value">80%</div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress skill-bar-60">
                      <div className="skill-bar-key">Docker</div>
                      <div className="skill-bar-value">70%</div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress skill-bar-15">
                      <div className="skill-bar-key">Kubernetes</div>
                      <div className="skill-bar-value">15%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5">
                <BarTitle
                  mainText="Web Servers"
                  mainLevel={5}
                  barLevel={1}
                />
                <ul>
                  <li>AMP packages</li>
                  <li>Nginx</li>
                  <li>Apache</li>
                </ul>
                <BarTitle
                  mainText="Cloud Providers"
                  mainLevel={5}
                  barLevel={1}
                />
                <ul className="mb-0">
                  <li>Google Cloud Platform</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div className="row">
              <BarTitle
                mainText="Software Engineering"
                mainLevel={3}
                barLevel={3}
              />
              <div className="col-12">
                <BarTitle
                  mainText="Software Development"
                  mainLevel={5}
                  barLevel={1}
                />
                <ul>
                  <li>Object-oriented Programming</li>
                  <li>Domain Driven Design</li>
                  <li>Agile</li>
                </ul>
              </div>
              <div className="col-12">
                <BarTitle
                  mainText="Computer Vision"
                  mainLevel={5}
                  barLevel={1}
                />
                <ul className="mb-xl-0">
                  <li>Image Processing</li>
                  <li>Deep Learning</li>
                  <li>Machine Learning</li>
                  <li>Artificial Intelligence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
