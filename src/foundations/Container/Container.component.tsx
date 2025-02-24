import { forwardRef } from 'react'
import { getBorder } from '@utils/get-border/get-border.utils'
import { getPadding } from '@utils/get-padding/get-padding.utils'
import type { ContainerProps } from './Container.types'
import cs from 'classnames'
import styles from './Container.module.scss'

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      modifiers = [],
      tag = 'div',
      bg,
      border,
      borderColor,
      padding,
      children,
      ...rest
    },
    ref
  ) => {
    const Element = tag
    const borders = borderColor && getBorder(border, borderColor)
    const paddings = getPadding(padding)

    return (
      <Element
        ref={ref}
        className={cs(
          styles['container'],
          bg && styles[`bg-${bg}`],
          ...(paddings.map((padding) => styles[padding]) || []),
          ...((borders && borders.map((border) => styles[border])) || []),
          ...modifiers
        )}
        {...rest}
      >
        {children}
      </Element>
    )
  }
)

Container.displayName = 'Container'
