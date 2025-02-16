import { GlobalBreakpoints } from '@global'

export type Spacers = {
  margin?: GlobalBreakpoints
  padding?: GlobalBreakpoints
}
export type GetSpacing = {
  padding?: Spacers['padding']
  margin?: Spacers['margin']
}
