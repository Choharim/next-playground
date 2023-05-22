import React, { ChangeEvent, useState } from 'react'

import Frame from '@/features/components/Frame'
import Checkbox from '@/components/Checkbox'
import Typo from '@/components/Typo'

const CheckboxPage = () => {
  const [checkedForBox, setCheckedForBox] = useState(false)

  const toggleCheckedForBox = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckedForBox(e.currentTarget.checked)
  }

  console.log('checkedForBox', checkedForBox)

  return (
    <Frame title="checkbox">
      <Checkbox
        id="checkbox"
        onChange={toggleCheckedForBox}
        checked={checkedForBox}
        isError
      >
        <Typo variety="body_2" color="grey800">
          에러 체크 박스 라벨
        </Typo>
      </Checkbox>

      <Checkbox
        id="checkbox"
        onChange={toggleCheckedForBox}
        checked={checkedForBox}
      >
        <Typo variety="body_2" color="grey800">
          체크 박스 라벨
        </Typo>
      </Checkbox>
    </Frame>
  )
}

export default CheckboxPage
