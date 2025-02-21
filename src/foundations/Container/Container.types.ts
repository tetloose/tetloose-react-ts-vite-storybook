import type { Border } from '@utils/get-border/get-border.types'
import type { Padding } from '@utils/get-padding/get-padding.types'
import type {
  GlobalBg,
  GlobalChildren,
  GlobalHtmlTag,
  GlobalModifiers
} from '@global/global.types'

export type ContainerProps = GlobalModifiers &
  GlobalHtmlTag &
  GlobalBg &
  Border &
  Padding &
  GlobalChildren
