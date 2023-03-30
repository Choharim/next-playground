import { useState } from 'react'

import { Food } from '@/domain/food/type'
import { useFoodsQuery } from '@/services/reactQuery/foods/query'

export const FILTER = ['all', 'normal', 'new'] as const

export type Filter = (typeof FILTER)[number]

const useFilter = () => {
  const [choicedFilter, setChoicedFilter] = useState<Filter>('all')
  const [foodsByFiltering, setFoodsByFiltering] =
    useState<Record<Filter, Food[]>>()

  useFoodsQuery({
    onSuccess: (foods) => {
      const newFoods: Food[] = []
      const normalFoods: Food[] = []

      foods.forEach((food) => {
        if (food.isNew) {
          newFoods.push(food)
        } else {
          normalFoods.push(food)
        }
      })

      setFoodsByFiltering({
        all: foods,
        new: newFoods,
        normal: normalFoods,
      })
    },
  })

  return {
    choicedFilter,
    setChoicedFilter,
    foods: foodsByFiltering?.[choicedFilter],
  }
}

export default useFilter
