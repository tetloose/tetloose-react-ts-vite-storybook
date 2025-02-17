import { GlobalChildren, GlobalDisplay, GlobalModifiers } from '@global'
import { Spacers } from './utils/get-spacing.types'

export type SpacerProps = GlobalChildren &
  GlobalModifiers &
  GlobalDisplay &
  Spacers
