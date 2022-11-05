import { memo } from 'react'
import Copy from './Copy'
import ShortedContainer from './ShortedContainer'
import LongLink from './LongLink'
import Remove from './Remove'

const Shorted = ({ index, link, active, setActive }) => {
  const { id, longLink, short } = link
  const handleClick = (id) => () => {
    setActive(id)
  }

  return (
    <ShortedContainer
      index={index}
      $active={active === id}
      onClick={handleClick(id)}
    >
      <LongLink>{longLink}</LongLink>
      <Copy shorted={short}/>
      <Remove id={id} active={active}/>
    </ShortedContainer>
  )
}

export default memo(Shorted)
