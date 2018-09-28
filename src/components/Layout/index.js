import Header from '../Header';
import * as styles from './styles';

export default ({ header, children }) => (
  <>
    <styles.GlobalStyles />
    <styles.Wrapper>
      <Header {...header} />
      {children}
    </styles.Wrapper>
  </>
);
