import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'

import { useSearchedKeyword, useSearchKeyword } from './context/fillterProvider'

import Button from '@/components/Button'
import SearchInput from '@/components/Input/SearchInput'

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
    <SearchInput onEnterSubmit={enterSubmit} value={value} setValue={setValue}>
      {({ onSubmit }) => (
        <Button onClick={onSubmit} size="small">
          제출
        </Button>
      )}
    </SearchInput>
  )
}

export default Search
