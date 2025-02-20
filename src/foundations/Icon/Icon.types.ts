import type { HTMLAttributes } from 'react'
import type { GlobalColor, GlobalModifiers, GlobalSize } from '@global'

export type IconNames = 'happy' | 'angry'

export type IconProps = {
  name: IconNames
} & HTMLAttributes<HTMLSpanElement> &
  GlobalModifiers &
  GlobalColor &
  GlobalSize
