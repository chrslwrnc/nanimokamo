import React from 'react';
import * as styles from './styles';

const renderPoint = ({ title, shortBody }, i) => (
  <styles.PointsItem key={i}>
    {/* <styles.PointsItemTitle>{title}</styles.PointsItemTitle>.{' '} */}
    <styles.PointsItemBody dangerouslySetInnerHTML={{ __html: shortBody }} />
  </styles.PointsItem>
);

const Project = ({
  project,
  company,
  job,
  description,
  points,
  technologies,
  showBody = false,
}) => (
  <styles.Wrapper>
    <styles.Header>
      <strong>
        <styles.Link
          as={!project.url && 'span'}
          {...(project.url
            ? {
                href: project.url,
                target: '_blank',
                rel: 'noopener noreferrer',
              }
            : {})}
        >
          {/* <styles.Arrow>→</styles.Arrow> */}
          {project.title}
        </styles.Link>
      </strong>{' '}
      {company.name !== project.title && (
        <>
          {company.name && company.url ? (
            <>
              with{' '}
              <a href={company.url} target="_blank" rel="noopener noreferrer">
                {company.name}
              </a>
            </>
          ) : (
            <>with {company.name}</>
          )}
        </>
      )}
    </styles.Header>
    <styles.Main>
      <styles.JobWrapper>
        {/* <styles.JobTitle>{job.title}</styles.JobTitle> */}
        <time>{job.date}</time>
      </styles.JobWrapper>
      {showBody && (
        <styles.Body>
          {description}

          <styles.Points>{points.map(renderPoint)}</styles.Points>

          <styles.Tech>
            {technologies.map((tech, i) => (
              <styles.TechItem key={i}>{tech}</styles.TechItem>
            ))}
          </styles.Tech>
        </styles.Body>
      )}
    </styles.Main>
  </styles.Wrapper>
);

export default Project;
