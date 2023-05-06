import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'

import notification from './notification/slice'

const rootReducer = combineReducers({
  notification,
})

const reducer: typeof rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return rootReducer(state, action)
  }
}

export const makeStore = () =>
  configureStore({
    reducer,
  })

export const wrapper = createWrapper(makeStore)
