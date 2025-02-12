import { ReactNode } from 'react'

export type GlobalModifiers = {
  modifiers?: string[]
}

export type GlobalChildren = {
  children?: ReactNode | ReactNode[]
}

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

export type TextAlign = 'left' | 'right' | 'center'

export type GlobalTextAlign = {
  textAlign?: TextAlign
}

export type TextTransform = 'capitalize' | 'uppercase' | 'lowercase'

export type GlobalTextTransform = {
  textTransform?: TextTransform
}

export type FontStyle = 'italic' | 'oblique'

export type GlobalFontStyle = {
  fontStyle?: FontStyle
}

export type GlobalSpacers = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

type Padding = {
  default?: GlobalSpacers
  sml?: GlobalSpacers
  med?: GlobalSpacers
  lrg?: GlobalSpacers
  xlrg?: GlobalSpacers
  xxlrg?: GlobalSpacers
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

export type GlobalRatios = '1x1' | '3x2' | '16x9' | '21x9' | 'fullscreen'

export type Height = 'fullscreen' | 'half'

export type GlobalHeight = {
  height?: Height
}
