import type { Spacers } from './utils/get-spacing.types'
import type {
  GlobalChildren,
  GlobalDisplay,
  GlobalModifiers
} from '@global/global.types'

export type SpacerProps = GlobalChildren &
  GlobalModifiers &
  GlobalDisplay &
  Spacers
