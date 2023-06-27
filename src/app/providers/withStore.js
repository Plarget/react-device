import { Provider } from 'react-redux'
import React from 'react'
import { setupStore } from '@shared/store/store'

const store = setupStore()
export const withStore = (component) => () => {
  return (
    <Provider store={ store }>{ component() }</Provider>
  )
}
