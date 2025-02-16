import { Color } from '@global'

export type Border = {
  border?: {
    top?: boolean
    right?: boolean
    bottom?: boolean
    left?: boolean
  }
  borderColor?: Color
}
