import type {FC, DetailedHTMLProps, HTMLAttributes} from 'react'
import type {ButtonProps} from '../components/Button'
import {Button} from '../components/Button'

type ReactSpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

export type MaterialIconProps = ReactSpanProps & {
  name: string
}

export type IconProps = ButtonProps &
  MaterialIconProps & {
    iconClassName?: string
  }

// prettier-ignore
export const MaterialIcon: FC<MaterialIconProps> = ({name, className: _className, ...props}) => {
  const className = ['material-icons', _className].join(' ')
  return <span {...props} className={className}>{name}</span>
}

export const Icon: FC<IconProps> = ({name, iconClassName, className, ...buttonProps}) => {
  const btnClassName = ['btn-circle', className].join(' ')
  return (
    <Button {...buttonProps} className={btnClassName}>
      <MaterialIcon className={iconClassName} name={name} />
    </Button>
  )
}
