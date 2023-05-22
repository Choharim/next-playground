import Flex from '@/components/Flex'
import CheckChip from '@/components/Chip/CheckChip'

import { CATEGORIES } from '@/domain/product/constant'
import { Category } from '@/domain/product/type'
import { useChoicedCategory, useSetCategory } from './context/fillterProvider'

const Category = () => {
  const setCategory = useSetCategory()
  const choicedCategory = useChoicedCategory()

  const toggleCheckedForChip = (category: Category) => (checked: boolean) => {
    if (checked) {
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
          id={`${item}-category`}
          onChange={toggleCheckedForChip(item)}
        >
          {item}
        </CheckChip>
      ))}
    </Flex>
  )
}

export default Category
