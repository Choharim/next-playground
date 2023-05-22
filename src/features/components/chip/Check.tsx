import React, { useState } from 'react'

import Frame from '@/features/components/Frame'
import CheckChip from '@/components/Chip/CheckChip'

const Check = () => {
  const [checkedForChip, setCheckedForChip] = useState(false)

  const toggleCheckedForChip = (checked: boolean) => {
    setCheckedForChip(checked)
  }

  console.log('checkedForChip', checkedForChip)

  return (
    <>
      <Frame title="checkChip">
        <CheckChip
          id="checkChip1"
          onChange={toggleCheckedForChip}
          checked={checkedForChip}
        >
          CheckChip
        </CheckChip>

        <CheckChip
          id="checkChip2"
          variety="fill"
          onChange={toggleCheckedForChip}
          checked={checkedForChip}
        >
          CheckChip
        </CheckChip>
      </Frame>
    </>
  )
}

export default Check
