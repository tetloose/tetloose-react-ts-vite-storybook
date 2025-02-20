import { breakpoints } from '@constants'
import type { GetSpacing } from './get-spacing.types'

const getSpacingValue = <T>(value: T): string[] =>
  breakpoints
    ? breakpoints.flatMap((breakpoint) =>
        value[breakpoint as keyof T]
          ? [`${breakpoint}-padding-${value[breakpoint as keyof T]}`]
          : []
      )
    : []

export const getSpacing = ({ padding, margin }: GetSpacing): string[] =>
  breakpoints
    ? padding
      ? getSpacingValue(padding)
      : margin
        ? getSpacingValue(margin)
        : []
    : []
