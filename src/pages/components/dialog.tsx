import Dialog, { DialogAnswer } from '@/components/Dialog'
import useDialog from '@/components/Dialog/useDialog'
import Frame from '@/features/components/Frame'
import { css } from '@emotion/react'

function DialogPage() {
  const { openDialog, closeDialog, dialogRef } = useDialog()

  const onClose = (answer: DialogAnswer) => {
    console.log('close', answer)

    if (answer === 'confirm') {
      /**
       * confirm 눌렀을 때 로직 실행
       */
      console.log('confirm 이요')
    } else if (answer === 'cancel') {
      /**
       * cancel 눌렀을 때 로직 실행
       */
      console.log('cancel 이요')
    }
  }

  const clickCloseButton = () => {
    closeDialog('cancel')
  }

  return (
    <>
      <Dialog ref={dialogRef} onClose={onClose}>
        <form method="dialog">
          <h3>Dialog title</h3>
          <button onClick={clickCloseButton}>X</button>
          <input />
        </form>
        <Dialog.ButtonGroups>
          <Dialog.Button answer="cancel">취소요!</Dialog.Button>
          <Dialog.Button answer="confirm" />
        </Dialog.ButtonGroups>
        {/* <Dialog.Button answer="confirm" /> */}
      </Dialog>

      <Frame title="dialog">
        <button onClick={openDialog}>열기</button>

        <button
          css={css`
            &:active {
              background-color: red;
            }
          `}
        >
          hi
        </button>
      </Frame>
    </>
  )
}

export default DialogPage
