import styled from 'styled-components/macro';
import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import {Link as StyledLink} from '../Header/Links';
import {
  ReactComponent as Facebook,
} from '../../assets/images/icon-facebook.svg';
import {ReactComponent as Twitter} from '../../assets/images/icon-twitter.svg';
import {
  ReactComponent as Pinterest,
} from '../../assets/images/icon-pinterest.svg';
import {
  ReactComponent as Instagram,
} from '../../assets/images/icon-instagram.svg';

const data = [
  {
    title: 'Features', links: [
      'Link Shortening',
      'Branded Links',
      'Analytics',
    ],
  },
  {
    title: 'Resources', links: [
      'Blog',
      'Developers',
      'Support',
    ],
  },
  {
    title: 'Company', links: [
      'About',
      'Our Team',
      'Careers',
      'Contact',
    ],
  },
];
export const Footer = () => {
  return (
      <footer style={{backgroundColor: 'var(--dark-blue)'}}>
        <Container>
          <WhiteLogo>
            <Logo />
          </WhiteLogo>
          <ul>
            {data.map((item, i) => (
                <LinksGroup key={i} obj={item} />
            ))}
          </ul>
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

const LinksGroup = ({obj}) => {
  return (
      <>
        <Title>{obj.title}</Title>
        <ul style={{listStyle: 'none', padding: '.7rem 0 2rem'}}>
          {obj.links.map((link, i) => (
              <li key={i} style={{marginBottom: '.3rem'}}>
                <Link href={'/' + link}>
                  {link}
                </Link>
              </li>
          ))}
        </ul>
      </>
  );
};

const Container = styled.div.attrs({
  className: 'wrapper',
})`
  text-align: center;
`;

const WhiteLogo = styled.div`
  padding: 2.5rem 0;

  svg {
    path {
      fill: white;
    }

    cursor: pointer;
  }

`;

const Title = styled.h4`
  color: white;
`;

const Link = styled(StyledLink)`
  font-size: 1rem;
  color: var(--gray);
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
`;


