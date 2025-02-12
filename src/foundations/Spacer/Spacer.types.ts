import {
  GlobalChildren,
  GlobalDisplay,
  GlobalModifiers,
  GlobalSpacers
} from '@global'

export type SpacerOptions = {
  margin?: GlobalSpacers
  padding?: GlobalSpacers
}

export type SpacerProps = {
  margin?: GlobalSpacers
  padding?: GlobalSpacers
} & GlobalChildren &
  GlobalModifiers &
  GlobalDisplay &
  SpacerOptions
