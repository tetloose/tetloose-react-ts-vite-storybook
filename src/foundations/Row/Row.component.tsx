import { forwardRef } from 'react'
import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import { getPadding } from '@utils/get-padding/get-padding.utils'
import type { RowProps } from './Row.types'
import cs from 'classnames'
import styles from './Row.module.scss'

export const Row = forwardRef<HTMLDivElement, RowProps>(
  (
    {
      modifiers = [],
      tag = 'div',
      display = { default: 'flex' },
      align,
      direction,
      justify,
      wrap = { default: 'wrap' },
      padding,
      height,
      children,
      ...rest
    },
    ref
  ) => {
    const Element = tag
    const displays = getBreakpoints('display', display)
    const aligns = getBreakpoints('align', align)
    const directions = getBreakpoints('direction', direction)
    const justifys = getBreakpoints('justify', justify)
    const wraps = getBreakpoints('wrap', wrap)
    const heights = getBreakpoints('height', height)
    const paddings = padding && getPadding(padding)

    return (
      <Element
        ref={ref}
        className={cs(
          styles['row'],
          displays.map((display) => styles[display]),
          aligns && aligns.length > 0 && aligns.map((align) => styles[align]),
          directions &&
            directions.length > 0 &&
            directions.map((direction) => styles[direction]),
          justifys &&
            justifys.length > 0 &&
            justifys.map((justify) => styles[justify]),
          wraps.map((wrap) => styles[wrap]),
          heights &&
            heights.length > 0 &&
            heights.map((height) => styles[height]),
          paddings && paddings.map((name) => styles[name]),
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
