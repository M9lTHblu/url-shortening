import styled from 'styled-components/macro'

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

export default Main
