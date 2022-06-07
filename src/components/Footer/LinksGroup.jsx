import styled from 'styled-components/macro';
import {ShortenedLink as StyledLink} from '../Header/Links';

export const LinksGroup = ({title, links}) => {
  return (
      <LinksContainer>
        <h4>{title}</h4>
        <ul style={{listStyle: 'none', padding: '.7rem 0 2rem'}}>
          {links.map((link, i) => (
              <li key={i} style={{marginBottom: '.2rem'}}>
                <Link href={'/' + link}>
                  {link}
                </Link>
              </li>
          ))}
        </ul>
      </LinksContainer>
  );
};

const LinksContainer = styled.div`
  h4 {
    
    color: white;
    line-height: 1;
  }

  @media (min-width: 767px) {
    text-align: left;
  }
`;

const Link = styled(StyledLink)`
  font-size: 1rem;
  color: var(--gray);
`;


