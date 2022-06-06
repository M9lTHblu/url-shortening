import styled from 'styled-components';
import {Button} from '../Button/Button';

export const Login = ({btnSize = ''}) => {
  return (
      <Container>
        <Button  $style="link" text="Login" />
        <Button size={btnSize} text="Sign Up" />
      </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: .5rem;

  

  ::before {
    content: '';
    position: absolute;
    top: 0;
    height: 1px;
    width: 100%;
    background-color: var(--gray);
  }
  
  @media(max-width: 767px) {
    & :nth-child(1) {
      color: white;
    }
  }

  @media (min-width: 767px) {
    padding: 0;
    flex-direction: row;
    align-items: center;

    ::before {
      height: 0;
    }
  }
`;
