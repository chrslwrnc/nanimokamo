import styled, { createGlobalStyle } from 'styled-components';
import { media } from '../../theme';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: white;
    line-height: 1;
    font-family: 'Rubik', Arial, Helvetica, sans-serif, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, Arial, sans-serif;
    word-break: break-word;
    font-weight: 400;
    margin: 0;
    color: rgba(0,0,0,.84);
    font-size: 3.5vw;
    padding: 1.5em;
    line-height: 120%;
    /* letter-spacing: 0.05em; */
  }

  a {
    position: relative;
  }

  a:after {
    content: '➜';
    transform: rotate(-43.725deg);
    display: inline-block;
    font-weight: bold;
    position: relative;
    bottom: 0.5em;
    font-size: 75%;
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
