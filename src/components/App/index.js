import React from 'react';
import Helmet from 'react-helmet';
import FeaturedProjects from 'components/Featured';
import OtherProjects from 'components/OtherProjects';
import * as styles from './styles';

const ga = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-59417905-1');
`;

const App = ({
  page = 'home'
}) => (
  <styles.Wrapper>
    <Helmet>
      <title>何もかも</title>
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-59417905-1" />
      <script>{ga}</script>
    </Helmet>
    <styles.Header>
      <styles.Section>
        何もかも
        <br /> Chris Lawrence
        <br /> Senior developer (Contract)
      </styles.Section>

      <styles.Contact>
        <a href="tel:44 7922 588366">+447922588366</a>
        <br />
        <a href="mailto:chris@nanimokamo.com">chris@nanimokamo.com</a>
      </styles.Contact>

      <styles.Contact>
        <a target="_blank" rel="noopener noreferrer" href="http://github.com/nanimokamo">
          GitHub
        </a>
        <br />
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chrslwrnc/">
          LinkedIn
        </a>
      </styles.Contact>
    </styles.Header>

    <FeaturedProjects />

    <OtherProjects />
  </styles.Wrapper>
);

export default App;
