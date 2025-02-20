import type { Ref } from 'react'
import { forwardRef } from 'react'
import { NavLink } from 'react-router-dom'
import type { ButtonProps } from './Button.types'
import cs from 'classnames'
import styles from './Button.module.scss'

export const Button = forwardRef<HTMLElement, ButtonProps>(
  (
    {
      modifiers = [],
      variant,
      url,
      rel,
      target,
      label,
      type = 'button',
      children,
      ...rest
    },
    ref
  ) => {
    const classNames = [
      styles['button'],
      variant && styles[`is-${variant}`],
      ...modifiers
    ]

    if (url) {
      return (
        <NavLink
          ref={ref as Ref<HTMLAnchorElement>}
          to={url}
          rel={rel ? rel : 'noreferrer'}
          target={target ? target : '_self'}
          className={cs(...classNames)}
          {...rest}
        >
          {label && label}
          {children && children}
        </NavLink>
      )
    } else {
      return (
        <button
          ref={ref as Ref<HTMLButtonElement>}
          className={cs(...classNames)}
          type={type}
          {...rest}
        >
          {label && label}
          {children && children}
        </button>
      )
    }
  }
)

Button.displayName = 'Button'
