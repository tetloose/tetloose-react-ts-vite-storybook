import { forwardRef } from 'react'
import { getBorder } from '@utils'
import { TableProps } from './Table.types'
import cs from 'classnames'
import styles from './Table.module.scss'

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      modifiers = [],
      bg = 'light',
      layout = 'fixed',
      borderCollapse = 'collapse',
      border,
      borderColor = 'dark',
      verticalAlign = 'middle',
      hide,
      children,
      ...rest
    },
    ref
  ) => {
    const borders = getBorder(border, borderColor)

    if (hide) return null

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
