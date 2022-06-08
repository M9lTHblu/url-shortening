import styled from 'styled-components/macro';

export const Input = styled.input.attrs({
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
    opacity: .5;
  }
`;
