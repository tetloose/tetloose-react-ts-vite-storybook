import { Breakpoints } from '@global'

type Columns = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type Width = {
  [key in Breakpoints]?: Columns
}

export type ColumnWidth = {
  width?: Width
}
