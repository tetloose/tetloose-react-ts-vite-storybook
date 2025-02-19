import { forwardRef } from 'react'
import { InputProps } from './Form.types'
import cs from 'classnames'
import styles from './Form.module.scss'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ modifiers = [], type = 'text', error = false, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cs(
          styles['form__input'],
          error && styles['has-error'],
          ...modifiers
        )}
        {...rest}
      />
    )
  }
)

Input.displayName = 'Input'
