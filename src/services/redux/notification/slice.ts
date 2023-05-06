import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Toast } from '@/components/Toast/type'

interface NotificationState {
  toasts: Toast[]
}

const initialState: NotificationState = {
  toasts: [],
}

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addToast: (state, { payload }: PayloadAction<Toast>) => {
      state.toasts.push(payload)
    },
    removeToast: (
      state,
      { payload: { id } }: PayloadAction<{ id: number }>
    ) => {
      state.toasts = state.toasts.filter((toast) => toast.id !== id)
    },
  },
})

export const notificationActions = notificationSlice.actions

export default notificationSlice.reducer
