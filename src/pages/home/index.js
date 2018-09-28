import React from 'react';
import { projects } from '../../data';
import Projects from '../../components/Projects';

export default class extends React.Component {
  static async getInitialProps() {
    return {
      data: {
        projects,
      },
    };
  }

  render() {
    const { data } = this.props;
    if (!data) return 'Loading...';

    return (
      <>
        <Projects projects={data.projects} />
      </>
    );
  }
}
