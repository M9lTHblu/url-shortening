import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getState } from 'store/slices/linksSclice'
import ShortedItem from 'components/ShortedItem'
import { List } from 'styles/styles.sc'

export default function ShortensList () {
  const { items } = useSelector(getState)
  const [active, setActive] = useState('')


  return (
    <List>
      <AnimatePresence>
        {
          items && items?.map(link => (
            <li key={link.code}><ShortedItem link={link} active={active}
                                             setActive={setActive} /></li>
          ))
        }
      </AnimatePresence>
    </List>
  )
}


