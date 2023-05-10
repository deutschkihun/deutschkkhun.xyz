import type {Action} from 'redux'
export * from '../commonTypes'

export type State = string

export type ChangeModeAction = Action<'@mode/change'> & {
  payload: string
}

export type Actions = ChangeModeAction
