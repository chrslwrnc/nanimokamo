export default {
  isFeatured: true,
  project: {
    title: 'Mobula',
  },
  company: {
    name: 'Grabble',
    url: 'http://grabble.com/',
  },
  job: {
    title: 'Lead UI Engineer (contract)',
    date: 'Apr 2017 - Aug 2017',
  },
  description:
    'I lead the development of a bespoke CMS for apps and social channels with a focus on e-commerce. The team was faced with frequently changing goals as a result of being in a new market. This required a close collaboration between iOS, Android and design in order to react to these changes as efficiently as possible. I was also responsible for mentoring a junior developer.',
  points: [
    {
      title: 'API abstraction',
      shortBody:
        'Allowed simultaeneous development of back + frontend by creating an API abstraction for development.',
      body:
        'Due to tight time constraints, the API was initially being developed simultaneously to the frontend. To make the transition to the real API easier, I agreed the architecture beforehand with the backend developer and created an API abstraction that allowed me to simply swap out the data source once the real API was ready.',
    },
    {
      title: 'Functional programming',
      shortBody:
        'Simplified testing and encouraged code reuse by using a functional programming style.',
      body:
        'One of my main aims was to simplify testing and encourage code reuse for the project, so I chose to start using a functional programming style. This helped with my decision to develop the project in feature buckets, which enabled us to get features out more quickly to test, such as the media library and user management, and then incrementally add more features.',
    },
    {
      title: 'Feature buckets',
      shortBody:
        'Enabled fast shipping of isolated features by developing project in feature buckets.',
    },
    {
      title: 'State management',
      shortBody:
        'Made debugging easier by using Redux to manage both data and UI state.',
      body:
        'I chose to manage the entire application state, both data and UI, using Redux. This made debugging any issues much easier as it was simple to see both how the state was updated and how the data then flowed through the application. It made it far easier to generate computed state.',
    },
  ],
  technologies: [
    'javascript',
    'react',
    'redux',
    'styled-components',
    'typescript',
    'rxjs',
    'recompose',
    'node',
    'jest',
    'enzyme',
  ],
};
