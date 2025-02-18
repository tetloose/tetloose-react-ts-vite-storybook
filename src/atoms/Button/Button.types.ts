import { ButtonHTMLAttributes } from 'react'
import { NavLinkProps } from 'react-router-dom'
import { GlobalChildren, GlobalModifiers, GlobalSize } from '@global'

type ButtonVariant = 'primary' | 'secondary'

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
