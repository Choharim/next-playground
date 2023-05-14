import { ReactElement } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import Flex from '../Flex'

import { useIsOpen, useOptions, useSelectedValue } from './context/consumer'
import { OptionContextProps, TriggerContextProps } from './context/Provider'
import { Z_INDEX } from '@/styles/constants/zIndex'
import { SHADOW } from '@/styles/constants/shadow'

type OptionListStyle = Pick<TriggerContextProps, 'isOpen'>

type Props = {
  children: (
    args: Pick<OptionContextProps, 'options' | 'selectedValue'>
  ) => ReactElement[]
}
const OptionList = ({ children }: Props) => {
  const isOpen = useIsOpen()
  const selectedValue = useSelectedValue()
  const options = useOptions()

  return (
    <OptionContainer direction="column" as="ul" role="listbox" isOpen={isOpen}>
      {children({ selectedValue, options })}
    </OptionContainer>
  )
}

export default OptionList

const OptionContainer = styled(Flex)<OptionListStyle>`
  position: absolute;
  top: calc(100% + 5px);
  left: 0px;

  width: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.white};
  ${SHADOW.dropBox};
  ${Z_INDEX.dropBox};

  ${({ isOpen }) =>
    isOpen
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}

  transition: 0.2s ease;
`
