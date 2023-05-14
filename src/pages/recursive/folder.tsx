import styled from '@emotion/styled'
import { useState } from 'react'
import { css } from '@emotion/react'

import { BsFillTriangleFill } from 'react-icons/bs'
import Typo from '@/components/Typo'

import { FOLDER } from '@/features/recursive/constant'
import { Folder } from '@/features/recursive/type'
import { NextPageWithLayout } from '@/shared/types/layout'
import { getLayout } from '@/components/Layout'

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
      {isParent && <ToggleIcon onClick={toggleOpen} isOpen={isOpen} />}

      <Typo variety="body_1">
        {isParent ? '📁' : '📄'} {data.name} {order}
      </Typo>
      {isOpen &&
        data.children.map((child, i) => (
          <RecursiveBox key={i} data={child} order={`${order}-${i + 1}`} />
        ))}
    </Box>
  )
}

const FolderPage: NextPageWithLayout = () => {
  return (
    <>
      {FOLDER.map((data, i) => (
        <RecursiveBox key={i} data={data} order={`${i + 1}`} />
      ))}
    </>
  )
}

export default FolderPage

FolderPage.getLayout = getLayout

const Box = styled.div`
  border: 1px solid ${({ theme }) => theme.color.grey400};
  border-radius: 4px;
  margin: 10px;
  padding: 10px;
`

type ToggleIconStyle = {
  isOpen: boolean
}
const ToggleIcon = styled(BsFillTriangleFill)<ToggleIconStyle>`
  padding: 2px;
  cursor: pointer;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}
`
