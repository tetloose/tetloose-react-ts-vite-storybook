import { Color } from '@global'
import { Border } from './get-border.types'

export const getBorder = (border: Border['border'], color: Color): string[] =>
  border
    ? Object.entries(border).flatMap(([key, value]) =>
        value ? [`border-${key}`, `border-${key}-${color}`] : []
      )
    : []
