import { createElement, forwardRef } from 'react'
import { getBorder } from '@utils'
import { TiProps } from './Table.types'
import cs from 'classnames'
import styles from './Table.module.scss'

export const Ti = forwardRef<HTMLElement, TiProps>(
  (
    {
      modifiers = [],
      tag = 'td',
      bg = 'light',
      border,
      borderColor = 'dark',
      textAlign = 'left',
      hide,
      children,
      ...rest
    },
    ref
  ) => {
    if (hide) return null

    const borders = getBorder(border, borderColor)

    return createElement(
      tag,
      {
        className: cs(
          styles['ti'],
          styles[tag],
          styles[`bg-${bg}`],
          styles[`text-align-${textAlign}`],
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
