import * as T from './types'

const initialState: T.State = (localStorage.getItem('locale') as string) ?? 'en'

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@languages/change':
      return action.payload
  }
  return state
}
