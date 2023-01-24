import React from 'react';

import aboutProps from '../../assets/data/About.json';
import homeProps from '../../assets/data/Home.json';

import './Main.css';
import AboutSection, { AboutSectionProps } from './about/AboutSection';
import Contact from './contact/Contact';
import HomeSection from './home/HomeSection';
import Portfolio from './portfolio/Portfolio';
import Resume from './resume/Resume';
import Skills from './skills/Skills';

const Main: React.FunctionComponent = () => {
  return (
    <main className="bg-dark bg-opacity-50 text-dark text-opacity-50">
      <HomeSection {...homeProps} />
      <AboutSection {...(aboutProps as AboutSectionProps)} />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Main;
