import type { ButtonHTMLAttributes } from 'react'
import type { NavLinkProps } from 'react-router-dom'
import type { GlobalChildren, GlobalModifiers, GlobalSize } from '@global'

type ButtonVariant = 'dark' | 'light' | 'link-dark' | 'link-light'

type ButtonType = 'button' | 'submit' | 'reset'

export type ButtonProps = {
  variant?: ButtonVariant
  type?: ButtonType
  label?: string
  url?: string
} & ButtonHTMLAttributes<HTMLElement> &
  Partial<NavLinkProps> &
  GlobalModifiers &
  GlobalSize &
  GlobalChildren

export type ContentButton = Pick<ButtonProps, 'variant' | 'label'>

export type ContentLink = Pick<
  ButtonProps,
  'variant' | 'label' | 'target' | 'rel' | 'url'
>
