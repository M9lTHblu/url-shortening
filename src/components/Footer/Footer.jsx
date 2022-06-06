import styled from 'styled-components/macro';
import data from './footerData'
import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import {ReactComponent as Facebook} from '../../assets/images/icon-facebook.svg';
import {ReactComponent as Twitter} from '../../assets/images/icon-twitter.svg';
import {ReactComponent as Pinterest} from '../../assets/images/icon-pinterest.svg';
import {ReactComponent as Instagram} from '../../assets/images/icon-instagram.svg';
import {LinksGroup} from './LinksGroup';


export const Footer = () => {
  return (
      <footer style={{backgroundColor: 'var(--dark-blue)'}}>
        <Container>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <GroupsContainer>
            {data.map((item, i) => (
                <LinksGroup key={i} {...item} />
            ))}
          </GroupsContainer>
          <IconsContainer>
            <Facebook />
            <Twitter />
            <Pinterest />
            <Instagram />
          </IconsContainer>
        </Container>
      </footer>
  );
};

const Container = styled.div.attrs({
  className: 'wrapper',
})`
  padding: 2.5rem 0;
  text-align: center;

  @media (min-width: 767px) {
    padding-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const GroupsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 767px) {
    margin-left: 9rem;
    flex-direction: row;
    gap: 5rem;
  }
`;

const LogoContainer = styled.div`

  svg {
    path {
      fill: white;
    }
    cursor: pointer;
  }

  @media (min-width: 767px) {
    padding: 0;
  }
`;

const IconsContainer = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  svg {
    cursor: pointer;
  }

  @media (min-width: 767px) {
    padding: 0;
  }
`;


