import { forwardRef } from 'react'
import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import type { SpacerProps } from './Spacer.types'
import cs from 'classnames'
import styles from './Spacer.module.scss'

export const Spacer = forwardRef<HTMLElement, SpacerProps>(
  ({ modifiers = [], display, margin, padding, children, ...rest }, ref) => {
    const paddings = getBreakpoints('padding', padding)
    const margins = getBreakpoints('margin', margin)
    const displays = getBreakpoints('display', display)

    return (
      <span
        ref={ref}
        className={cs(
          styles['spacer'],
          displays &&
            displays.length > 0 &&
            displays.map((display) => styles[display]),
          paddings &&
            paddings.length > 0 &&
            paddings.map((padding) => styles[padding]),
          margins &&
            margins.length > 0 &&
            margins.map((margin) => styles[margin]),
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
