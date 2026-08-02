import React from 'react';

import homeProps from '../../assets/data/Home.json';
import summaryProps from '../../assets/data/Summary.json';

import './Main.css';
import EducationSection from './education/EducationSection';
import ExperienceSection from './experience/ExperienceSection';
import HomeSection from './home/HomeSection';
import ProjectsSection from './projects/ProjectsSection';
import SummarySection, { SummarySectionProps } from './summary/SummarySection';

const Main: React.FunctionComponent = () => {
  return (
    <main className="bg-dark bg-opacity-50 text-dark text-opacity-50">
      <HomeSection {...homeProps} />
      <SummarySection {...(summaryProps as SummarySectionProps)} />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
    </main>
  );
};

export default Main;
