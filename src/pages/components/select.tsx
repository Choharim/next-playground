import styled from '@emotion/styled'

import SelectProvider from '@/components/select/context/selectProvider'
import FormSelect from '@/components/select/FormSelect'

const options = [
  { text: '고양이', value: 'cat' },
  { text: '강아지', value: 'dog' },
  { text: '오리', value: 'duck' },
]

const Select = () => {
  return (
    <SelectProvider options={options}>
      <CustomFormSelect placeholder="선택하세요." label="아무" name="select" />
    </SelectProvider>
  )
}

export default Select

const CustomFormSelect = styled(FormSelect)`
  width: 200px;
`
