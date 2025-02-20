import { forwardRef } from 'react'
import { getBorder } from '@utils'
import type { TableProps } from './Table.types'
import cs from 'classnames'
import styles from './Table.module.scss'

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      modifiers = [],
      layout = 'fixed',
      borderCollapse = 'collapse',
      verticalAlign = 'middle',
      bg = 'light',
      border,
      borderColor = 'dark',
      hide,
      children,
      ...rest
    },
    ref
  ) => {
    if (hide) return null

    const borders = getBorder(border, borderColor)

    return (
      <table
        ref={ref}
        className={cs(
          styles['table'],
          styles[`bg-${bg}`],
          styles[`table-layout-${layout}`],
          styles[`table-border-${borderCollapse}`],
          styles[`vertical-align-${verticalAlign}`],
          borders && borders.map((name) => styles[name]),
          ...modifiers
        )}
        {...rest}
      >
        {children && children}
      </table>
    )
  }
)

Table.displayName = 'Table'
