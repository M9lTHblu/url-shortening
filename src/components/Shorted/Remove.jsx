import { useEffect } from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { remove } from 'store/slices/linksSclice'
import { Btn } from 'styles/sharedStyles'

const RemoveBtn = styled(Btn).attrs(() => ({
  type: 'button',
}))`
  padding: 0;
  background-color: transparent;
`

const Remove = ({ id }) => {
  const dispatch = useDispatch()

  const handleRemove = (id) => () => {
    dispatch(remove(id))
  }

  return (
    <RemoveBtn onClick={handleRemove(id)}>
      <MdDeleteOutline color='white' />
    </RemoveBtn>
  )
}

export default Remove
