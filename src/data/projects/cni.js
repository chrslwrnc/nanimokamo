export default {
  isFeatured: true,
  project: {
    title: 'Condé Nast',
  },
  company: {
    name: 'YLD',
    url: 'http://yld.io/',
  },
  job: {
    title: 'Senior Software Engineer (contract)',
    date: 'Apr 2018 - Sep 2018',
  },
  description:
    'I was hired by YLD to work at Conde Nast International on the redevelopment of their entire catalogue of brands –  Vogue, GQ, Wired, etc – bringing them onto a single platform. The project had previously suffered due to some poor technical decisions. As a result, part of my role was to mentor the junior developers (through pair programming and code reviews) and help steer the technical decisions.',
  points: [
    {
      title: 'Clean code',
      shortBody:
        'Made the code more flexible and maintainable by encouraging use of design patterns and SOLID principles.',
      body:
        'I encouraged the use of design patterns and SOLID principles in order to make the code more flexible and maintainable. Adopting these also helped streamline the on-boarding of new members of the team.',
    },
    {
      title: 'Static typing',
      shortBody:
        'Reduced errors, made refactoring easier and improved domain modelling by using <a href="https://www.typescriptlang.org/">TypeScript</a>.',
      body:
        'I added <a href="https://github.com/facebook/flow">Flow</a> so that we could begin using static typing. I made the decision to use Flow over TypeScript as it can be incrementally adopted a lot easier. I felt that this really benefited the team as it reduced errors, greatly aided refactoring and improved domain modelling - especially for large configuration files.',
    },
    {
      title: 'Colocated tests',
      shortBody:
        'Made tests easier to write, find and update by colocating them.',
      body:
        'I proposed that we start colocating tests. Previous to this, the tests were scattered across an extremely deep `test` folder. Colocating tests with the code they were testing made it a lot easier to find untested code, and make sure it was kept up to date.',
    },
    {
      title: 'Code formatting',
      shortBody:
        'Eliminated debates over linting rules by integrating <a href="https://github.com/prettier/prettier">Prettier</a>. Added benefit of helping developers learn to naturally write their code in a more readable way.',
      body:
        'The codebase already had linting set up, but there were a lot of disagreements over which rules should be used. I introduced <a href="https://github.com/prettier/prettier">Prettier</a> to eliminate the need for debates over this while also helping developers to learn to naturally write their code in a more readable way.',
    },
    {
      title: 'Theming',
      shortBody:
        'Removed blocking issues around theming and allowed components to be developed in isolation by introducing <a href="https://github.com/styled-components/styled-components">styled-components</a>.',
      body:
        'One of the technical decisions that needed rethinking was theming. The project had been set up to use CSS modules with CSS variables. However, this was not flexible enough for the various constraints. As a solution I introduced <a href="https://github.com/styled-components/styled-components">styled-components</a> to the team. This instantly removed several blocking issues and allowed the components to be developed in isolation far more easily.',
    },
  ],
  technologies: [
    'javascript',
    'react',
    'typescript',
    'styled-components',
    'apollo',
    'node',
    'jest',
    'enzyme',
    'cypress',
    'percy',
  ],
};
