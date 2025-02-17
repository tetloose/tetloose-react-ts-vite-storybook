import { forwardRef } from 'react'
import { ButtonProps } from './Button.types'
import cs from 'classnames'
import styles from './Button.module.scss'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { modifiers = [], variant, label, type = 'button', children, ...rest },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cs(
          styles['button'],
          variant && styles[`is-${variant}`],
          ...modifiers
        )}
        type={type}
        {...rest}
      >
        {label && label}
        {children && children}
      </button>
    )
  }
)

Button.displayName = 'Button'
