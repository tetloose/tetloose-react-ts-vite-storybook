import { forwardRef } from 'react'
import { getBorder } from '@utils'
import { TdProps } from './Table.types'
import cs from 'classnames'
import styles from './Table.module.scss'

export const Td = forwardRef<HTMLTableCellElement, TdProps>(
  (
    {
      modifiers = [],
      border,
      borderColor = 'dark',
      textAlign = 'left',
      children,
      ...rest
    },
    ref
  ) => {
    const borders = getBorder(border, borderColor)

    return (
      <td
        ref={ref}
        className={cs(
          styles['td'],
          styles[textAlign],
          borders && borders.map((name) => styles[name]),
          ...modifiers
        )}
        {...rest}
      >
        {children}
      </td>
    )
  }
)

Td.displayName = 'Td'
