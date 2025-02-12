import { forwardRef } from 'react'
import { WrapperProps } from './Table.types'
import cs from 'classnames'
import styles from './Table.module.scss'

export const Thead = forwardRef<HTMLTableSectionElement, WrapperProps>(
  ({ modifiers = [], hide = false, bg = 'light', children, ...rest }, ref) => {
    if (hide) return null

    return (
      <thead
        ref={ref}
        className={cs(styles['thead'], styles[`bg-${bg}`], ...modifiers)}
        {...rest}
      >
        {children && children}
      </thead>
    )
  }
)

Thead.displayName = 'Thead'
