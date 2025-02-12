import {
  GlobalAlign,
  GlobalChildren,
  GlobalColor,
  GlobalDisplay,
  GlobalFontStyle,
  GlobalFontWeight,
  GlobalModifiers,
  GlobalSpacers,
  GlobalTextTransform,
  GlobalWhiteSpace
} from '@global'

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
  | 'd1'
  | 'd2'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
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
  GlobalSpacers &
  GlobalTextTransform &
  GlobalFontWeight &
  GlobalFontStyle

export type TypographyProps = {
  tag?: TypographyTags
  size?: Size
  text?: string
} & GlobalChildren &
  SharedProps

export type RichTextProps = SharedProps
