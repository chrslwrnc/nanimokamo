import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Header = styled.header``;

export const Section = styled.section`
  margin: 0 0 1em 0;
`;

export const Contact = styled(Section).attrs({
  as: 'address',
})`
  font-style: normal;
`;

export const Link = styled.a``;
