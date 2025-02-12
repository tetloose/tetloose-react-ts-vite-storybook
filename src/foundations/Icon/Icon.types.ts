import { HTMLAttributes } from 'react'
import { GlobalColor, GlobalModifiers, GlobalSize } from '@global'

export type IconNames = 'face'

export type IconProps = {
  name: IconNames
  size?: GlobalSize
} & HTMLAttributes<HTMLSpanElement> &
  GlobalModifiers &
  GlobalColor
