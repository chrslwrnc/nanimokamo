import styled from 'styled-components';

export const Wrapper = styled.li``;

export const Header = styled.header``;

export const Arrow = styled.div`
  display: inline-block;
  width: 1.15em;
`;

export const Link = styled.a``;

export const Main = styled.div``;

export const JobWrapper = styled.div``;

export const Body = styled.div`
  margin-top: 1em;
  text-transform: initial;
  font-weight: 400;
  line-height: 1.4;
  /* letter-spacing: 0.015em; */

  a {
    font-weight: 500;
    border-bottom: 1px dotted currentColor;
  }
`;

export const Points = styled.ul`
  margin-top: 1em;
`;

export const PointsItem = styled.li`
  border-left: 2px solid black;
  padding-left: 1em;

  &:not(:last-child) {
    margin-bottom: 1em;
  }
`;

export const PointsItemTitle = styled.strong``;

export const PointsItemBody = styled.span``;

export const Tech = styled.ul`
  margin-top: 2em;
  max-width: 28em;
`;

export const TechItem = styled.li`
  display: inline-block;
  border: 1px solid currentColor;
  margin: 0 0.5em 0.5em 0;
  font-size: 75%;
  border-radius: 5px;
  padding: 0.2em 0.5em;
`;

export const JobTitle = styled.div`
  font-style: italic;
`;
