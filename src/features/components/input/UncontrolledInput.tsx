import styled from '@emotion/styled'

import Form, { FormData } from '@/components/Form'
import Label from '@/components/Label'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Typo from '@/components/Typo'
import SearchInput from '@/components/Input/SearchInput'

const NAME_INPUT_ID = 'nameInput'
const AGE_INPUT_ID = 'ageInput'

const FORM_FIELD_NAMES = [NAME_INPUT_ID, AGE_INPUT_ID] as const

const UncontrolledInput = () => {
  const submitUncontrollForm = (data: FormData<typeof FORM_FIELD_NAMES>) => {
    console.log(data)
  }

  const enterSubmit = (target: string) => {
    console.log(target)
  }

  return (
    <>
      <Form onSubmit={submitUncontrollForm} fieldNames={FORM_FIELD_NAMES}>
        <Label isRequired htmlFor={NAME_INPUT_ID}>
          이름
        </Label>
        <Input id={NAME_INPUT_ID} name={NAME_INPUT_ID} />

        <Label isRequired htmlFor={AGE_INPUT_ID}>
          나이
        </Label>
        <Input type="number" id={AGE_INPUT_ID} name={AGE_INPUT_ID} />

        <ConfirmButton type="submit" variety="contain">
          확인
        </ConfirmButton>
      </Form>

      <SearchInput onEnterSubmit={enterSubmit}>
        {({ onSubmit }) => (
          <SearchButton variety="contain" onClick={onSubmit}>
            <Typo color="inherit" variety="body_4">
              검색
            </Typo>
          </SearchButton>
        )}
      </SearchInput>
    </>
  )
}

export default UncontrolledInput

const ConfirmButton = styled(Button)`
  margin-top: 10px;
`

const SearchButton = styled(Button)`
  padding: 0 10px;
  width: fit-content;
  height: 100%;
`
