import { forwardRef } from 'react'
import { LoadingProps } from './Loading.types'
import cs from 'classnames'
import styles from './Loading.module.scss'

export const Loading = forwardRef<HTMLElement, LoadingProps>(
  ({ modifiers = [], color = 'dark', position, ...rest }, ref) => {
    return (
      <span
        ref={ref}
        className={cs(
          styles['loading'],
          styles[`color-${color}`],
          position && styles[`position-${position}`],
          ...modifiers
        )}
        {...rest}
      />
    )
  }
)

Loading.displayName = 'Loading'
