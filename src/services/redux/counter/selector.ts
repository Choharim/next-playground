import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../type'

const selectCounter = (state: RootState) => state.counter

export const selectCount = createSelector(
  selectCounter,
  (counter) => counter.value
)
