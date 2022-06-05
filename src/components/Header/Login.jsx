import styled from 'styled-components';
import {Button} from '../Button/Button';

export const Login = () => {
  return (
      <Container>
        <Button size='md' type="link" text='Login' />
        <Button sixe='md' text='Sign Up'/>
      </Container>
  )
}

const Container = styled.div`
  position: relative;
  padding: 1rem 0;
  display: flex;
  flex-direction:column;
  gap:.5rem;
  
  ::before {
    content: '';
    position: absolute;
    top: 0;
    height: 1px;
    width: 100%;
    background-color: var(--gray);
  }
  
  @media (min-width: 767px) {
    ::before {
      height: 0;
    }
    padding: 0;
    flex-direction: row;
    align-items: center;
  }
`;
