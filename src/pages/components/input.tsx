import { NextPageWithLayout } from '@/shared/types/layout'
import { getLayout } from '@/components/layouts/Layout'

import Frame from '@/features/components/Frame'
import HookFormInput from '@/features/components/input/HookFormInput'
import ControlledInput from '@/features/components/input/ControlledInput'
import UncontrolledInput from '@/features/components/input/UncontrolledInput'

const InputPage: NextPageWithLayout = () => {
  return (
    <>
      <Frame title="비제어 컴포넌트">
        <UncontrolledInput />
      </Frame>
      <Frame title="제어 컴포넌트">
        <ControlledInput />
      </Frame>
      <Frame title="react-hook-form">
        <HookFormInput />
      </Frame>
    </>
  )
}

export default InputPage

InputPage.getLayout = getLayout
