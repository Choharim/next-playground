import { Category } from '@/domain/product/type'
import React, { createContext, useContext, useMemo, useState } from 'react'

type ValueContext = {
  category: Category | undefined
  keyword: string
}
type ActionContext = {
  toggleCategory: (category: Category) => void
  searchKeyword: (keyword: string) => void
}

const fillterValue = createContext<ValueContext | undefined>(undefined)
const filterAction = createContext<ActionContext | undefined>(undefined)

type Props = {
  children: React.ReactNode
}
const FillterProvider = ({ children }: Props) => {
  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState<Category>()

  const value = useMemo(
    () => ({
      keyword,
      category,
    }),
    [keyword, category]
  )

  const action = useMemo(
    () => ({
      toggleCategory(category: Category) {
        setCategory((prev) => (prev === category ? undefined : category))
      },
      searchKeyword(search: string) {
        setKeyword(search)
      },
    }),
    []
  )

  return (
    <fillterValue.Provider value={value}>
      <filterAction.Provider value={action}>{children}</filterAction.Provider>
    </fillterValue.Provider>
  )
}

export default FillterProvider

export const useChoicedCategory = () => {
  const context = useContext(fillterValue)

  if (context === undefined) {
    throw new Error('it must be used within a FillterProvider')
  }

  return context.category
}

export const useToggleCategory = () => {
  const context = useContext(filterAction)

  if (context === undefined) {
    throw new Error('it must be used within a FillterProvider')
  }

  return context.toggleCategory
}

export const useSearchedKeyword = () => {
  const context = useContext(fillterValue)

  if (context === undefined) {
    throw new Error('it must be used within a FillterProvider')
  }

  return context.keyword
}

export const useSearchKeyword = () => {
  const context = useContext(filterAction)

  if (context === undefined) {
    throw new Error('it must be used within a FillterProvider')
  }

  return context.searchKeyword
}
