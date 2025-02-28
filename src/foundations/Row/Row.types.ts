import type {
  BreakpointDirection,
  BreakpointDisplay,
  BreakpointFlexAlign,
  BreakpointFlexWrap,
  BreakpointHeight,
  BreakpointJustify,
  BreakpointWidth
} from '@utils/get-breakpoints/get-breakpoints.types'
import type { Padding } from '@utils/get-padding/get-padding.types'
import type {
  GlobalChildren,
  GlobalHtmlTag,
  GlobalModifiers
} from '@global/global.types'

type SharedProps = GlobalChildren &
  GlobalModifiers &
  Padding &
  BreakpointHeight &
  GlobalHtmlTag

export type RowProps = SharedProps &
  BreakpointDisplay &
  BreakpointFlexAlign &
  BreakpointJustify &
  BreakpointFlexWrap &
  BreakpointDirection

export type ColumnProps = SharedProps & BreakpointWidth
