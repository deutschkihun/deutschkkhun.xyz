import { atom } from 'recoil'

export const locationState = atom<{ center: number; bottom: number }>({
  key: 'locationState',
  default: {
    center: 0,
    bottom: 0,
  },
})

export const toggleState = atom<boolean>({
  key: 'toggleState',
  default: false,
})
