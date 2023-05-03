import { combineReducers, configureStore } from '@reduxjs/toolkit'
import CloudReducer from './reducers/CloudSlice'

const rootReducer = combineReducers({
  CloudReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}
