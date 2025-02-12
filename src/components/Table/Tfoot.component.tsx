import { forwardRef } from 'react'
import { WrapperProps } from './Table.types'
import cs from 'classnames'
import styles from './Table.module.scss'

export const Tfoot = forwardRef<HTMLTableSectionElement, WrapperProps>(
  ({ modifiers = [], hide = false, bg = 'light', children, ...rest }, ref) => {
    if (hide) return null

    return (
      <tfoot
        ref={ref}
        className={cs(styles['tfoot'], styles[`bg-${bg}`], ...modifiers)}
        {...rest}
      >
        {children && children}
      </tfoot>
    )
  }
)

Tfoot.displayName = 'Tfoot'
