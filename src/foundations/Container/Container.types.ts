import {
  GlobalBg,
  GlobalChildren,
  GlobalHtmlTag,
  GlobalModifiers
} from '@global'
import { Border } from '@utils/get-border/get-border.types'
import { Padding } from '@utils/get-padding/get-padding.types'

export type ContainerProps = GlobalModifiers &
  GlobalHtmlTag &
  GlobalBg &
  Border &
  Padding &
  GlobalChildren
