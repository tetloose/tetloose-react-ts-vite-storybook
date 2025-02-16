import { forwardRef } from 'react'
import { getBorder } from '@utils'
import { TdProps } from './Table.types'
import cs from 'classnames'
import styles from './Table.module.scss'

export const Th = forwardRef<HTMLTableCellElement, TdProps>(
  (
    {
      modifiers = [],
      bg = 'light',
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
      <th
        ref={ref}
        className={cs(
          styles['th'],
          styles[`bg-${bg}`],
          styles[`text-align-${textAlign}`],
          borders && borders.map((name) => styles[name]),
          ...modifiers
        )}
        {...rest}
      >
        {children && children}
      </th>
    )
  }
)

Th.displayName = 'Th'
