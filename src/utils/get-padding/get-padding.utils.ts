import { breakpoints, directions } from '@constants'
import type { Padding } from './get-padding.types'

export const getPadding = (padding: Padding['padding']): string[] =>
  padding && directions && breakpoints
    ? directions.flatMap((direction) =>
        padding[direction]
          ? breakpoints.flatMap((breakpoint) =>
              padding[direction] && padding[direction][breakpoint] !== null
                ? [
                    `${breakpoint}-padding-${direction}-${padding[direction][breakpoint]}`
                  ]
                : []
            )
          : []
      )
    : []
