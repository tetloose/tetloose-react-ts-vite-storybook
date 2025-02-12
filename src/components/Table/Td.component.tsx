import { forwardRef } from 'react'
import { borderClassNames } from '@utils'
import { TdProps } from './Table.types'
import cs from 'classnames'
import styles from './Table.module.scss'

export const Td = forwardRef<HTMLTableCellElement, TdProps>(
  ({ modifiers = [], border, textAlign = 'left', children, ...rest }, ref) => {
    const borders = borderClassNames(border)

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
