import type { Spacers } from './utils/get-spacing.types'
import type { GlobalChildren, GlobalDisplay, GlobalModifiers } from '@global'

export type SpacerProps = GlobalChildren &
  GlobalModifiers &
  GlobalDisplay &
  Spacers
