import { GlobalImageSize, GlobalModifiers, GlobalRatios } from '@global'

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

export type ImageProps = {
  ratio?: GlobalRatios
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
} & GlobalImageSize &
  GlobalModifiers
