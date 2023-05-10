import type * as T from './types'

export const changeMode = (payload: string): T.ChangeModeAction => ({
  type: '@mode/change',
  payload
})
