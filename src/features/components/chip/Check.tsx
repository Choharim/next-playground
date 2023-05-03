import React, { useState } from 'react'

import Frame from '@/features/components/Frame'
import CheckChip from '@/components/Chip/CheckChip'

const Check = () => {
  const [checked, setChecked] = useState(false)

  const toggleChecked = () => {
    setChecked((prev) => !prev)
  }

  console.log(checked)

  return (
    <Frame title="checkChip">
      <CheckChip onClick={toggleChecked} checked={checked}>
        CheckChip
      </CheckChip>
    </Frame>
  )
}

export default Check
