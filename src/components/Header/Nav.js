import styled from 'styled-components/macro';

export const Nav = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  #modal {
    top: 6.5rem;
  }

  ul {
    list-style: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  a {
    text-decoration: none;
    color: white;

    :hover {
      color: black;
    }
  }

  @media (min-width: 767px) {
    
    ul {
      flex-grow: 1;
      //padding-left: 3rem;
      flex-direction: row;
    }

    a {
      text-decoration: none;
      color: var(--gray);
    }
    
  }
`;
