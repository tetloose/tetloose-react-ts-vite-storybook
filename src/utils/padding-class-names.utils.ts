import { breakpoints } from '@constants'
import { GlobalPadding } from '@global'

export const paddingClassNames = (
  padding: GlobalPadding['padding']
): string[] => {
  if (!padding) return []

  const sides: (keyof typeof padding)[] = ['top', 'right', 'bottom', 'left']

  return sides.flatMap((side) => {
    const sideValues = padding[side]
    if (!sideValues) return []
    return breakpoints.flatMap((breakpoint) => {
      const value = sideValues[breakpoint]
      return value != null ? [`${breakpoint}-padding-${side}-${value}`] : []
    })
  })
}
