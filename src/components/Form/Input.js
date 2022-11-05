import styled from 'styled-components/macro'

const Input = styled.input`
  grid-area: input;
  width: 100%;
  padding: 16px 20px;
  border: 1px solid ${({ isValid }) => isValid
          ? 'var(--border-color)'
          : 'var(--danger)'};
  border-radius: 5px;
  font-size: 15px;
  line-height: 18px;
  color: var(--light);

  &::placeholder {
    color: var(--text-muted);
  }
`

export default Input
