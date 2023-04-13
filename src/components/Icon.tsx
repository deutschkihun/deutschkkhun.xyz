import type {FC} from 'react'
import type {ButtonProps} from '../components/Button'
import type {MaterialIconProps as CIconProps} from '../components/MaterialIcon'
import {Button} from '../components/Button'
import {Icon as CIcon} from '../components'

export type IconProps = ButtonProps &
  CIconProps & {
    iconClassName?: string
  }

export const Icon: FC<IconProps> = ({name, iconClassName, className, ...buttonProps}) => {
  const btnClassName = ['btn-circle', className].join(' ')
  return (
    <Button {...buttonProps} className={btnClassName}>
      <CIcon className={iconClassName} name={name} />
    </Button>
  )
}
