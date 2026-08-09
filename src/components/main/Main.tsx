import React from 'react';

import educationProps from '../../assets/data/Education.json';
import experienceProps from '../../assets/data/Experience.json';
import homeProps from '../../assets/data/Home.json';
import summaryProps from '../../assets/data/Summary.json';

import './Main.css';
import EducationSection, { EducationSectionProps } from './education/EducationSection';
import ExperienceSection, { ExperienceSectionProps } from './experience/ExperienceSection';
import HomeSection, { HomeSectionProps } from './home/HomeSection';
import ProjectsSection from './projects/ProjectsSection';
import SummarySection, { SummarySectionProps } from './summary/SummarySection';

const Main: React.FunctionComponent = () => {
  return (
    <main className="bg-dark bg-opacity-50 text-dark text-opacity-50">
      <HomeSection {...(homeProps as HomeSectionProps)} />
      <SummarySection {...(summaryProps as SummarySectionProps)} />
      <ExperienceSection {...(experienceProps as ExperienceSectionProps)} />
      <EducationSection {...(educationProps as EducationSectionProps)} />
      <ProjectsSection />
    </main>
  );
};

export default Main;
