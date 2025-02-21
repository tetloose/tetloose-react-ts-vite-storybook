import { forwardRef } from 'react'
import { getSpacing } from './utils/get-spacing.utils'
import type { SpacerProps } from './Spacer.types'
import cs from 'classnames'
import styles from './Spacer.module.scss'

export const Spacer = forwardRef<HTMLElement, SpacerProps>(
  ({ modifiers = [], display, margin, padding, children, ...rest }, ref) => {
    const paddings = padding && getSpacing({ padding: padding })
    const margins = margin && getSpacing({ margin: margin })

    return (
      <span
        ref={ref}
        className={cs(
          styles['spacer'],
          display && styles[`display-${display}`],
          paddings && paddings.map((name) => styles[name]),
          margins && margins.map((name) => styles[name]),
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
