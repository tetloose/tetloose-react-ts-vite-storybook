import { GlobalModifiers } from '@global'

export type Card = {
  image: string
  title: string
  body: string
}

export type CardProps = {
  image: string
  title: string
  body: string
  loading: boolean
} & GlobalModifiers &
  Card
