import { forwardRef } from 'react'
import { borderClassNames } from '@utils'
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
      verticalAlign = 'middle',
      hide,
      children,
      ...rest
    },
    ref
  ) => {
    const borders = borderClassNames(border)

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
