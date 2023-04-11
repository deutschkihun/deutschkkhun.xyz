import { Box, InputLabel } from '@mui/material'
import { MenuItem, FormControl, Select, SelectChangeEvent } from '@mui/material'
import { languageState } from '../../recoil/language'
import { useRecoilState } from 'recoil'

export const Languages = (): JSX.Element => {
  const [lang, setLang] = useRecoilState(languageState)

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string)
    localStorage.setItem('locale', event.target.value as string)
  }
  return (
    <Box sx={{ minWidth: 120, m: '0 auto', px: 1 }}>
      <FormControl variant="filled" sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select value={lang} label="Age" onChange={handleChange}>
          <MenuItem value="en">english</MenuItem>
          <MenuItem value="kr">korean</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
