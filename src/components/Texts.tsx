import type {FC, DetailedHTMLProps, HTMLAttributes} from 'react'

type TextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>

export type TitleProps = TextProps & {
  numberOfLines?: number
}
export const Title: FC<TitleProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  // prettier-ignore
  const className = ['font-bold text-5xl text-center whitespace-pre-line', _className, numberOfLines ? `line-clamp-${numberOfLines}`: ''].join(' ')
  return <p {...props} className={className} />
}

export type SubtitleProps = TitleProps & {}
export const Subtitle: FC<SubtitleProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  // prettier-ignore
  const className = ['font-semibold text-3xl text-center whitespace-pre-line', _className, numberOfLines ? `line-clamp-${numberOfLines}`: ''].join(' ')
  return <p {...props} className={className} />
}

export type TypographyProps = SubtitleProps & {}
export const Typography: FC<TypographyProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  // prettier-ignore
  const className = ['text-sm whitespace-pre-line', _className, numberOfLines ? `line-clamp-${numberOfLines}`: ''].join(' ')
  return <p {...props} className={className} />
}

export type ParagraphProps = TypographyProps & {}
export const Paragraph: FC<ParagraphProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  // prettier-ignore
  const className = ['font-normal text-base whitespace-pre-line', _className, numberOfLines ? `line-clamp-${numberOfLines}`: ''].join(' ')
  return <p {...props} className={className} />
}
