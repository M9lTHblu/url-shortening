import styled from 'styled-components/macro';


export const Links = ({links}) => {
  return (
      <List>
        {links?.map((link, i) =>
            <li key={link + i}><Link href={link}>{link}</Link></li>
        )}
      </List>
  );
};

const List = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: white;

  :hover {
    color: black;
  }

  @media (min-width: 767px) {
    color: var(--gray);
  }
`;
