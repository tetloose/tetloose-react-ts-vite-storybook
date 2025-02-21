import type { GlobalColor, GlobalModifiers } from '@global/global.types'

type Position = 'center'

export type LoadingProps = {
  position?: Position
} & GlobalColor &
  GlobalModifiers
