import { atom } from 'recoil'

const locale = localStorage.getItem('locale') ?? 'en'

export const languageState = atom<string>({
  key: 'languageState',
  default: locale,
})
