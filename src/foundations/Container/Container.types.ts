import {
  GlobalBg,
  GlobalChildren,
  GlobalHtmlTag,
  GlobalModifiers
} from '@global'
import { Padding } from './utils/get-padding.types'
import { Border } from '@utils/get-border/get-border.types'

export type ContainerProps = GlobalModifiers &
  GlobalHtmlTag &
  GlobalBg &
  Border &
  Padding &
  GlobalChildren
