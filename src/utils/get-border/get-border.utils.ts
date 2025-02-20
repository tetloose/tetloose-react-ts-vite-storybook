import type { Border } from './get-border.types'
import type { Color } from '@global'

export const getBorder = (border: Border['border'], color: Color): string[] =>
  border
    ? Object.entries(border).flatMap(([key, value]) =>
        value ? [`border-${key}`, `border-${key}-${color}`] : []
      )
    : []
