import styled from 'styled-components/macro'

export const FormContainer = styled.form`
  position: sticky;
  top: 0;
  z-index: 100;
  padding-top: 10px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas: 'input submit';
  column-gap: 20px;
  background-color: var(--dark);

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'input'
                         'submit';
    row-gap: 20px;
  }
`

export default FormContainer
