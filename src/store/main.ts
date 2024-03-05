import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './tasks-slice'

const store = configureStore({
  'reducer': {
    tasksSlice,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
