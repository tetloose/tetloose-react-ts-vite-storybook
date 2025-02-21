import { forwardRef } from 'react'
import { Typography } from '@foundations/Typography/Typography.component'
import type { LabelProps } from './Form.types'
import styles from './Form.module.scss'

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ modifiers = [], label, error = false, children, ...rest }, ref) => (
    <label ref={ref} {...rest}>
      {label && (
        <Typography
          {...label}
          tag={'span'}
          modifiers={[
            styles['form__label'],
            error ? styles['has-error'] : '',
            ...modifiers
          ]}
        />
      )}
      {children && children}
    </label>
  )
)

Label.displayName = 'Label'
