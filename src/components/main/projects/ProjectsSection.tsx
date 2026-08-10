import React from 'react';

import BarTitle from '../../common/bar-title/BarTitle';
import Title from '../../common/title/Title';
import { getLastUpdatedTime, LastUpdatedTime } from '../../utils/utils';

import styles from './ProjectsSection.module.css';

interface ProjectItem {
  isHidden?: boolean;
  name: string;
  image: string;
  description: string;
  linkIcon?: string;
  link: {
    icon?: string;
    reference: string;
    text?: string;
  };
}

export interface ProjectSectionProps {
  lastUpdatedTime: LastUpdatedTime;
  items: ProjectItem[];
}

const ProjectsSection: React.FunctionComponent<ProjectSectionProps> = ({ lastUpdatedTime, items }) => {
  return (
    <section id="projects">
      <div className="container bg-dark bg-opacity-75 text-light text-opacity-75 p-4">
        <Title text="Projects" toUpperCase />
        <div className="d-flex">
          <h6 className="ms-auto">{getLastUpdatedTime(lastUpdatedTime)}</h6>
        </div>
        <>
          <BarTitle barLevel={3} />
          <div className="row g-3">
            {items.map(
              ({
                isHidden = false,
                name,
                image,
                description,
                link: { icon: linkIcon = 'globe2', reference: linkReference, text: linkText = 'More Details' },
              }) =>
                !isHidden && (
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className={`${styles.card} card text-center`}>
                      <img src={`/images/projects/${image}`} className="card-img-top" alt={name} />
                      <div className={`${styles.cardBody} card-body`}>
                        <h5 className={`${styles.cardTitle} card-title`}>{name}</h5>
                        <p className={`${styles.cardText} card-text`}>
                          {description}
                          <br />
                          <br />
                          <br />
                        </p>
                        <a
                          href={linkReference}
                          target="_blank"
                          className={`${styles.cardButton} btn`}
                          rel="noopener noreferrer"
                        >
                          <i className={`bi bi-${linkIcon}`} />
                          &nbsp;{linkText}
                        </a>
                      </div>
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

export default ProjectsSection;
