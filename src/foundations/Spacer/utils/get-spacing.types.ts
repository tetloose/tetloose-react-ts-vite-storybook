import type { GlobalSpacers } from '@global'

export type Spacers = {
  margin?: GlobalSpacers
  padding?: GlobalSpacers
}
export type GetSpacing = {
  padding?: Spacers['padding']
  margin?: Spacers['margin']
}
