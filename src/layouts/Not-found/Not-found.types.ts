import type { ContentButton, ContentLink } from '@atoms/Button/Button.types'

export type NotFoundProps = {
  error?: {
    message?: string
    name?: string
    stack?: string
  }
}

export type NotFoundContent = {
  title: string
  subtitle: string
  link: ContentLink
  button: ContentButton
}
