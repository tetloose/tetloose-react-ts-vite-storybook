import { forwardRef } from 'react'
import { TextareaProps } from './Form.types'
import cs from 'classnames'
import styles from './Form.module.scss'

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ modifiers = [], error = false, ...rest }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cs(
          styles['form__input'],
          styles['is-textarea'],
          error && styles['has-error'],
          ...modifiers
        )}
        {...rest}
      />
    )
  }
)

Textarea.displayName = 'Textarea'
