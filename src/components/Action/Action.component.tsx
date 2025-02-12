import { forwardRef } from 'react'
import { Spacer } from '@foundations'
import { ActionProps } from './Action.types'
import styles from './Action.module.scss'

export const Action = forwardRef<HTMLElement, ActionProps>(
  (
    {
      modifiers = [],
      margin = 0,
      padding = 0,
      align = 'center',
      gap = 0,
      wrap = 'wrap',
      justify,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <Spacer
        ref={ref}
        padding={padding}
        margin={margin}
        modifiers={[
          styles['action'],
          styles[`gap-${gap}`],
          justify ? styles[`justify-${justify}`] : '',
          styles[`align-${align}`],
          styles[`wrap-${wrap}`],
          ...modifiers
        ]}
        {...rest}
      >
        {children && children}
      </Spacer>
    )
  }
)

Action.displayName = 'Action'
