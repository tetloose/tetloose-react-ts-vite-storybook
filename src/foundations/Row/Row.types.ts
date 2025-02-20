import type { Padding } from '@utils/get-padding/get-padding.types'
import type { ColumnWidth } from './utils/column-width.types'
import type {
  GlobalChildren,
  GlobalDirection,
  GlobalFlexAlign,
  GlobalFlexWrap,
  GlobalHeight,
  GlobalHtmlTag,
  GlobalJustify,
  GlobalModifiers
} from '@global'

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
