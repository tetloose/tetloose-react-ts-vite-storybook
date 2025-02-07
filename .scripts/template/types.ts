import { GlobalModifiers } from '@global'

type Variants = 'variant-1' | 'variant-2'

export type EXPORT_NAMEProps = {
  variants?: Variants[]
} & GlobalModifiers
