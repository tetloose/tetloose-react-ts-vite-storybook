import {
  GlobalChildren,
  GlobalDirection,
  GlobalFlexAlign,
  GlobalFlexWrap,
  GlobalHeight,
  GlobalHtmlTag,
  GlobalJustify,
  GlobalModifiers
} from '@global'
import { ColumnWidth } from './utils/column-width.types'
import { Padding } from '@utils/get-padding/get-padding.types'

type SharedProps = GlobalChildren &
  GlobalModifiers &
  Padding &
  GlobalHeight &
  GlobalHtmlTag

export type RowProps = SharedProps &
  GlobalFlexAlign &
  GlobalJustify &
  GlobalFlexWrap &
  GlobalDirection

export type ColumnProps = SharedProps & ColumnWidth
