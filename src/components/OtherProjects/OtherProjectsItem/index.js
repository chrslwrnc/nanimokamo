import React from 'react';
import * as styles from './styles';

const WorkItem = ({ project, company, job, description, points }) => (
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
    </styles.Main>
  </styles.Wrapper>
);

export default WorkItem;
