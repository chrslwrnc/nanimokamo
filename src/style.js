import { injectGlobal } from 'styled-components';

export default injectGlobal`
  html, body {
    font-size: 46px;
  }
    
  body {
    background-color: white;
    line-height: 1;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, Arial, sans-serif;
    font-size: 46px;
    text-transform: uppercase;
    word-break: break-word;
    font-weight: 900;
    margin: 0;
    color: rgba(0,0,0,.84);
    padding: 0.75em;
  }

  a:hover {
    color: #0004ff;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    font-size: 100%;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
