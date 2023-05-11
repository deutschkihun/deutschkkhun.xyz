import {configureStore} from '@reduxjs/toolkit'
import {useMemo} from 'react'
import {rootReducer} from './rootReducer'
import {Action, Dispatch} from 'redux'
import {AppState} from './AppState'

const localStorageMiddleware =
  <S = any>(store: {getState: () => S}) =>
  (next: Dispatch) =>
  (action: Action) => {
    const result = next(action)
    localStorage.setItem('locale', JSON.stringify(store.getState()))
    return result
  }

const persistedState: AppState =
  JSON.parse(localStorage.getItem('locale') as string) ?? {}
window.document.body.classList.add(persistedState.mode)

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
