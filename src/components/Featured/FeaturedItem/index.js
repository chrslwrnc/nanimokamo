import React from 'react';
import * as styles from './styles';

const renderPoint = ({ title, body }, i) => (
  <styles.PointsItem key={i}>
    <styles.PointsItemTitle>{title}</styles.PointsItemTitle>.{' '}
    <styles.PointsItemBody dangerouslySetInnerHTML={{ __html: body }} />
  </styles.PointsItem>
);

const WorkItem = ({ project, company, job, description, points, technologies }) => (
  <styles.Wrapper>
    <styles.Header>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <styles.Arrow>→</styles.Arrow>
        {project.title}
      </a>
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
      <styles.Body>
        {description}

        <styles.Points>{points.map(renderPoint)}</styles.Points>

        <styles.Tech>
          {technologies.map((tech, i) => <styles.TechItem key={i}>{tech}</styles.TechItem>)}
        </styles.Tech>
      </styles.Body>
    </styles.Main>
  </styles.Wrapper>
);

export default WorkItem;
