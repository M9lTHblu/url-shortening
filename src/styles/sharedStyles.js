import styled from 'styled-components/macro'

export const Btn = styled.button.attrs(() => ({
  type: 'submit',
}))`
  height: 50px;
  grid-area: submit;
  padding: 14px 0;
  border-radius: 5px;
  font-size: 16px;
  line-height: 1.3;
  color: var(--light);
  background: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ isValid }) => isValid}
`
