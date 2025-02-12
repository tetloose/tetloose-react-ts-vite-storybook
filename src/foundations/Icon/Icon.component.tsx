import { forwardRef } from 'react'
import { IconProps } from './Icon.types'
import cs from 'classnames'
import styles from './Icon.module.scss'

export const Icon = forwardRef<HTMLElement, IconProps>(
  ({ modifiers = [], name, color, ...rest }, ref) => {
    return (
      <i
        ref={ref}
        className={cs(
          styles['icon'],
          styles[name],
          color && styles[color],
          ...modifiers
        )}
        {...rest}
      />
    )
  }
)

Icon.displayName = 'Icon'
