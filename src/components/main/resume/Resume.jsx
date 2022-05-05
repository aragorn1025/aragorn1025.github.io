import React from 'react';

import { getLastUpdatedString } from '../../utils/utils';

function Resume() {
  return (
    <section id="resume">
      <div className="container bg-dark bg-opacity-75 text-light text-opacity-75 p-4">
        <div className="title">
          <h1 className="mx-auto">Resume</h1>
        </div>
        <div className="d-flex">
          <h6 className="ms-auto">{getLastUpdatedString(2022, 4, 12, 23)}</h6>
        </div>
        <div>
          <div className="title">
            <h3>Education</h3>
            <div className="bar bar-h-3" />
          </div>
          <div className="timeline mb-3">
            <div className="timeline-block">
              <div className="timeline-anchor">
                <div className="timeline-tag">
                  <div className="h5">2013 / 09 ~ 2018 / 06</div>
                </div>
                <div className="timeline-title">
                  <h4>Bachelor</h4>
                </div>
              </div>
              <div className="timeline-content">
                <h5>
                  Department of Computer Science & Information Engineering, National Central
                  University, Taiwan
                </h5>
              </div>
            </div>
            <div className="timeline-block">
              <div className="timeline-anchor">
                <div className="timeline-tag">
                  <div className="h5">2018 / 09 ~ 2020 / 07</div>
                </div>
                <div className="timeline-title">
                  <h4>Master</h4>
                </div>
              </div>
              <div className="timeline-content">
                <h5>
                  Department of Computer Science & Information Engineering, National Central
                  University, Taiwan
                </h5>
                <ol>
                  <li>
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
                </ol>
              </div>
            </div>
          </div>
          <div className="title">
            <h3>Experience</h3>
            <div className="bar bar-h-3" />
          </div>
          <div className="timeline">
            <div className="timeline-block">
              <div className="timeline-anchor">
                <div className="timeline-tag">
                  <div className="h5">2014 / 07 ~ 2017 / 01</div>
                  <div className="h6">Intern</div>
                </div>
                <div className="timeline-title">
                  <h4>Network Management</h4>
                </div>
              </div>
              <div className="timeline-content">
                <h5>College of Liberal Arts, National Central University, Taiwan</h5>
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
            <div className="timeline-block">
              <div className="timeline-anchor">
                <div className="timeline-tag">
                  <div className="h5">2017 / 04 ~ 2020 / 08</div>
                </div>
                <div className="timeline-title">
                  <h4>Project Research Assistant</h4>
                </div>
              </div>
              <div className="timeline-content">
                <h5>
                  Computational Intelligence and Human-Computer Interaction Lab (Professor Mu-Chun
                  Su Lab), Department of Computer Science & Information Engineering, National
                  Central University, Taiwan
                </h5>
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
            <div className="timeline-block">
              <div className="timeline-anchor">
                <div className="timeline-tag">
                  <div className="h5">2018 / 05 ~ 2020 / 08</div>
                  <div className="h6">Intern</div>
                </div>
                <div className="timeline-title">
                  <h4>Partner</h4>
                </div>
              </div>
              <div className="timeline-content">
                <h5>LEDA-creative Technology LTD.</h5>
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
            <div className="timeline-block">
              <div className="timeline-anchor">
                <div className="timeline-tag">
                  <div className="h5">2020 / 02 ~ 2020 / 06</div>
                </div>
                <div className="timeline-title">
                  <h4>Teaching Assistant</h4>
                </div>
              </div>
              <div className="timeline-content">
                <h5>
                  Department of Computer Science & Information Engineering, National Central
                  University, Taiwan
                </h5>
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
            <div className="timeline-block">
              <div className="timeline-anchor">
                <div className="timeline-tag">
                  <div className="h5">2020 / 10 ~ 2021 / 09</div>
                </div>
                <div className="timeline-title">
                  <h4>Data Scientist / Software Engineer</h4>
                </div>
              </div>
              <div className="timeline-content">
                <h5>LEDA-creative Technology LTD.</h5>
                <ol>
                  <li>
                    To develop and maintain the company&apos;s cloud AI training platform product.
                    It&apos;s necessary to discuss the development requirements with the project
                    manager, and communicate with the frontend engineers for planning API. After
                    that, I should combine the main algorithms and the backend framework.
                    Furthermore, it&apos;s also important to master technologies such as database,
                    Docker / Kubernetes virtualization, GPU / CUDA acceleration, so that can
                    schedule an AI training project through simple operations when using this
                    platform.
                  </li>
                  <li>
                    To develop and maintain a few micro-service tools. In addition to APIs for
                    developers, it also provides a user-friendly UI / UX when necessary.
                  </li>
                  <li>
                    To mentor interns (most of them don&apos;t know how to write a program at the
                    beginning) to research special topic. The content includes the basic concepts of
                    AI, micro-services, simple image processing, etc. I also combined their idea
                    with backend / frontend frameworks, so that they can not only implement their
                    special topics but also learn the software development.
                    <br />
                    <a
                      className="button"
                      href="https://www.youtube.com/playlist?list=PLauXCvRn7tv75mc3mJQA9ApX67nM1dad8"
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
                    To assist project managers to develop various projects. It&apos;s important to
                    discuss with them for meeting customer needs as much as possible.
                  </li>
                </ol>
              </div>
            </div>
            <div className="timeline-block">
              <div className="timeline-anchor">
                <div className="timeline-tag">
                  <div className="h5">2022 / 01 ~ 2022 / 04</div>
                </div>
                <div className="timeline-title">
                  <h4>Software Engineer</h4>
                </div>
              </div>
              <div className="timeline-content">
                <h5>M800 Taiwan Limited</h5>
                <ol>
                  <li>
                    To develop and maintain internal webpages, one of which is to assist product
                    managers more easily to deploy and release on the page according to the internal
                    git flow. The main programming languages used include Go (Gin) and JavaScript
                    (React, Vue.js).
                  </li>
                </ol>
              </div>
            </div>
            <div className="timeline-block">
              <div className="timeline-anchor">
                <div className="timeline-tag mb-0" />
                <div className="timeline-title">
                  <h3 className="">To be continue...</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
