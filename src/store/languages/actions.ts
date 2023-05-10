import type * as T from './types'

export const chanageLanguage = (payload: string): T.ChangeLanguageAction => ({
  type: '@languages/change',
  payload
})
