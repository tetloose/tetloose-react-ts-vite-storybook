import { GlobalModifiers, GlobalRatios } from '@global'

type Position =
  | 'center'
  | 'left-top'
  | 'left-center'
  | 'left-bottom'
  | 'right-top'
  | 'right-center'
  | 'right-bottom'
  | 'center-top'
  | 'center-bottom'

type ImageSize = 'cover' | 'contain'

export type ImageProps = {
  ratio?: GlobalRatios
  size?: ImageSize
  position?: Position
  src?: string
  desktop?: string
  tablet?: string
  mobile?: string
  placeholder?: string
  width?: number
  height?: number
  alt?: string
  blur?: boolean
} & GlobalModifiers
