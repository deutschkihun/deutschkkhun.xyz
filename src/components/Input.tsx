import {DetailedHTMLProps, InputHTMLAttributes, forwardRef} from 'react'

export type ReactInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export type InputProps = ReactInputProps & {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {className: _className, ...inputProps} = props
  const className = ['input', _className].join(' ')
  return <input ref={ref} className={className} {...inputProps} />
})
