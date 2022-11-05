import styled from 'styled-components/macro'

const Description = styled.div`
  padding-bottom: 90px;
  font-size: 18px;
  color: var(--text-gray);

  p {
    margin-bottom: 13px;
  }

  @media (max-width: 767px) {
    padding-bottom: 20px;
  }
`

export default Description
