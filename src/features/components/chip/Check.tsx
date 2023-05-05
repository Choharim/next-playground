import React, { ChangeEvent, useState } from 'react'

import Frame from '@/features/components/Frame'
import CheckChip from '@/components/Chip/CheckChip'
import Checkbox from '@/components/Chip/Checkbox'
import Typo from '@/components/Typo'

const Check = () => {
  const [checkedForChip, setCheckedForChip] = useState(false)
  const [checkedForBox, setCheckedForBox] = useState(false)

  const toggleCheckedForChip = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckedForChip(e.currentTarget.checked)
  }

  const toggleCheckedForBox = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckedForBox(e.currentTarget.checked)
  }

  console.log('checkedForBox', checkedForBox)
  console.log('checkedForChip', checkedForChip)

  return (
    <>
      <Frame title="checkChip">
        <CheckChip
          htmlFor="checkChip1"
          onChange={toggleCheckedForChip}
          checked={checkedForChip}
        >
          CheckChip
        </CheckChip>

        <CheckChip
          htmlFor="checkChip2"
          variety="fill"
          onChange={toggleCheckedForChip}
          checked={checkedForChip}
        >
          CheckChip
        </CheckChip>
      </Frame>

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
    </>
  )
}

export default Check
