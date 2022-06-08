import styled from 'styled-components/macro';
import {Link} from '../Header/Links';

export const LinksGroup = ({title, links}) => {
  return (
      <Container>
        <h4>{title}</h4>
        <ul style={{listStyle: 'none', padding: '.7rem 0 2rem'}}>
          {links.map((link, i) => (
              <li key={i} style={{marginBottom: '.2rem'}}>
                <GroupLink href={'/' + link}>
                  {link}
                </GroupLink>
              </li>
          ))}
        </ul>
      </Container>
  );
};

const Container = styled.div`
  h4 {
    
    color: white;
    line-height: 1;
  }

  @media (min-width: 767px) {
    text-align: left;
  }
`;

const GroupLink = styled(Link)`
  font-size: 1rem;
  color: var(--gray);
  white-space: nowrap;
`;


