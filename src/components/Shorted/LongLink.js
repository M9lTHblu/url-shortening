import styled from 'styled-components/macro'

const LongLink = styled.div`
  color: var(--text-muted);
  overflow-wrap: anywhere;

  ::selection {
    color: var(--light);
  }

  @media (min-width: 768px) {
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

export default LongLink
