import { forwardRef } from 'react'
import { RowProps } from './Row.types'
import cs from 'classnames'
import styles from './Row.module.scss'

export const Row = forwardRef<HTMLDivElement, RowProps>(
  (
    {
      modifiers = [],
      direction,
      justify,
      align,
      wrap = 'wrap',
      gutter,
      height,
      children,
      ...rest
    },
    ref
  ) => {
    const { left, right } = gutter || {}

    return (
      <div
        ref={ref}
        className={cs(
          styles['row'],
          direction && styles[`direction-${direction}`],
          justify && styles[`justify-${justify}`],
          align && styles[`align-${align}`],
          styles[`wrap-${wrap}`],
          left && styles['gutter-left'],
          right && styles['gutter-right'],
          height && styles[`height-${height}`],
          ...modifiers
        )}
        {...rest}
      >
        {children && children}
      </div>
    )
  }
)

Row.displayName = 'Row'
