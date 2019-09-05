import styled, { createGlobalStyle } from 'styled-components';
import { media } from '../../theme';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: white;
    line-height: 1;
    font-family: Arial, Helvetica, sans-serif, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, Arial, sans-serif;
    word-break: break-word;
    text-transform: uppercase;
    font-weight: 100;
    margin: 0;
    color: rgba(0,0,0,.84);
    font-size: 18px;
    padding: 1em;
    letter-spacing: 0.05em;
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
