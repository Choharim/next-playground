import Form from '@/components/Form'
import Label from '@/components/Form/Label'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Text from '@/components/Text'
import { css } from '@emotion/css'
import SearchInput from '@/components/Input/SearchInput'

const UNCONTORLL_INPUT_ID = 'uncontrollInput'

type Form = {
  [UNCONTORLL_INPUT_ID]: { value: string }
}

const UncontrolledInput = () => {
  const submitUncontrollForm = (target: Form) => {
    console.log(target[UNCONTORLL_INPUT_ID]?.value)
  }

  const enterSubmit = (target: string) => {
    console.log(target)
  }

  return (
    <>
      <Form onSubmitForm={submitUncontrollForm}>
        <Label isRequired htmlFor={UNCONTORLL_INPUT_ID}>
          폼 입력 창
        </Label>
        <Input id={UNCONTORLL_INPUT_ID} name={UNCONTORLL_INPUT_ID} />

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
            <Text color="inherit" variety="body_4">
              검색
            </Text>
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
