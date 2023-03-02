import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'

import counter from './counter/slice'

const rootReducer = combineReducers({
  counter: counter,
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
