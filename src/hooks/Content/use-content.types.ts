import { QueryObserverResult } from '@tanstack/react-query'
import { Card } from '@components/Card/Card.types'

export type Content = {
  homepage: Card[]
  notFound: {
    title: string
    subtitle: string
    linkLabel: string
    linkUrl: string
  }
}

export type ContentProps<T, K extends keyof T> = K extends keyof T
  ? T[K]
  : never

export type ContentReturn<K extends keyof Content> = {
  content: ContentProps<Content, K> | null
  contentPending: boolean
  contentFetching: boolean
  contentSuccess: boolean
  contentError: Error | null
  contentRefetch: () => Promise<QueryObserverResult<void, Error>>
}
