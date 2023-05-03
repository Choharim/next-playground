import { getLayout } from '@/components/layouts/Layout'
import Check from '@/features/components/chip/Check'
import NoneCheck from '@/features/components/chip/NoneCheck'
import { NextPageWithLayout } from '@/shared/types/layout'

const ChipPage: NextPageWithLayout = () => {
  return (
    <>
      <NoneCheck />
      <Check />
    </>
  )
}

export default ChipPage

ChipPage.getLayout = getLayout
