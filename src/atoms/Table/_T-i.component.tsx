import { createElement, forwardRef } from 'react'
import { getBorder } from '@utils/get-border/get-border.utils'
import type { TiProps } from './Table.types'
import cs from 'classnames'
import styles from './Table.module.scss'

export const Ti = forwardRef<HTMLElement, TiProps>(
  (
    {
      modifiers = [],
      tag = 'td',
      bg,
      border,
      borderColor,
      textAlign,
      hide,
      children,
      ...rest
    },
    ref
  ) => {
    if (hide) return null

    const borders = borderColor && getBorder(border, borderColor)

    return createElement(
      tag,
      {
        className: cs(
          styles['ti'],
          styles[tag],
          bg && styles[`bg-${bg}`],
          textAlign && styles[`text-align-${textAlign}`],
          borders && borders.map((name) => styles[name]),
          ...modifiers
        ),
        ref,
        ...rest
      },
      children && children
    )
  }
)

Ti.displayName = 'Ti'
