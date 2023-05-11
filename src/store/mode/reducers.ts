import * as T from './types'

const initialState: T.State = (localStorage.getItem('mode') as string) ?? 'light'

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@mode/change':
      if (action.payload === 'dark') {
        window.document.body.classList.remove('light')
        window.document.body.classList.add(action.payload)
      } else {
        window.document.body.classList.remove('dark')
        window.document.body.classList.add(action.payload)
      }
      return action.payload
  }
  return state
}
