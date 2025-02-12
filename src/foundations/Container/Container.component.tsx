import { forwardRef } from 'react'
import { borderClassNames, paddingClassNames } from '@utils'
import { ContainerProps } from './Container.types'
import cs from 'classnames'
import styles from './Container.module.scss'

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    { modifiers = [], bg, border, padding, children, ...rest }: ContainerProps,
    ref
  ) => {
    const borders = borderClassNames(border)
    const paddings = paddingClassNames(padding)

    return (
      <div
        ref={ref}
        className={cs(
          styles['container'],
          bg && styles[`bg-${bg}`],
          borders && borders.map((name) => styles[name]),
          paddings && paddings.map((name) => styles[name]),
          ...modifiers
        )}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'
