import { GlobalAlign, GlobalBg, GlobalChildren, GlobalModifiers } from '@global'
import { TypographyProps } from '@foundations/Typography/Typography.types'
import { Border } from '@utils/get-border/get-border.types'

type TableTags = 'thead' | 'tbody' | 'tfoot' | 'tr' | 'th' | 'td'

type VerticalAlign = 'top' | 'middle' | 'bottom' | 'baseline'

type Layout = 'auto' | 'fixed'

type BorderCollapse = 'collapse' | 'separate'

type Hide = {
  hide?: boolean
}

type SharedProps = GlobalModifiers & GlobalChildren & GlobalBg & Hide & Border

export type TableProps = {
  layout?: Layout
  borderCollapse?: BorderCollapse
  verticalAlign?: VerticalAlign
} & SharedProps

export type TiProps = {
  tag?: TableTags
  sectionTitle?: string
} & SharedProps &
  GlobalAlign

export type TableTitleProps = Omit<
  TypographyProps,
  'tag' | 'display' | 'richText'
>
