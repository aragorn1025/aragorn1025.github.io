import React from 'react';

import BarTitle from '../../common/bar-title/BarTitle';
import Title from '../../common/title/Title';
import { getLastUpdatedTime, LastUpdatedTime } from '../../utils/utils';

interface ExperienceItem {
  isHidden?: boolean;
  title: string;
  company: string;
  department: string;
  city: string;
  tags?: string[];
  start: string;
  end: string;
  points: string[];
}

export interface ExperienceSectionProps {
  lastUpdatedTime: LastUpdatedTime;
  items: ExperienceItem[];
}

const ExperienceSection: React.FunctionComponent<ExperienceSectionProps> = ({ lastUpdatedTime, items }) => {
  return (
    <section id="experience">
      <div className="container bg-dark bg-opacity-75 text-light text-opacity-75 p-4">
        <Title text="Experience" toUpperCase />
        <div className="d-flex">
          <h6 className="ms-auto">{getLastUpdatedTime(lastUpdatedTime)}</h6>
        </div>
        <>
          <BarTitle barLevel={3} />
          <div className="timeline">
            {items.map(
              ({ isHidden = false, title, company, department, city, tags, start, end, points }) =>
                !isHidden && (
                  <div className="timeline-block">
                    <div className="timeline-anchor">
                      <div className="timeline-tag">
                        <div className="h5">
                          {start}–{end}
                        </div>
                        {tags !== undefined && tags.map((tag) => <div className="h6">{tag}</div>)}
                      </div>
                      <div className="timeline-title">
                        <h4>{title}</h4>
                        <>
                          {company} – {department} – {city}
                        </>
                      </div>
                    </div>
                    <div className="timeline-content">
                      <ul>
                        {points.map((point) => (
                          <li dangerouslySetInnerHTML={{ __html: point }} />
                        ))}
                      </ul>
                    </div>
                  </div>
                ),
            )}
          </div>
        </>
      </div>
    </section>
  );
};

export default ExperienceSection;
