import type {Action} from 'redux'
export * from '../commonTypes'

export type State = string

export type ChangeLanguageAction = Action<'@languages/change'> & {
  payload: string
}

export type Actions = ChangeLanguageAction
