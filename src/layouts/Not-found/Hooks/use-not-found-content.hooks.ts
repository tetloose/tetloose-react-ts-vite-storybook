import { useContent } from '@hooks'

export const useNotFoundContent = () => {
  const {
    content,
    contentPending,
    contentFetching,
    contentSuccess,
    contentError
  } = useContent('notFound')
  const {
    title = '',
    subtitle = '',
    linkLabel = '',
    linkUrl = ''
  } = content || {}

  return {
    content,
    contentPending,
    contentFetching,
    contentSuccess,
    contentError,
    title,
    subtitle,
    linkLabel,
    linkUrl
  }
}
