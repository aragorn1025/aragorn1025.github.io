import React from 'react';

import homeProps from '../../assets/data/Home.json';
import summaryProps from '../../assets/data/Summary.json';

import './Main.css';
import ExperienceSection from './experience/ExperienceSection';
import HomeSection from './home/HomeSection';
import PortfolioSection from './portfolio/PortfolioSection';
import SkillsSection from './skills/SkillsSection';
import SummarySection, { SummarySectionProps } from './summary/SummarySection';

const Main: React.FunctionComponent = () => {
  return (
    <main className="bg-dark bg-opacity-50 text-dark text-opacity-50">
      <HomeSection {...homeProps} />
      <SummarySection {...(summaryProps as SummarySectionProps)} />
      <SkillsSection />
      <ExperienceSection />
      <PortfolioSection />
    </main>
  );
};

export default Main;
