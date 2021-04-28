import styled from 'styled-components';

export const Wrapper = styled.ul`
background-color: var(--color);
margin: 0 -1.5em -1.5em -1.5em;
color: var(--backgroundColor);
padding: 1em 1.5em 1.5em 1.5em;

  > *:not(:last-child) {
    margin-bottom: 1em;
  }
`;
