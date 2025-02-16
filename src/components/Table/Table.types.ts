import {
  GlobalAlign,
  GlobalBg,
  GlobalChildren,
  GlobalModifiers,
  GlobalVerticalAlign
} from '@global'
import { Border } from '@utils/get-border/get-border.types'

type Layout = 'auto' | 'fixed'

type BorderCollapse = 'collapse' | 'separate'

type Hide = {
  hide?: boolean
}

export type WrapperProps = GlobalModifiers & GlobalChildren & GlobalBg & Hide

export type TableProps = {
  layout?: Layout
  borderCollapse?: BorderCollapse
  verticalAlign?: GlobalVerticalAlign
} & WrapperProps &
  Border

export type TrProps = WrapperProps & Border

export type TdProps = WrapperProps & Border & GlobalAlign
