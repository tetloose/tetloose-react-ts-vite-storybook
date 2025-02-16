import { WheelEventHandler } from 'react'
import { GlobalChildren, GlobalModifiers, Tags } from '@global'
import { Border } from '@utils/get-border/get-border.types'

export type GridVariants =
  | 'overflow-hidden'
  | 'overflow-scroll'
  | 'position-relative'

export type Row = (number | 'auto')[]

export type Column = number[]

export type GridProps = {
  variants?: GridVariants[]
  tag?: Tags
  rows: Row
  columns: Column
  horizontalScroll?: boolean
  onWheelHandler?: WheelEventHandler<HTMLDivElement>
} & GlobalModifiers &
  Border &
  GlobalChildren

export type GridItemProps = GridProps

export type GridStyles = {
  gridRow: string
  gridColumn: string
}
