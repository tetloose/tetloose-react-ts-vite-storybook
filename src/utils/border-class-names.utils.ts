import { GlobalBorder } from '@global'

export const borderClassNames = (border: GlobalBorder['border']): string[] => {
  return border
    ? Object.entries(border).flatMap(([key, value]) =>
        value ? [`border-${key}`] : []
      )
    : []
}
