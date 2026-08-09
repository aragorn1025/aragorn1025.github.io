import React from 'react';

import BarTitle from '../../common/bar-title/BarTitle';
import Title from '../../common/title/Title';
import { getLastUpdatedString } from '../../utils/utils';

const ExperienceSection: React.FunctionComponent = () => {
  return (
    <section id="experience">
      <div className="container bg-dark bg-opacity-75 text-light text-opacity-75 p-4">
        <Title
          text="Experience"
          toUpperCase
        />
        <div className="d-flex">
          <h6 className="ms-auto">{getLastUpdatedString(2026, 8, 1, 23)}</h6>
        </div>
        <div>
          <BarTitle
            barLevel={3}
          />
          <div className="timeline">
            <div className="timeline-block">
              <div className="timeline-anchor">
                <div className="timeline-tag">
                  <div className="h5">02/2026–Present</div>
                </div>
                <div className="timeline-title">
                  <h4>Department of Crop and Soil Science, Oregon State University</h4>
                  <h5>Computer Vision Developer</h5>
                </div>
              </div>
              <div className="timeline-content">
                <ul>
                  <li>
                    Built an image tiling pipeline with edge-object handling
                    to standardize weed-detection drone data into unified formats,
                    boosting downstream model mAP50 from 0.664 to a peak 0.769.
                  </li>
                  <li>
                    Configured NAS storage and containerized GPU-accelerated training environments
                    to guarantee reproducible workflows for a 4-person research team.
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline-block">
              <div className="timeline-anchor">
                <div className="timeline-tag">
                  <div className="h5">05/2022–01/2025</div>
                </div>
                <div className="timeline-title">
                  <h4>Pentium Network Technology</h4>
                  <h5>Software Developer</h5>
                </div>
              </div>
              <div className="timeline-content">
                <ul>
                  <li>
                    Owned auth for a PAM platform (FastAPI, PostgreSQL);
                    cut the time to change auth logic from about <b>2 weeks to {"<"}8</b> hours
                    by refactoring a monolithic auth flow into a composable Chain-of-Responsibility pipeline
                    supporting MFA, LDAP, and SSO.
                  </li>
                  <li>
                    Eliminated race conditions in license allocation (previously <b>1–2/week</b>, surfaced in UAT)
                    by designing a Redis-based distributed lock,
                    ensuring atomic license checks across concurrent API and Celery workers.
                  </li>
                  <li>
                    Reduced CI/CD run time from 18 to {"<"}3 minutes
                    by restructuring multi-stage Docker builds with an internal registry,
                    and consolidating DB migrations per test tier.
                  </li>
                  <li>
                    Authored API and schema design docs for team review, and reviewed peers’ designs and code as part of the team’s workflow;
                    also helped reinstate a missed document into the review process.
                  </li>
                  <li>
                    Proposed and launched bi-weekly tech talks, driving knowledge-sharing across a 25+ person cross-functional team.
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline-block">
              <div className="timeline-anchor">
                <div className="timeline-tag">
                  <div className="h5">01/2022–04/2022</div>
                </div>
                <div className="timeline-title">
                  <h4>M800 Taiwan</h4>
                  <h5>Software Engineer</h5>
                </div>
              </div>
              <div className="timeline-content">
                <ul>
                  <li>
                    Built a release-automation dashboard (Gin, React) integrating Jira, Jenkins, and GitLab;
                    cut release effort from <b>60–120 to {"<"}5 minutes</b> and
                    enabling PMs to ship 1–5 daily releases without SRE dependency for a 70+ member team.
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline-block">
              <div className="timeline-anchor">
                <div className="timeline-tag">
                  <div className="h5">10/2020–09/2021</div>
                </div>
                <div className="timeline-title">
                  <h4>LEDA Creative Technology</h4>
                  <h5>Software Engineer</h5>
                </div>
              </div>
              <div className="timeline-content">
                <ul>
                  <li>
                    Built an MQTT-based model deployment pipeline
                    that replaced manual USB transfers to industrial edge devices
                    for customers across food-processing, electronics, and semiconductor industries.
                  </li>
                  <li>
                    Packaged computer vision models into containerized, GPU-accelerated CLI-driven services with customized dataset loaders,
                    enabling users to run training and inference via an AI platform.
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline-block" style={{ display: 'none' }}>
              <div className="timeline-anchor">
                <div className="timeline-tag">
                  <div className="h5">05/2018–08/2020</div>
                  <div className="h6">Intern</div>
                </div>
                <div className="timeline-title">
                  <h4>LEDA-creative Technology LTD.</h4>
                  <h5>Partner</h5>
                </div>
              </div>
              <div className="timeline-content">
                <ol>
                  <li>The edge detection for the cell scaffolds: Algorithm development.</li>
                  <li>Multiple Barcode & QRCode Detector.</li>
                  <li>
                    Refactoring of the source codes of Mask R-CNN by PyTorch: maintainer and
                    developer.
                    <br />
                    <a
                      className="button"
                      href="https://github.com/aragorn1025/mask-rcnn"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span />
                      <span />
                      <span />
                      <span />
                      <i className="bi bi-github" />
                      &nbsp;Here
                    </a>
                  </li>
                  <li>The other cooperative projects that should be confidential.</li>
                </ol>
              </div>
            </div>
            <div className="timeline-block" style={{ display: 'none' }}>
              <div className="timeline-anchor">
                <div className="timeline-tag">
                  <div className="h5">02/2020–06/2020</div>
                </div>
                <div className="timeline-title">
                  <h4>
                    Department of Computer Science & Information Engineering, National Central
                    University, Taiwan
                  </h4>
                  <h5>Teaching Assistant</h5>
                </div>
              </div>
              <div className="timeline-content">
                <ol>
                  <li>To assist the professor to make the course run smoothly.</li>
                  <li>To invigilate the midterm exam, and mark and register scores.</li>
                  <li>To arrange students for the second half of the semester to report papers.</li>
                  <li>
                    To assist students in the course to complete programming assignments, and mark
                    and register scores.
                  </li>
                </ol>
              </div>
            </div>
            <div className="timeline-block" style={{ display: 'none' }}>
              <div className="timeline-anchor">
                <div className="timeline-tag">
                  <div className="h5">04/2017–08/2020</div>
                </div>
                <div className="timeline-title">
                  <h4>
                    Computational Intelligence and Human-Computer Interaction Lab (Professor Mu-Chun
                    Su Lab), Department of Computer Science & Information Engineering, National
                    Central University, Taiwan
                  </h4>
                  <h5>Project Research Assistant</h5>
                </div>
              </div>
              <div className="timeline-content">
                <ol>
                  <li>
                    2018 National Microprocessor Application System Design and Innovation Contest:
                    Staff & Webpage Maintainer
                    <br />
                    <a
                      className="button"
                      href="http://competitionweb.cilab.csie.ncu.edu.tw/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span />
                      <span />
                      <span />
                      <span />
                      <i className="bi bi-globe2" />
                      &nbsp;Here
                    </a>
                  </li>
                  <li>
                    &quot;Baspost - -Correct your basketball posture!&quot;: Teaching Assistant;
                    2019 Get Fresh! Category of Creative Implementation -&nbsp;
                    <b>Merit Award</b>
                    <br />
                    「BasPost - 矯正你的籃球姿勢！」：助教；2019 搶鮮大賽創意實作類 -&nbsp;
                    <b>優選獎</b>
                    <br />
                    <a
                      className="button"
                      href="https://www.getfresh.org.tw/achievement_detail.aspx?No=414"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span />
                      <span />
                      <span />
                      <span />
                      <i className="bi bi-award" />
                      &nbsp;Here
                    </a>
                    <a
                      className="button"
                      href="http://www.ceecs.ncu.edu.tw/NewsDetail.aspx?ID=86&ItemType=NewsListData"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span />
                      <span />
                      <span />
                      <span />
                      <i className="bi bi-award" />
                      &nbsp;Here
                    </a>
                    <a
                      className="button"
                      href="https://www.youtube.com/watch?v=ZUFprEIl7pY"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span />
                      <span />
                      <span />
                      <span />
                      <i className="bi bi-youtube" />
                      &nbsp;Here
                    </a>
                  </li>
                  <li>
                    &quot;Use Generative Adversarial Network to generate realistic mountain
                    terrain&quot;: Teaching Assistant; National Elementary and High Schools Science
                    Fair - the&nbsp;
                    <b>Second Prize</b>
                    <br />
                    「利用生成對抗網路生成擬真的山脈地形」：助教；全國中小學科展 -&nbsp;
                    <b>第二名</b>
                    <br />
                    <a
                      className="button"
                      href="https://www.ntsec.edu.tw/Science-Content.aspx?cat=85&a=6821&fld=&key=&isd=1&icop=10&p=2&sid=16557"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span />
                      <span />
                      <span />
                      <span />
                      <i className="bi bi-award" />
                      &nbsp;Here
                    </a>
                    <a
                      className="button"
                      href="https://github.com/jayin92/pix2pix-terrain-generator"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span />
                      <span />
                      <span />
                      <span />
                      <i className="bi bi-github" />
                      &nbsp;Here
                    </a>
                  </li>
                  <li>
                    &quot;Medicine Placement and Photography Apparatus, Medicine Identification
                    Apparatus, and Medicine Identification System&quot;:&nbsp;
                    <b>Patent</b>
                    &nbsp;co-inventor; 2020 Taiwan Innotech Expo Invention Contest -&nbsp;
                    <b>Gold Medal Adward</b>
                    <br />
                    「藥物投放暨攝影裝置、藥物辨識裝置及藥物辨識系統」：共同發明人；2020
                    台灣創新技術博覽會 -&nbsp;
                    <b>金牌獎</b>
                    <br />
                    <a
                      className="button"
                      href="https://pcm.tipo.gov.tw/PCM2010/PCM/04_web/2020_award.aspx"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span />
                      <span />
                      <span />
                      <span />
                      <i className="bi bi-award" />
                      &nbsp;Here
                    </a>
                    <a
                      className="button"
                      href="https://www.facebook.com/ncucsiefamily/posts/2502938346673890"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span />
                      <span />
                      <span />
                      <span />
                      <i className="bi bi-facebook" />
                      &nbsp;Here
                    </a>
                    <a
                      className="button"
                      href="https://twpat3.tipo.gov.tw/twpatc/twpatkm?!!FRURL202201424"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span />
                      <span />
                      <span />
                      <span />
                      <i className="bi bi-file-earmark-text" />
                      &nbsp;Here
                    </a>
                  </li>
                  <li>
                    &quot;The Application of the Generative Adversarial Network in the Reflection
                    Removal Algorithm for Dashcam Images&quot;: Master Thesis
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
                </ol>
              </div>
            </div>
            <div className="timeline-block" style={{ display: 'none' }}>
              <div className="timeline-anchor">
                <div className="timeline-tag">
                  <div className="h5">07/2014–01/2017</div>
                  <div className="h6">Intern</div>
                </div>
                <div className="timeline-title">
                  <h4>College of Liberal Arts, National Central University, Taiwan</h4>
                  <h5>Network Management</h5>
                </div>
              </div>
              <div className="timeline-content">
                <ol>
                  <li>To assist the office of the College of Liberal Arts with chores.</li>
                  <li>
                    To troubleshoot the computer and network conditions of the College of Liberal
                    Arts.
                  </li>
                  <li>
                    To check and record the network routes of the College of Liberal Arts.
                    (including the first, second and third halls)
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
