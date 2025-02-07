import { forwardRef } from 'react'
import { ButtonProps } from './Button.types'
import cs from 'classnames'
import styles from './Button.module.scss'

const ButtonBase = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      modifiers = [],
      variant,
      size,
      label,
      type = 'button',
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cs(
          styles['button'],
          variant && styles[`is-${variant}`],
          size && styles[`is-${size}`],
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

ButtonBase.displayName = 'Button'

export const Button = ButtonBase
