import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

import { useSearchedKeyword, useSearchKeyword } from './context/fillterProvider'

import SearchInput from '@/components/input/SearchInput'
import InputProvider from '@/components/input/context/inputProvider'
import { SUBMIT_BUTTON_KEY } from '@/components/input/Input'

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

  const submit = () => {
    searchKeyword(value)
    rounter.push({ ...rounter, query: { q: value } })
  }

  return (
    <InputProvider submit={submit} value={value} setValue={setValue}>
      <CustomSearchInput>
        <Button key={SUBMIT_BUTTON_KEY}>제출</Button>
      </CustomSearchInput>
    </InputProvider>
  )
}

export default Search

const CustomSearchInput = styled(SearchInput)`
  display: flex;
`

const Button = styled.button`
  border: 1px solid pink;
`
