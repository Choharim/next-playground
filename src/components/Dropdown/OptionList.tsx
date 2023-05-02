import { ReactElement } from 'react'
import { css } from '@emotion/css'
import { Theme, useTheme } from '@emotion/react'

import Flex from '../Flex'

import { useIsOpen, useOptions, useSelectedValue } from './context/consumer'
import { OptionContextProps, TriggerContextProps } from './context/Provider'

type Props = {
  children: (
    args: Pick<OptionContextProps, 'options' | 'selectedValue'>
  ) => ReactElement[]
}
const OptionList = ({ children }: Props) => {
  const theme = useTheme()
  const isOpen = useIsOpen()
  const selectedValue = useSelectedValue()
  const options = useOptions()

  return (
    <Flex
      direction="column"
      as="ul"
      role="listbox"
      tabIndex={0}
      className={getStyle({ theme, isOpen })}
    >
      {children({ selectedValue, options })}
    </Flex>
  )
}

export default OptionList

const getStyle = ({
  theme,
  isOpen,
}: { theme: Theme } & Pick<TriggerContextProps, 'isOpen'>) => css`
  position: absolute;
  top: calc(100% + 5px);
  left: 0px;

  width: 100%;
  border-radius: 4px;
  background-color: ${theme.color.white};
  ${theme.shadow.dropBox};
  ${theme.zIndex.dropBox};

  ${isOpen
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
