import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Header = styled.header``;

export const Section = styled.section`
  margin: 0 0 1em 0;
`;

export const Contact = Section.withComponent('address').extend`
  font-style: normal;
`;
