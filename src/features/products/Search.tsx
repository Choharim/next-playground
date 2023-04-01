import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

import { useSearchedKeyword, useSearchKeyword } from './context/fillterProvider'

import Input, { SUBMIT_BUTTON_KEY } from '@/components/input/Input'
import Form from '@/components/form/Form'

const Search = () => {
  const rounter = useRouter()
  const searchParams = useSearchParams()
  const keyword = searchParams.get('q')
  const [value, setValue] = useState('')

  const searchKeyword = useSearchKeyword()
  const searchedKeyword = useSearchedKeyword()

  useEffect(() => {
    if (!!keyword && !searchedKeyword) {
      searchKeyword(keyword)
      setValue(keyword)
    }
  }, [keyword, searchKeyword, searchedKeyword])

  const enterSubmit = () => {
    searchKeyword(value)
    rounter.push({ ...rounter, query: { q: value } })
  }

  return (
    <Form>
      <CustomSearchInput
        enterSubmit={enterSubmit}
        value={value}
        setValue={setValue}
      >
        <Button key={SUBMIT_BUTTON_KEY}>제출</Button>
      </CustomSearchInput>
    </Form>
  )
}

export default Search

const CustomSearchInput = styled(Input)`
  display: flex;
`

const Button = styled.button`
  border: 1px solid pink;
`
