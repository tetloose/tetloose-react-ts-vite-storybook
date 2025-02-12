import { forwardRef } from 'react'
import { SpacerProps } from './Spacer.types'
import cs from 'classnames'
import styles from './Spacer.module.scss'

export const Spacer = forwardRef<HTMLElement, SpacerProps>(
  ({ modifiers = [], display, margin, padding, children, ...rest }, ref) => {
    return (
      <span
        ref={ref}
        className={cs(
          styles['spacer'],
          display && styles[`display-${display}`],
          margin && styles[`margin-${margin}`],
          padding && styles[`padding-${padding}`],
          ...modifiers
        )}
        {...rest}
      >
        {children && children}
      </span>
    )
  }
)

Spacer.displayName = 'Spacer'
