import { AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { getLinks } from 'store/slices/linksSclice'
import ShortedItem from 'components/ShortedItem'
import { List } from 'styles/styles.sc'

export default function ShortensList () {
  const { items } = useSelector(getLinks)
  const [active, setActive] = useState('')
  const listRef = useRef(null)

  useEffect(() => {
    listRef.current?.scrollIntoView(
      { block: 'center', inline: 'nearest', behavior: 'smooth' })
  }, [items])

  return (

        <List ref={listRef}>
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


