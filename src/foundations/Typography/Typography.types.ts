import type { Spacers } from '@foundations/Spacer/utils/get-spacing.types'
import type {
  GlobalAlign,
  GlobalChildren,
  GlobalColor,
  GlobalDisplay,
  GlobalFontStyle,
  GlobalFontWeight,
  GlobalLinkColor,
  GlobalModifiers,
  GlobalTextTransform,
  GlobalWhiteSpace
} from '@global/global.types'

export type TypographyTags =
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'em'
  | 'label'
  | 'time'
  | 'ul'
  | 'ol'
  | 'li'

type Size =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body-xxlrg'
  | 'body-xlrg'
  | 'body-lrg'
  | 'body-med'
  | 'body-sml'

type SharedProps = {
  richText?: string
} & GlobalModifiers &
  GlobalColor &
  GlobalWhiteSpace &
  GlobalAlign &
  GlobalDisplay &
  Spacers &
  GlobalTextTransform &
  GlobalFontWeight &
  GlobalFontStyle &
  GlobalLinkColor

export type TypographyProps = {
  tag?: TypographyTags
  size?: Size
  text?: string
} & GlobalChildren &
  SharedProps

export type RichTextProps = SharedProps
