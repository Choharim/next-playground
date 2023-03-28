import styled from '@emotion/styled'
import { useState } from 'react'
import { css } from '@emotion/react'
import { BsFillTriangleFill } from 'react-icons/bs'

import { FOLDER } from '@/features/recursive/constant'
import { Folder } from '@/features/recursive/type'

type RecursiveBoxProps = {
  data: Folder
  order: string
}
const RecursiveBox = ({ data, order }: RecursiveBoxProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const isParent = !!data.children.length

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <Box>
      {isParent && (
        <ToggleIcon onClick={toggleOpen} css={isOpen && toggleStyle} />
      )}

      <Name>
        {isParent ? '📁' : '📄'} {data.name} {order}
      </Name>
      {isOpen &&
        data.children.map((child, i) => (
          <RecursiveBox key={i} data={child} order={`${order}-${i + 1}`} />
        ))}
    </Box>
  )
}

const FolderPage = () => {
  return (
    <>
      {FOLDER.map((data, i) => (
        <RecursiveBox key={i} data={data} order={`${i + 1}`} />
      ))}
    </>
  )
}

export default FolderPage

const Box = styled.div`
  border: 1px solid ${({ theme }) => theme.color.grey400};
  border-radius: 4px;
  margin: 10px;
  padding: 10px;
`

const ToggleIcon = styled(BsFillTriangleFill)`
  padding: 2px;
  cursor: pointer;
`
const toggleStyle = css`
  transform: rotate(180deg);
`
const Name = styled.span``