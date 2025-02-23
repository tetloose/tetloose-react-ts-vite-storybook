import { forwardRef } from 'react'
import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import { Spacer } from '@foundations/Spacer/Spacer.component'
import type { ActionProps } from './Action.types'
import styles from './Action.module.scss'

export const Action = forwardRef<HTMLElement, ActionProps>(
  (
    {
      modifiers = [],
      display = { default: 'flex' },
      margin,
      padding,
      align = { default: 'center' },
      gap = { default: 0 },
      wrap = { default: 'wrap' },
      justify,
      children,
      ...rest
    },
    ref
  ) => {
    const aligns = getBreakpoints('align', align)
    const gaps = getBreakpoints('gap', gap)
    const wraps = getBreakpoints('wrap', wrap)
    const justifys = getBreakpoints('justify', justify)

    return (
      <Spacer
        ref={ref}
        padding={padding}
        margin={margin}
        display={display}
        modifiers={[
          styles['action'],
          ...(aligns.map((align) => styles[align]) || []),
          ...(gaps.map((gap) => styles[gap]) || []),
          ...(wraps.map((wrap) => styles[wrap]) || []),
          ...(justifys.map((justify) => styles[justify]) || []),
          ...modifiers
        ]}
        {...rest}
      >
        {children && children}
      </Spacer>
    )
  }
)

Action.displayName = 'Action'
