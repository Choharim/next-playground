import Switch from '@/components/Switch'
import Frame from '@/features/components/Frame'
import React, { useState } from 'react'

const SwitchPage = () => {
  const [checked, setChecked] = useState(false)

  const toggleChecked = (checked: boolean) => {
    setChecked(checked)
  }

  console.log('checked', checked)

  return (
    <Frame title="switch">
      <Switch
        size="large"
        id={'smallSwitch'}
        checked={checked}
        onChange={toggleChecked}
      />
      <Switch
        size="medium"
        id={'mediumSwitch'}
        checked={checked}
        onChange={toggleChecked}
      />
      <Switch
        size="small"
        id={'smallSwitch'}
        checked={checked}
        onChange={toggleChecked}
      />
    </Frame>
  )
}

export default SwitchPage
