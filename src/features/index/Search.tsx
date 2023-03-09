import SearchInput from '@/components/input/SearchInput'
import React from 'react'
import { useSearchKeyword } from './context/fillterProvider'

const Search = () => {
  const searchKeyword = useSearchKeyword()

  const handleSubmit = (value: string) => {
    searchKeyword(value)
  }

  return <SearchInput id="search" submit={handleSubmit} />
}

export default Search
