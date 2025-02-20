import type { ContentLink } from '@atoms/Button/Button.types'
import type { ImageContent } from '@atoms/Image/Image.types'
import type { GlobalModifiers } from '@global'

export type CardProps = {
  image: ImageContent
  title: string
  body: string
  link?: ContentLink
  loading: boolean
} & GlobalModifiers

export type CardContent = Pick<CardProps, 'image' | 'title' | 'body' | 'link'>
