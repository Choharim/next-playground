import { DialogAnswer } from '.'
import Button from '../Button'
import { ComponentProps } from 'react'
import { useDialogContext } from './context'

type ButtonAnswer = Extract<DialogAnswer, 'confirm' | 'cancel'>

const BUTTON_TEXT: Record<ButtonAnswer, string> = {
  confirm: '확인',
  cancel: '취소',
}

interface Props
  extends Pick<ComponentProps<typeof Button>, 'className' | 'children'> {
  answer: ButtonAnswer
}

function DialogButton({ answer, children, className }: Props) {
  const { clickAnswer } = useDialogContext()

  return (
    <Button onClick={clickAnswer(answer)} className={className}>
      {children ?? BUTTON_TEXT[answer]}
    </Button>
  )
}

export default DialogButton
