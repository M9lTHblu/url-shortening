import { m } from 'framer-motion'
import { css } from 'styled-components'
import styled from 'styled-components/macro'

const variants = {
  visible: (index) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: index * 0.3,
    },
  }),
  hidden: { x: 400, opacity: 0 },
  remove: { x: -300, opacity: 0 },
}

const ShortedContainer = styled(m.li).attrs((props) => ({
  variants: variants,
  custom: props.index,
  initial: 'hidden',
  animate: 'visible',
  exit: 'remove'
}))`
  padding: 10px 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  color: var(--light);
  background-color: var(--gray-dark);
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

export default ShortedContainer
