import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Spin as Hamburger} from 'hamburger-react';
import useMatchMedia from '../../hooks/useMatchMedia';
import {ReactComponent as Logo} from '../../assets/images/logo.svg';

import {Wrapper} from '../shared/Wrapper';
import {Links} from './Links';
import {Login} from './Login';
import {Modal} from './Modal';

export const Header = () => {
  const {isMobile} = useMatchMedia();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);

  return (
      <header>
        <HeaderWrapper>
          <Logo />
          <Nav>
            {isMobile ? (
                <>
                  <Hamburger
                      toggled={isOpen}
                      toggle={setOpen}
                      color={'hsl(257, 7%, 63%)'}
                      size={30}
                      label="Show menu"
                      hideOutline={false}
                  />
                  <Modal isOpen={isOpen}>
                    <Links />
                  </Modal>
                </>
            ) : (
                <>
                  <Links />
                  <Login />
                </>
            )}
          </Nav>
        </HeaderWrapper>
      </header>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;

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
      padding-left: 3rem;
      flex-direction: row;
    }

    a {
      text-decoration: none;
      color: var(--gray);
    }

    button {
      font-weight: var(--weight-normal);
    }
  }
`;

const HeaderWrapper = styled(Wrapper)`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
`;
