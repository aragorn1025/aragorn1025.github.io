import React from 'react';

import BarTitle from '../../common/bar-title/BarTitle';
import Title from '../../common/title/Title';
import { getLastUpdatedTime, LastUpdatedTime } from '../../utils/utils';

interface EducationItem {
  degree: string;
  gpa?: string;
  school: string;
  city: string;
  start: string;
  end: string;
  tags?: string[];
  points?: string[];
}

export interface EducationSectionProps {
  lastUpdatedTime: LastUpdatedTime;
  items: EducationItem[];
}

const EducationSection: React.FunctionComponent<EducationSectionProps> = ({ lastUpdatedTime, items }) => {
  return (
    <section id="education">
      <div className="container bg-dark bg-opacity-75 text-light text-opacity-75 p-4">
        <Title text="Education" toUpperCase />
        <div className="d-flex">
          <h6 className="ms-auto">{getLastUpdatedTime(lastUpdatedTime)}</h6>
        </div>
        <div>
          <BarTitle barLevel={3} />
          <div className="timeline mb-3">
            {items.map(({ degree, gpa, school, city, start, end, tags, points }) => (
              <div className="timeline-block">
                <div className="timeline-anchor">
                  <div className="timeline-tag">
                    <div className="h5">
                      {start}–{end}
                    </div>
                    {tags !== undefined && tags.map((tag) => <div className="h6">{tag}</div>)}
                  </div>
                  <div className="timeline-title">
                    <h4>{degree}</h4>
                    <>
                      {gpa !== undefined && `GPA: ${gpa} – `}
                      {school} – {city}
                    </>
                  </div>
                </div>
                {points !== undefined && (
                  <div className="timeline-content">
                    <ul>
                      {points.map((point) => (
                        <li dangerouslySetInnerHTML={{ __html: point }} />
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
