import {
  GlobalChildren,
  GlobalFlexAlign,
  GlobalFlexWrap,
  GlobalGap,
  GlobalJustify,
  GlobalModifiers,
  GlobalSpacers
} from '@global'

export type ActionProps = GlobalChildren &
  GlobalModifiers &
  GlobalJustify &
  GlobalFlexAlign &
  GlobalGap &
  GlobalFlexWrap &
  GlobalSpacers
