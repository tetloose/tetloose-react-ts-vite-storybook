import { GlobalColor, GlobalModifiers } from '@global'

type Position = 'center'

export type LoadingProps = {
  position?: Position
} & GlobalColor &
  GlobalModifiers
