import styled from 'styled-components/macro';

export const Nav = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  #modal {
    top: 6.5rem;
  }
  
  @media (min-width: 767px) {
    padding-left: 2.5rem;
    ul {
      font-size: 1rem;
      flex-grow: 1;
    }
  }
`;
