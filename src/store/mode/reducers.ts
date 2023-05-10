import * as T from './types'

const initialState: T.State = (localStorage.getItem('mode') as string) ?? 'light'

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@mode/change':
      return action.payload
  }
  return state
}
