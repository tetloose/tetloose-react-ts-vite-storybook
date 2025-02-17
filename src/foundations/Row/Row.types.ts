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

type Gutter = {
  left?: boolean
  right?: boolean
}

type SharedProps = {
  gutter?: Gutter
} & GlobalChildren &
  GlobalModifiers &
  GlobalHeight &
  GlobalHtmlTag

export type RowProps = SharedProps &
  GlobalFlexAlign &
  GlobalJustify &
  GlobalFlexWrap &
  GlobalDirection

export type ColumnProps = SharedProps & ColumnWidth
