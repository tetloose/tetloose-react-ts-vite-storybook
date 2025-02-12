import {
  GlobalAlign,
  GlobalBg,
  GlobalBorder,
  GlobalChildren,
  GlobalModifiers,
  GlobalVerticalAlign
} from '@global'

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
  GlobalBorder

export type TrProps = WrapperProps & GlobalBorder

export type TdProps = WrapperProps & GlobalBorder & GlobalAlign
