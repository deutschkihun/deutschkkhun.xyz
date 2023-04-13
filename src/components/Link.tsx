import type {AnchorHTMLAttributes, DetailedHTMLProps, FC} from 'react'

export type ReactAnchorProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

export type LinkProps = ReactAnchorProps & {}

// prettier-ignore
export const Link: FC<LinkProps> = ({className: _className,href,children, ...anchorProps}) => {
  const className = ['link', 'no-underline','block','mb-2','text-sm',_className].join(' ')
  return <a href={href} {...anchorProps} className={className}>{children}</a>
}