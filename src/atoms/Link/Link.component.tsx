import { forwardRef } from 'react'
import { NavLink } from 'react-router-dom'
import { Typography } from '@foundations/Typography/Typography.component'
import type { LinkProps } from './Link.types'

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      modifiers = [],
      variant = 'dark',
      to,
      rel = 'noreferrer',
      target = '_self',
      title,
      typography,
      children,
      ...rest
    },
    ref
  ) => {
    const { display = { default: 'inline-block' } } = typography || {}

    return (
      <Typography
        modifiers={[...modifiers]}
        tag={'span'}
        linkVariant={variant}
        {...typography}
        display={display}
      >
        <NavLink ref={ref} to={to || ''} rel={rel} target={target} {...rest}>
          {title}
          {children && children}
        </NavLink>
      </Typography>
    )
  }
)

Link.displayName = 'Link'
