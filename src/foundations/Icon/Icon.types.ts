import { HTMLAttributes } from 'react'
import { GlobalColor, GlobalModifiers, GlobalSize } from '@global'

export type IconNames = 'happy' | 'angry'

export type IconProps = {
  name: IconNames
} & HTMLAttributes<HTMLSpanElement> &
  GlobalModifiers &
  GlobalColor &
  GlobalSize
