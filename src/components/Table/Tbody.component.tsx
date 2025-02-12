import { forwardRef } from 'react'
import { WrapperProps } from './Table.types'
import cs from 'classnames'
import styles from './Table.module.scss'

export const Tbody = forwardRef<HTMLTableSectionElement, WrapperProps>(
  ({ modifiers = [], hide = false, bg = 'light', children, ...rest }, ref) => {
    if (hide) return null

    return (
      <tbody
        ref={ref}
        className={cs(styles['tbody'], styles[`bg-${bg}`], ...modifiers)}
        {...rest}
      >
        {children && children}
      </tbody>
    )
  }
)

Tbody.displayName = 'Tbody'
