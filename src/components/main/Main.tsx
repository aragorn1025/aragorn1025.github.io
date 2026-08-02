import React from 'react';

import homeProps from '../../assets/data/Home.json';
import summaryProps from '../../assets/data/Summary.json';

import './Main.css';
import HomeSection from './home/HomeSection';
import PortfolioSection from './portfolio/PortfolioSection';
import ResumeSection from './resume/ResumeSection';
import SkillsSection from './skills/SkillsSection';
import SummarySection, { SummarySectionProps } from './summary/SummarySection';

const Main: React.FunctionComponent = () => {
  return (
    <main className="bg-dark bg-opacity-50 text-dark text-opacity-50">
      <HomeSection {...homeProps} />
      <SummarySection {...(summaryProps as SummarySectionProps)} />
      <SkillsSection />
      <ResumeSection />
      <PortfolioSection />
    </main>
  );
};

export default Main;
