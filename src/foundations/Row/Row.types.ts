import {
  GlobalChildren,
  GlobalDirection,
  GlobalFlexAlign,
  GlobalFlexWrap,
  GlobalHeight,
  GlobalJustify,
  GlobalModifiers,
  GlobalWidth
} from '@global'

type Gutter = {
  left?: boolean
  right?: boolean
}

type SharedProps = {
  gutter?: Gutter
} & GlobalChildren &
  GlobalModifiers &
  GlobalHeight

export type RowProps = SharedProps &
  GlobalFlexAlign &
  GlobalJustify &
  GlobalFlexWrap &
  GlobalDirection

export type ColumnProps = {
  auto?: boolean
} & SharedProps &
  GlobalWidth
