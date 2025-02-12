import {
  GlobalBg,
  GlobalBorder,
  GlobalChildren,
  GlobalModifiers,
  GlobalPadding
} from '@global'

export type ContainerProps = GlobalModifiers &
  GlobalBg &
  GlobalBorder &
  GlobalPadding &
  GlobalChildren
