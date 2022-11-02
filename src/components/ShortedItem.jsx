import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BiCopy } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'
import { remove } from 'store/slices/linksSclice'
import { Copy, OriginLink, StyledShortedItem, Delete } from 'styles/styles.sc'

export default function ShortedItem ({ link, active, setActive }) {
  const dispatch = useDispatch()
  const [copy, setCopy] = useState(null)

  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link)
      .then(() => {
        setCopy(link)
      })
  }

  const handleRemove = (code) => {
    dispatch(remove(code))
  }

  const handleClick = (code) => {
    setActive(code)
  }



  useEffect(() => {
    const id = setTimeout(() => {
      setCopy(null)
    }, 5000)
    return () => {
      clearTimeout(id)
    }
  }, [copy])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Backspace') {
        console.log('!!!!!!!!!!!!')
        handleRemove(active)
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [active])

  return (
    <StyledShortedItem
      as={motion.article}
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      $active={active === link.code}
      onClick={() => handleClick(link.code)}
    >
      <OriginLink>{link.original_link}</OriginLink>
      <Copy onClick={() => copyToClipboard(link.short_link2)}>
        {link.short_link2}
        {copy === link.short_link2 ?
          <BiCopy color='#75b275' />
          : <BiCopy color='#6979F8' />}
      </Copy>
      <Delete onClick={() => handleRemove(link.code)}
              style={{ color: 'white' }}>
        <MdDeleteOutline color='white' />
      </Delete>
    </StyledShortedItem>
  )
}


