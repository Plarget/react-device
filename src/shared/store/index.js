import {combineReducers, configureStore} from '@reduxjs/toolkit'
import BasketReducer from './reducers/BasketSlice'
import NotificationReducer from './reducers/NotificationSlice'

const rootReducer = combineReducers({
  BasketReducer,
  NotificationReducer,
})
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

