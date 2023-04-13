import type {FC, DetailedHTMLProps, HTMLAttributes} from 'react'

type ReactSpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

export type MaterialIconProps = ReactSpanProps & {
  name: string
}

// prettier-ignore
export const MaerialIcon: FC<MaterialIconProps> = ({name, className: _className, ...props}) => {
  const className = ['material-icons', _className].join(' ')
  return <span {...props} className={className}>{name}</span>
}
