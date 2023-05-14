import React, { ChangeEvent } from 'react'

import Flex from '@/components/Flex'
import CheckChip from '@/components/Chip/CheckChip'

import { CATEGORIES } from '@/domain/product/constant'
import { Category } from '@/domain/product/type'
import { useChoicedCategory, useSetCategory } from './context/fillterProvider'

const Category = () => {
  const setCategory = useSetCategory()
  const choicedCategory = useChoicedCategory()

  const toggleCheckedForChip =
    (category: Category) => (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        setCategory(category)
      } else {
        setCategory()
      }
    }

  return (
    <Flex wrap="wrap" gap="10px">
      {CATEGORIES.map((item) => (
        <CheckChip
          key={item}
          checked={item === choicedCategory}
          htmlFor={`${item}-category`}
          onChange={toggleCheckedForChip(item)}
        >
          {item}
        </CheckChip>
      ))}
    </Flex>
  )
}

export default Category
