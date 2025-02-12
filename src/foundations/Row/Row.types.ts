import {
  GlobalChildren,
  GlobalHeight,
  GlobalModifiers,
  GlobalWidth
} from '@global'

type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse'

type Justify =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

type Align = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'

type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse'

type Gutter = {
  left?: boolean
  right?: boolean
}

type SharedProps = {
  gutter?: Gutter
} & GlobalChildren &
  GlobalModifiers &
  GlobalHeight

export type RowProps = {
  direction?: Direction
  justify?: Justify
  align?: Align
  wrap?: Wrap
} & SharedProps

export type ColumnProps = {
  auto?: boolean
} & SharedProps &
  GlobalWidth
