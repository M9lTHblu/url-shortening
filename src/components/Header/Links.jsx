import styled from 'styled-components';

export const Links = () => {
  return (
      <LinksContainer>
        <li><a href="/features">Features</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/resource">Resources</a></li>
      </LinksContainer>
  );
};

const LinksContainer = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  gap: 1.5rem;

  a {
    text-decoration: none;
    color: white;

    :hover {
      color: black;
    }
  }
  
`;

