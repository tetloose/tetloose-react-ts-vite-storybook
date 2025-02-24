import { forwardRef } from 'react'
import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import { getPadding } from '@utils/get-padding/get-padding.utils'
import type { ColumnProps } from './Row.types'
import cs from 'classnames'
import styles from './Row.module.scss'

export const Column = forwardRef<HTMLDivElement, ColumnProps>(
  ({ modifiers = [], tag = 'div', padding, width, children, ...rest }, ref) => {
    const Element = tag
    const paddings = getPadding(padding)
    const widths = getBreakpoints('width', width)

    return (
      <Element
        ref={ref}
        className={cs(
          styles['row__column'],
          ...(paddings.map((padding) => styles[padding]) || []),
          ...(widths.map((width) => styles[width]) || []),
          ...modifiers
        )}
        {...rest}
      >
        {children && children}
      </Element>
    )
  }
)

Column.displayName = 'Column'
