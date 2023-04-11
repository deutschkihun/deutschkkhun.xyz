import { atom } from 'recoil'

const mode = localStorage.getItem('mode') ?? 'light-mode'
window.document.body.classList.add(mode)

export const modeState = atom<string>({
  key: 'modeState',
  default: mode,
})
