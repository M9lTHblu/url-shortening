import Shorted from 'components/Shorted/Shorted'
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import ListContainer from './ListContainer'

export default function List () {
  const { items } = useSelector(state => state.links)
  const [active, setActive] = useState('')
  console.count('render list')


  return (
    <ListContainer>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {
            items && items?.map((link, index) => (
              <Shorted
                key={link.id}
                index={index}
                link={link}
                active={active}
                setActive={setActive}
              />
            ))
          }
        </AnimatePresence>
      </LazyMotion>
    </ListContainer>
  )
}


