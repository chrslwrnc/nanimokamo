import React from 'react';
import * as styles from './styles';

const renderPoint = ({ title, body }, i) => (
  <styles.PointsItem key={i}>
    <styles.PointsItemTitle>{title}</styles.PointsItemTitle>.{' '}
    <styles.PointsItemBody dangerouslySetInnerHTML={{ __html: body }} />
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
      <styles.Link
        as={!project.url && 'span'}
        {...(project.url
          ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        <styles.Arrow>→</styles.Arrow>
        {project.title}
      </styles.Link>
    </styles.Header>
    <styles.Main>
      <styles.JobWrapper>
        {job.title} &middot;{' '}
        <a href={company.url} target="_blank" rel="noopener noreferrer">
          {company.name}
        </a>
        <br />
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
