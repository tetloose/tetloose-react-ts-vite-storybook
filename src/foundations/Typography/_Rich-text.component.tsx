import { forwardRef } from 'react'
import { Spacer } from '@foundations'
import { RichTextProps } from './Typography.types'
import styles from './Typography.module.scss'

export const RichText = forwardRef<HTMLElement, RichTextProps>(
  (
    {
      modifiers = [],
      padding,
      margin,
      linkColor,
      color,
      fontWeight,
      display = 'block',
      fontStyle,
      textTransform,
      whiteSpace,
      textAlign,
      richText,
      ...rest
    },
    ref
  ) => (
    <Spacer
      ref={ref}
      modifiers={[
        styles['typography'],
        styles['is-rich-text'],
        whiteSpace ? styles[`white-space-${whiteSpace}`] : '',
        styles[`link-color-${linkColor}`],
        color ? styles[`color-${color}`] : '',
        fontWeight ? styles[`font-weight-${fontWeight}`] : '',
        styles[`display-${display}`],
        fontStyle ? styles[`font-style-${fontStyle}`] : '',
        textAlign ? styles[`text-align-${textAlign}`] : '',
        textTransform ? styles[`text-transform-${textTransform}`] : '',
        ...modifiers
      ]}
      display={display}
      padding={padding}
      margin={margin}
      {...(richText && {
        dangerouslySetInnerHTML: { __html: richText }
      })}
      {...rest}
    />
  )
)

RichText.displayName = 'RichText'
