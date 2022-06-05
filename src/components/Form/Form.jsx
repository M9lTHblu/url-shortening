import styled from 'styled-components/macro';
import {Button} from '../Button/Button';
import bgd from '../../assets/images/bg-shorten-desktop.svg'
import bgm from '../../assets/images/bg-shorten-mobile.svg'

export const Form = () => {
  return (
      <Container>
        <Input type="url" />
        <Button size='lg' variant="square" text="Shorten It!" />
      </Container>
  );
};

const Container = styled.form`
  padding: 1.5rem;
  border-radius: .8rem;
  background-color: var(--violet);
  background-image: url(${bgm});
  background-position: top right -1rem;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 767px) {
    padding: 3rem;
    background-image: url(${bgd});
    background-repeat: no-repeat;
    
    display: flex;
    flex-direction: row;
    
    input {
      flex-grow: 1;
    }
  }
`;

const Input = styled.input.attrs({
  placeholder: 'Shorten a link here...',
})`
  width: 100%;
  padding: .5rem;
  border: none;
  border-radius: .25rem;
  font-family: var(--family);
  font-size: 1rem;
  outline: none;
`;
