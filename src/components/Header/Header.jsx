import styled from 'styled-components/macro';
import useMatchMedia from '../../hooks/useMatchMedia';
import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import {DesktopNav} from './DesktopNav';
import {MobileNav} from './MobileNav';


export const Header = () => {
  const {isMobile} = useMatchMedia();

  return (
      <Container>
       <Logo/>
        {isMobile ? <MobileNav/> : <DesktopNav/>}
      </Container>
  );
};

const Container = styled.header.attrs({
  className: 'wrapper'
})`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-areas: 'logo nav';
  align-items: center;
  

  @media (min-width: 767px) {
    margin-bottom: 3rem;
  }
`;


