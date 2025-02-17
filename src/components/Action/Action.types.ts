import {
  GlobalChildren,
  GlobalFlexAlign,
  GlobalFlexWrap,
  GlobalGap,
  GlobalJustify,
  GlobalModifiers
} from '@global'
import { Spacers } from '@foundations/Spacer/utils/get-spacing.types'

export type ActionProps = GlobalChildren &
  GlobalModifiers &
  GlobalJustify &
  GlobalFlexAlign &
  GlobalGap &
  GlobalFlexWrap &
  Spacers
