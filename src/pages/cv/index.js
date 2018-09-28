import React from 'react';
import { projects } from '../../data';
import Projects from '../../components/Projects';

export default class extends React.Component {
  static async getInitialProps() {
    return {
      data: {
        featuredProjects: projects.filter(project => project.isFeatured),
        otherProjects: projects.filter(project => !project.isFeatured),
      },
    };
  }

  render() {
    const { data } = this.props;
    if (!data) return 'Loading...';

    return (
      <>
        <Projects projects={data.featuredProjects} showBody />
        <Projects projects={data.otherProjects} />
      </>
    );
  }
}
