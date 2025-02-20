import { createElement, forwardRef } from 'react'
import { Spacer } from '@foundations'
import { RichText } from './_Rich-text.component'
import type { TypographyProps } from './Typography.types'
import cs from 'classnames'
import styles from './Typography.module.scss'

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      modifiers = [],
      tag = 'span',
      padding,
      margin,
      size,
      linkColor = 'dark',
      color = 'dark',
      fontWeight,
      display,
      fontStyle,
      textTransform,
      whiteSpace,
      textAlign,
      text,
      richText,
      children,
      ...rest
    },
    ref
  ) => {
    const element =
      !richText && tag
        ? createElement(
            tag,
            {
              className: cs(
                styles['typography'],
                !richText && tag && (tag === 'ol' || tag === 'ul')
                  ? styles[tag]
                  : '',
                !richText && size ? styles[size] : '',
                whiteSpace ? styles[`white-space-${whiteSpace}`] : '',
                styles[`link-color-${linkColor}`],
                styles[`color-${color}`],
                fontWeight ? styles[`font-weight-${fontWeight}`] : '',
                display ? styles[`display-${display}`] : '',
                fontStyle ? styles[`font-style-${fontStyle}`] : '',
                textAlign ? styles[`text-align-${textAlign}`] : '',
                textTransform ? styles[`text-transform-${textTransform}`] : '',
                ...modifiers
              ),
              ref,
              ...rest
            },
            <Spacer display={'inline-block'} padding={padding} margin={margin}>
              {text && text}
              {children && children}
            </Spacer>
          )
        : undefined

    return richText ? (
      <RichText
        ref={ref}
        modifiers={modifiers}
        padding={padding}
        margin={margin}
        linkColor={linkColor}
        color={color}
        fontWeight={fontWeight}
        display={display}
        fontStyle={fontStyle}
        textTransform={textTransform}
        whiteSpace={whiteSpace}
        textAlign={textAlign}
        richText={richText}
        {...rest}
      />
    ) : (
      element
    )
  }
)

Typography.displayName = 'Typography'
