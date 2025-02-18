import { forwardRef } from 'react'
import { getPadding } from '@utils'
import { RowProps } from './Row.types'
import cs from 'classnames'
import styles from './Row.module.scss'

export const Row = forwardRef<HTMLDivElement, RowProps>(
  (
    {
      modifiers = [],
      tag = 'div',
      direction,
      justify,
      align,
      wrap = 'wrap',
      padding,
      height,
      children,
      ...rest
    },
    ref
  ) => {
    const Element = tag
    const paddings = getPadding(padding)

    return (
      <Element
        ref={ref}
        className={cs(
          styles['row'],
          direction && styles[`direction-${direction}`],
          justify && styles[`justify-${justify}`],
          align && styles[`align-${align}`],
          styles[`wrap-${wrap}`],
          paddings && paddings.map((name) => styles[name]),
          height && styles[`height-${height}`],
          ...modifiers
        )}
        {...rest}
      >
        {children && children}
      </Element>
    )
  }
)

Row.displayName = 'Row'
