import { createClient } from 'contentful';

export { getEntity, delay } from './utils';

export default createClient({
  space: '916jrfyb2d4r', //process.env.CONTENTFUL_SPACE_ID,
  environment: 'master', // process.env.CONTENTFUL_ENVIRONMENT_ID,
  accessToken:
    'e52d6c1ac5bf3bfd1ce3cc537f2e976ec47e13efadb79c0ff8a6246a141ae013', // process.env.CONTENTFUL_ACCESS_TOKEN,
});
