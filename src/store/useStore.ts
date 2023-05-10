import {configureStore} from '@reduxjs/toolkit'
import {useMemo} from 'react'
import {rootReducer} from './rootReducer'
import {Action, Dispatch} from 'redux'

const localStorageMiddleware =
  <S = any>(store: {getState: () => S}) =>
  (next: Dispatch) =>
  (action: Action) => {
    const result = next(action)
    localStorage.setItem('locale', JSON.stringify(store.getState()))
    return result
  }

const persistedState = JSON.parse(localStorage.getItem('locale') as string) ?? {}

const initializeStore = () => {
  const init = configureStore({
    reducer: rootReducer,
    middleware: [localStorageMiddleware],
    preloadedState: persistedState
  })
  return init
}

export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}
