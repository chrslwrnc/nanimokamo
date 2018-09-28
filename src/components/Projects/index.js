import React from 'react';
import * as styles from './styles';
import Project from './Project';

const Projects = ({ projects = [], showBody = false }) => (
  <styles.Wrapper>
    {projects.map((props, i) => (
      <Project key={i} {...props} showBody={showBody} />
    ))}
  </styles.Wrapper>
);

export default Projects;
