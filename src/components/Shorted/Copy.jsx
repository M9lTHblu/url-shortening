import { useState } from 'react'
import styled from 'styled-components/macro'
import { BiCopy } from 'react-icons/bi'
import { Btn } from 'styles/sharedStyles'

const CopyBtn = styled(Btn).attrs(() => ({
  type: 'button'
}))`
  padding: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 16px;
`

const Copy = ({shorted}) => {
  const [copy, setCopy] = useState(null)

  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link)
      .then(() => {
        setCopy(link)
      })
  }

  return (
    <CopyBtn onClick={() => copyToClipboard(shorted)}>
      {shorted}
      {copy === shorted ?
        <BiCopy color='#75b275' />
        : <BiCopy color='#6979F8' />}
    </CopyBtn>
  )
}

export default Copy
