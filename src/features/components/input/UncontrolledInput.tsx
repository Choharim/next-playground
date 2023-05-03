import Form, { FormData } from '@/components/Form'
import Label from '@/components/Form/Label'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Typo from '@/components/Typo'
import { css } from '@emotion/css'
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

        <Button type="submit" variety="contain" className={ConfirmButtonStyle}>
          확인
        </Button>
      </Form>

      <SearchInput onEnterSubmit={enterSubmit}>
        {({ onSubmit }) => (
          <Button
            variety="contain"
            className={SearchButtonStyle}
            onClick={onSubmit}
          >
            <Typo color="inherit" variety="body_4">
              검색
            </Typo>
          </Button>
        )}
      </SearchInput>
    </>
  )
}

export default UncontrolledInput

const SearchButtonStyle = css`
  padding: 0 10px;
  width: fit-content;
  white-space: nowrap;
  height: 100%;
`

const ConfirmButtonStyle = css`
  margin-top: 10px;
`
