import { css } from 'styled-components'
import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  min-height: 100%;
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: normal;
  background-color: black;
  display: flex;
  flex-direction: column;
`
export const Main = styled.main`
  margin: 0 auto;
  padding: 0 30px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    * {
      flex:1 0;
    }
  }
`
export const Title = styled.h1`
  padding: 120px 0 40px;
  font-size: 38px;
  line-height: 34px;
  color: white;
  @media (max-width: 767px) {
    padding: 40px 0 20px;
  }
`
export const Description = styled.div`
  padding-bottom: 90px;
  font-size: 18px;
  color: #999999;
  p {
    margin-bottom: 13px;
  }
  @media (max-width: 767px) {
    padding-bottom: 20px;
  }
`

// Form
export const StyledForm = styled.form`
  position: sticky;
  top: 0;
  z-index: 100;
  padding-top: 10px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas: 'input submit';
  column-gap: 20px;
  background-color: black;
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'input'
                         'submit';
    row-gap: 20px;
  }
`
export const Label = styled.label`
  position: relative;
`
export const Input = styled.input`
  grid-area: input;
  width: 100%;
  padding: 16px 20px;
  border: 1px solid rgba(228, 228, 228, 0.6);
  border-radius: 5px;
  font-size: 15px;
  line-height: 18px;
  color: white;

  &::placeholder {
    color: var(--text-muted);
  }

  ${({ isValid }) => !isValid && css`
    border-color: crimson;
  `}
`
export const Submit = styled.button`
  height: 50px;
  grid-area: submit;
  padding: 14px 0;
  border-radius: 5px;
  font-size: 16px;
  line-height: 1.3;
  color: #FFFFFF;
  background: #6979F8;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ isValid }) => isValid}
`
export const Error = styled.span`
  position: absolute;
  left: 10px;
  bottom: -18px;
  font-size: 13px;
  color: crimson;
`

// Shortens
export const List = styled.ul`
  padding: 50px 0 0;
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
  @media (max-width: 767px) {
    padding: 30px 0 0;
  }
`
export const StyledShortedItem = styled.article`
  flex: 1 0;
  padding: 10px 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  color: white;
  background-color: rgba(40, 38, 38, 0.4);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  ${({ $active }) => $active && css`
    box-shadow: 0 0 2px 2px inset var(--primary);
  `};
  
  @media (max-width: 767px) {
    flex-direction: column;
  }
`
export const OriginLink = styled.div`
  color: var(--text-muted);
  overflow-wrap: anywhere;

  ::selection {
    background: #000000;
    color: white;
  }
`
export const Copy = styled(Submit)`
  padding: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 16px;
`

export const Delete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
