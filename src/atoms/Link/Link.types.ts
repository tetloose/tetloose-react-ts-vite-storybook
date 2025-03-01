import type { NavLinkProps } from 'react-router-dom'
import type { TypographyProps } from '@foundations/Typography/Typography.types'
import type {
  Color,
  GlobalChildren,
  GlobalModifiers
} from '@global/global.types'

export type LinkProps = {
  variant?: Color
  typography?: Omit<
    TypographyProps,
    'modifiers' | 'tag' | 'richtext' | 'color' | 'text' | 'linkVariant'
  >
} & GlobalModifiers &
  GlobalChildren &
  NavLinkProps

export type ContentLink = LinkProps
