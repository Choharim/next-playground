import { makeStore } from './store'

type Store = ReturnType<typeof makeStore>

export type RootState = ReturnType<Store['getState']>
