import { forwardRef } from 'react'
import { Action } from '@foundations/Action/Action.component'
import { Button } from '@atoms/Button/Button.component'
import type { FormProps } from './Form.types'
import cs from 'classnames'
import styles from './Form.module.scss'

export const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ modifiers = [], actions, children, ...rest }, ref) => {
    const { actionOptions, submitButton, resetButton } = actions || {}

    return (
      <form ref={ref} className={cs(styles['form'], ...modifiers)} {...rest}>
        {children && children}
        {actions && (
          <Action {...actionOptions}>
            {submitButton && <Button {...submitButton} type={'submit'} />}
            {resetButton && <Button {...resetButton} type={'reset'} />}
          </Action>
        )}
      </form>
    )
  }
)

Form.displayName = 'Form'
