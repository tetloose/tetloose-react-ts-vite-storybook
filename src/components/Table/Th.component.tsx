import { forwardRef } from 'react'
import { borderClassNames } from '@utils'
import { TdProps } from './Table.types'
import cs from 'classnames'
import styles from './Table.module.scss'

export const Th = forwardRef<HTMLTableCellElement, TdProps>(
  ({ modifiers = [], border, textAlign = 'left', children, ...rest }, ref) => {
    const borders = borderClassNames(border)

    return (
      <th
        ref={ref}
        className={cs(
          styles['th'],
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
