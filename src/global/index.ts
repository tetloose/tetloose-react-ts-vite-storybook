import { ReactNode } from 'react'

export type GlobalModifiers = {
  modifiers?: string[]
}

export type GlobalChildren = {
  children?: ReactNode | ReactNode[]
}

export type Tags = 'main' | 'div' | 'section' | 'footer' | 'header' | 'aside'

export type Color = 'dark' | 'light'

export type GlobalColor = {
  color?: Color
}

export type GlobalBg = {
  bg?: Color
}

export type Display =
  | 'block'
  | 'inline'
  | 'inline-block'
  | 'flex'
  | 'inline-flex'

export type GlobalDisplay = {
  display?: Display
}

export type BreakPoints = 'default' | 'sml' | 'med' | 'lrg' | 'xlrg' | 'xxlrg'

export type Size = 'sml' | 'med' | 'lrg' | 'xlrg' | 'xxlrg'

export type GlobalSize = {
  size?: Size
}

export type WhiteSpace =
  | 'nowrap'
  | 'pre'
  | 'pre-wrap'
  | 'pre-line'
  | 'break-spaces'

export type GlobalWhiteSpace = {
  whiteSpace?: WhiteSpace
}

export type FontWeight = 'light' | 'regular' | 'medium' | 'bold'

export type GlobalFontWeight = {
  fontWeight?: FontWeight
}

export type Align = 'left' | 'right' | 'center'

export type GlobalAlign = {
  textAlign?: Align
}

export type FlexAlign =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline'

export type GlobalFlexAlign = {
  align?: FlexAlign
}

export type TextTransform = 'capitalize' | 'uppercase' | 'lowercase'

export type GlobalTextTransform = {
  textTransform?: TextTransform
}

export type FontStyle = 'italic' | 'oblique'

export type GlobalFontStyle = {
  fontStyle?: FontStyle
}

export type Spacers = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export type GlobalSpacers = {
  margin?: Spacers
  padding?: Spacers
}

type Padding = {
  default?: Spacers
  sml?: Spacers
  med?: Spacers
  lrg?: Spacers
  xlrg?: Spacers
  xxlrg?: Spacers
}

export type GlobalPadding = {
  padding?: {
    top?: Padding
    right?: Padding
    bottom?: Padding
    left?: Padding
  }
}

export type GlobalBorder = {
  border?: {
    top?: boolean
    right?: boolean
    bottom?: boolean
    left?: boolean
  }
}

type Columns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type GlobalWidth = {
  width?: {
    default?: Columns
    sml?: Columns
    med?: Columns
    lrg?: Columns
    xlrg?: Columns
    xxlrg?: Columns
  }
}

export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export type GlobalDirection = {
  direction?: Direction
}

export type Justify =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type GlobalJustify = {
  justify?: Justify
}

export type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse'

export type GlobalFlexWrap = {
  wrap?: Wrap
}

export type GlobalGap = {
  gap?: Spacers
}

export type GlobalRatios = '1x1' | '3x2' | '16x9' | '21x9' | 'fullscreen'

export type Height = 'fullscreen' | 'half'

export type GlobalHeight = {
  height?: Height
}

export type GlobalVerticalAlign = 'top' | 'middle' | 'bottom' | 'baseline'
