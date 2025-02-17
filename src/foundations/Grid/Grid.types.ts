import { WheelEventHandler } from 'react'
import { GlobalBg, GlobalChildren, GlobalModifiers, Tags } from '@global'
import { ColumnProps, RowProps } from './utils/get-styles.types'

export type GridProps = {
  tag?: Tags
  rows: RowProps
  columns: ColumnProps
  horizontalScroll?: boolean
  onWheelHandler?: WheelEventHandler<HTMLDivElement>
} & GlobalModifiers &
  GlobalBg &
  GlobalChildren
