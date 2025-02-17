import { forwardRef } from 'react'
import { getBorder } from '@utils'
import { getPadding } from './utils/get-padding.utils'
import { ContainerProps } from './Container.types'
import cs from 'classnames'
import styles from './Container.module.scss'

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      modifiers = [],
      tag = 'div',
      bg,
      border,
      borderColor = 'dark',
      padding,
      children,
      ...rest
    },
    ref
  ) => {
    const Element = tag
    const borders = getBorder(border, borderColor)
    const paddings = getPadding(padding)

    return (
      <Element
        ref={ref}
        className={cs(
          styles['container'],
          bg && styles[`bg-${bg}`],
          borders && borders.map((name) => styles[name]),
          padding && paddings.map((name) => styles[name]),
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
