import type {
  BreakpointDisplay,
  BreakpointFlexAlign,
  BreakpointFlexWrap,
  BreakpointGap,
  BreakpointJustify
} from '@utils/get-breakpoints/get-breakpoints.types'
import type { Spacers } from '@foundations/Spacer/Spacer.types'
import type { GlobalChildren, GlobalModifiers } from '@global/global.types'

export type ActionProps = GlobalChildren &
  GlobalModifiers &
  BreakpointDisplay &
  BreakpointJustify &
  BreakpointFlexAlign &
  BreakpointGap &
  BreakpointFlexWrap &
  Spacers
