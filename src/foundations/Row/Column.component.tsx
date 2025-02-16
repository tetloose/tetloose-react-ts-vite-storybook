import { forwardRef } from 'react'
import { columnWidth } from './utils/column-width.utils'
import { ColumnProps } from './Row.types'
import cs from 'classnames'
import styles from './Row.module.scss'

export const Column = forwardRef<HTMLDivElement, ColumnProps>(
  ({ modifiers = [], tag = 'div', gutter, width, children, ...rest }, ref) => {
    const { left, right } = gutter || {}

    const Element = tag

    return (
      <Element
        ref={ref}
        className={cs(
          styles['row__column'],
          left && styles['gutter-left'],
          right && styles['gutter-right'],
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
