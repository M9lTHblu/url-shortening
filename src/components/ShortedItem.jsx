import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BiCopy } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { remove } from 'store/slices/linksSclice'
import { Copy, Delete, OriginLink, StyledShortedItem } from 'styles/styles.sc'

export default function ShortedItem ({ index, link, active, setActive }) {
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
        dispatch(remove(active))
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [active, dispatch])

  const variants = {
    visible: index => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: index * 0.3,
      },
    }),
    hidden: { x: 400, opacity: 0 },
    remove: { x: -300, opacity: 0 },
  }

  return (
    <StyledShortedItem
      as={motion.article}
      variants={variants}
      custom={index}
      initial='hidden'
      animate='visible'
      exit='remove'
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


