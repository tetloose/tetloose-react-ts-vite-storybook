import type { Spacers } from '@foundations/Spacer/utils/get-spacing.types'
import type {
  GlobalChildren,
  GlobalFlexAlign,
  GlobalFlexWrap,
  GlobalGap,
  GlobalJustify,
  GlobalModifiers
} from '@global/global.types'

export type ActionProps = GlobalChildren &
  GlobalModifiers &
  GlobalJustify &
  GlobalFlexAlign &
  GlobalGap &
  GlobalFlexWrap &
  Spacers
