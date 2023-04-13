import * as MuiIcons from '@mui/icons-material'

interface Props {
  iconName: string
}

export const IconMaterial = ({iconName}: Props): JSX.Element => {
  const Icon = MuiIcons[iconName as keyof typeof MuiIcons]

  return (
    <Icon
      sx={{
        width: '100%',
        height: 299
      }}
    />
  )
}
