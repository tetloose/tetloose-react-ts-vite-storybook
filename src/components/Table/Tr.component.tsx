import { forwardRef } from 'react'
import { getBorder } from '@utils'
import { TrProps } from './Table.types'
import cs from 'classnames'
import styles from './Table.module.scss'

export const Tr = forwardRef<HTMLTableRowElement, TrProps>(
  (
    { modifiers = [], border, borderColor = 'dark', hide, children, ...rest },
    ref
  ) => {
    const borders = getBorder(border, borderColor)

    if (hide) return null

    return (
      <tr
        ref={ref}
        className={cs(
          styles['tr'],
          borders && borders.map((name) => styles[name]),
          ...modifiers
        )}
        {...rest}
      >
        {children && children}
      </tr>
    )
  }
)

Tr.displayName = 'Tr'
