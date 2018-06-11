export default {
  isFeatured: true,
  project: {
    title: 'Vvatch.tv',
    url: 'https://vvatch.tv/',
  },
  company: {
    name: 'Vvatch.tv',
    url: 'http://vvatch.tv/',
  },
  job: {
    title: 'Lead Developer',
    date: 'Jul 2015 – Aug 2016',
  },
  description:
    'I lead the redevelopment of a social platform for creating and watching video channels from a prototype to a full product. My job was to analyse the existing prototype and collaborate on redefining and redeveloping a new MVP including an accompanying Chrome extension.',
  points: [
    {
      title: 'Time vs effort',
      body:
        'In order to get the best compromise of time and effort vs output, I chose to use Meteor as the development framework. It allowed us to quickly develop features on the both the back and frontend using isomorphic code, provided realtime updates through an abstraction using websockets and had an ease-to-use API for communication with a database.',
    },
    {
      title: 'Microservice architecture',
      body:
        'The project lent itself to a microservice architecture. I encouraged creating everything in well-defined packages of code that could, in the future, be extracted and deployed to separately managed services. I was not able to achieve a full microservice architecture before I left the project, but I feel that I laid the foundations for this to be easily expanded upon in the future.',
    },
  ],
  technologies: ['javascript', 'react', 'meteor', 'sass', 'node', 'jest'],
};
