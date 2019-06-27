import * as styles from './styles';

export default ({
  title,
  name,
  jobTitle,
  socialLinks = [],
  contactLinks = [],
}) => (
  <styles.Wrapper>
    <styles.Section>
      {title && <div>{title}</div>}
      <div>{name}</div>
      <div>{jobTitle}</div>
    </styles.Section>

    <styles.Contact>
      {socialLinks.map((socialLink, i) => (
        <div key={i}>
          <styles.Link as={!socialLink.href && 'span'} href={socialLink.href}>
            {socialLink.text}
          </styles.Link>
        </div>
      ))}
    </styles.Contact>

    <styles.Contact>
      {contactLinks.map((contactLink, i) => (
        <div key={i}>
          <styles.Link
            target="_blank"
            rel="noopener noreferrer"
            href={contactLink.href}
          >
            {contactLink.text}
          </styles.Link>
        </div>
      ))}
    </styles.Contact>
  </styles.Wrapper>
);
