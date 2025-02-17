import { breakpoints } from '@constants'
import { Width } from './column-width.types'

export const columnWidth = (width: Width): string[] =>
  width && breakpoints
    ? breakpoints.flatMap((key) =>
        width[key as keyof Width]
          ? [`${key}-width-${width[key as keyof Width]}`]
          : []
      )
    : []
