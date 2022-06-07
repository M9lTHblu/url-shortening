import {useForm} from 'react-hook-form';
import styled from 'styled-components/macro';
import {Button} from '../Button/Button';
import bgd from '../../assets/images/bg-shorten-desktop.svg';
import bgm from '../../assets/images/bg-shorten-mobile.svg';

const rgx = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

export const Form = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (data) => {

  };

  return (
      <Container onSubmit={handleSubmit(onSubmit)}>

        <Input
            type="url"
            error={errors}
            {...register(
                'url', {
                  required: 'Please add a link',
                  pattern: {
                    value: rgx,
                    message: 'Please enter a valid url',
                  },
                })} />
        <Button size="md" variant="square" text="Shorten It!" />
        <Error>
          {errors.url?.message}
        </Error>
      </Container>
  );
};

const Container = styled.form`
  position: relative;
  padding: 1.5rem;
  border-radius: .8rem;
  background-color: var(--violet);
  background-image: url(${bgm});
  background-position: top right -1rem;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 767px) {
    padding: 2.5rem;
    background-image: url(${bgd});
    background-position: left;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: row;
    gap: 1rem;
    
    input {
      flex-grow: 1;
    }
  }
`;

const Input = styled.input.attrs({
  placeholder: 'Shorten a link here...',
})`
  width: 100%;
  padding: .5rem .7rem;
  border: ${({error}) => error.url?.message ? '2px solid var(--red)' : 'none'};
  border-radius: .25rem;
  font-family: var(--family);
  font-size: 1rem;
  color: var(--dark);
  outline: none;
  
  ::placeholder {
    color: ${({error}) => !error.url?.message ? 'var(--gray)' : 'var(--red)'};
  }
`;


const Error = styled.span`
  position: absolute;
  top: 4.5rem;
  font-size: .8rem;
  color: var(--red);
  
  @media (min-width: 767px) {
    top: 6rem;
  }
`
