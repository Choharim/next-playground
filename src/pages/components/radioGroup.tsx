import { useState } from 'react'

import RadioGroup from '@/components/RadioGroup'
import Flex from '@/components/Flex'
import Frame from '@/features/components/Frame'

const RadioGroupPage = () => {
  const [value, setValue] = useState('')

  const handleChange = (value: string) => {
    setValue(value)
  }

  console.log(value)

  return (
    <>
      <Frame title="radio chip">
        <RadioGroup
          groupName="hi"
          selectedValue={value}
          onChange={handleChange}
        >
          <Flex align="center" gap="25px">
            <RadioGroup.Chip value="a">aaaaa</RadioGroup.Chip>
            <RadioGroup.Chip value="b">bbbbb</RadioGroup.Chip>
            <RadioGroup.Chip value="c">ccccc</RadioGroup.Chip>
          </Flex>
        </RadioGroup>
      </Frame>
      <Frame title="radio button">
        <RadioGroup
          groupName="hello"
          selectedValue={value}
          onChange={handleChange}
        >
          <Flex align="center" gap="25px">
            <RadioGroup.Button value="huey">huey</RadioGroup.Button>
            <RadioGroup.Button value="dewey">dewey</RadioGroup.Button>
            <RadioGroup.Button value="louie">louie</RadioGroup.Button>
          </Flex>
        </RadioGroup>
      </Frame>
    </>
  )
}

export default RadioGroupPage
