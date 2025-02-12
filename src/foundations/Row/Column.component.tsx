import { forwardRef } from 'react'
import { widthClassNames } from '@utils'
import { ColumnProps } from './Row.types'
import cs from 'classnames'
import styles from './Row.module.scss'

export const Column = forwardRef<HTMLDivElement, ColumnProps>(
  ({ modifiers = [], gutter, width, auto, children, ...rest }, ref) => {
    const { left, right } = gutter || {}
    const widths = widthClassNames(width)

    return (
      <div
        ref={ref}
        className={cs(
          styles['row__column'],
          left && styles['gutter-left'],
          right && styles['gutter-right'],
          auto && styles['auto'],
          widths.map((item) => styles[item]),
          ...modifiers
        )}
        {...rest}
      >
        {children && children}
      </div>
    )
  }
)

Column.displayName = 'Column'
