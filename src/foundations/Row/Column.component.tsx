import { forwardRef } from 'react'
import { getPadding } from '@utils/get-padding/get-padding.utils'
import { columnWidth } from './utils/column-width.utils'
import type { ColumnProps } from './Row.types'
import cs from 'classnames'
import styles from './Row.module.scss'

export const Column = forwardRef<HTMLDivElement, ColumnProps>(
  ({ modifiers = [], tag = 'div', padding, width, children, ...rest }, ref) => {
    const Element = tag
    const paddings = padding && getPadding(padding)

    return (
      <Element
        ref={ref}
        className={cs(
          styles['row__column'],
          paddings && paddings.map((name) => styles[name]),
          width && columnWidth(width).map((item) => styles[item]),
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
