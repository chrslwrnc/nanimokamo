import styled, { createGlobalStyle } from 'styled-components';
import { media } from '../../theme';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: white;
    line-height: 1;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, Arial, sans-serif;
    word-break: break-word;
    text-transform: uppercase;
    font-weight: 900;
    margin: 0;
    color: rgba(0,0,0,.84);
    font-size: 28px;
    padding: 0.5em;

    ${media('small')`
      font-size: 36px;
    `}

    ${media('medium')`
      font-size: 40px;
    `}

    ${media('large')`
      font-size: 46px;
    `}

    ${media('xlarge')`
      font-size: 50px;
    `}

    ${media('xxlarge')`
      font-size: 56px;
    `}
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

export const Wrapper = styled.main``;
