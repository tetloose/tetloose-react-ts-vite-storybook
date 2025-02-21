import type { Width } from './column-width.types'
import { breakpoints } from '@global/global.constants'

export const columnWidth = (width: Width): string[] =>
  width && breakpoints
    ? breakpoints.flatMap((key) =>
        width[key as keyof Width]
          ? [`${key}-width-${width[key as keyof Width]}`]
          : []
      )
    : []
