import { GlobalWidth } from '@global'

export const widthClassNames = (width: GlobalWidth['width']): string[] => {
  if (!width) return []

  const keys = ['default', 'sml', 'med', 'lrg', 'xlrg', 'xxlrg']

  return keys.flatMap((key) => {
    const value = width[key as keyof GlobalWidth['width']]
    return value != null ? [`${key}-width-${value}`] : []
  })
}
