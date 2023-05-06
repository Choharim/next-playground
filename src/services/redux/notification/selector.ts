import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../type'

const selectNotification = (state: RootState) => state.notification

export const selectToasts = createSelector(
  selectNotification,
  (notification) => notification.toasts
)
