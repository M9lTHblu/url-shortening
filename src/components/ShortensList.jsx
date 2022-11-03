import ShortedItem from 'components/ShortedItem'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { getLinks } from 'store/slices/linksSclice'
import { List } from 'styles/styles.sc'

export default function ShortensList () {
  const { items } = useSelector(getLinks)
  const [active, setActive] = useState('')


  return (

        <List>
          <AnimatePresence>
            {
              items && items?.map((link, index) => (
                <li key={link.code}>
                  <ShortedItem
                    index={index}
                    link={link}
                    active={active}
                    setActive={setActive}
                  />
                </li>
              ))
            }
          </AnimatePresence>
        </List>
  )
}


