import React from 'react';

import aboutProps from '../../assets/data/About.json';
import homeProps from '../../assets/data/Home.json';

import './Main.css';
import AboutSection, { AboutSectionProps } from './about/AboutSection';
import ContactSection from './contact/ContactSection';
import HomeSection from './home/HomeSection';
import PortfolioSection from './portfolio/PortfolioSection';
import ResumeSection from './resume/ResumeSection';
import SkillsSection from './skills/SkillsSection';

const Main: React.FunctionComponent = () => {
  return (
    <main className="bg-dark bg-opacity-50 text-dark text-opacity-50">
      <HomeSection {...homeProps} />
      <AboutSection {...(aboutProps as AboutSectionProps)} />
      <SkillsSection />
      <ResumeSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
};

export default Main;
