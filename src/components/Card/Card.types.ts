import { GlobalModifiers } from '@global'
import { ContentLink } from '@atoms/Button/Button.types'
import { ImageContent } from '@atoms/Image/Image.types'

export type CardProps = {
  image: ImageContent
  title: string
  body: string
  link?: ContentLink
  loading: boolean
} & GlobalModifiers

export type CardContent = Pick<CardProps, 'image' | 'title' | 'body' | 'link'>
