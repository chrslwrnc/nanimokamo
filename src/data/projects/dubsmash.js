export default {
  isFeatured: true,
  project: {
    title: 'Dubsmash',
    url: 'https://dubsmash.com/',
  },
  company: {
    name: 'Dubsmash',
    url: 'http://dubsmash.com/',
  },
  job: {
    title: 'Senior ReactJS Developer (contract)',
    date: 'Aug 2017 - Jan 2018',
  },
  description:
    'I was hired as the lead front-end developer to bring some of Dubsmash’s most popular features from their mobile app to the web. Part of my job was to set up the project tooling and architecture while keeping in mind the on-boarding of more developers in the future.',
  points: [
    {
      title: 'Scalable structure',
      shortBody:
        'Made bootstrapping and maintaining common functionality of seperate apps easier by creating shared utilities.',
      body:
        'I created a scalable structure for the project in order to accommodate the inclusion of various legacy features with new features under one codebase. The site was split in to 4 main apps, and I created a set of shared utilities to make bootstrapping and maintaining common functionality easier.',
    },
    {
      title: 'Bundle size',
      shortBody:
        'Improved loading time by setting up tree-shaking, moving vendor files into an aggressively cached bundle and separating parts of the site into separate bundles based on typical user flows.',
      body:
        'One of the focuses of the project was to have an incredibly small bundle size. I set up tree-shaking using Webpack, moved rarely-updated vendor files in to a separate, more aggressively cached bundle, and separated each individual part of the site into separate bundles based on the most typical user flows.',
    },
    {
      title: 'Render time',
      shortBody:
        'Improved render time by delaying loading of custom fonts and caching parts of state in LocalStorage.',
      body:
        'This was very important for the project as the majority of traffic came from countries with slow internet connections. To achieve a quick render time I wrote a utility to only load the custom fonts after the rest of the scripts had finished executing and cached parts of the state in LocalStorage.',
    },
    {
      title: 'Observables',
      shortBody:
        'Made dealing with asynchronous events simpler through use of <a href="https://github.com/ReactiveX/rxjs">RxJs</a> observables.',
      body:
        'The project required a lot of UI interactions and data manipulation so I chose to implement most of the code using <a href="https://github.com/ReactiveX/rxjs">RxJs</a> in order to make dealing with asynchronous events simpler.',
    },
  ],
  technologies: [
    'javascript',
    'react',
    'redux',
    'typescript',
    'styled-components',
    'rxjs',
    'recompose',
    'node',
    'jest',
    'enzyme',
  ],
};
