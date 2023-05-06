import Frame from '@/features/components/Frame'

import { NextPageWithLayout } from '@/shared/types/layout'
import { getLayout } from '@/components/layouts/Layout'

import DialogModal from '@/features/components/modal/dialogModal'
import DefaultModal from '@/features/components/modal/defaultModal'

const ModalPage: NextPageWithLayout = () => {
  return (
    <Frame title="modal">
      <DialogModal />
      <DefaultModal />
    </Frame>
  )
}

export default ModalPage

ModalPage.getLayout = getLayout
