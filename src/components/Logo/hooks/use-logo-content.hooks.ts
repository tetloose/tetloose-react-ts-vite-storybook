import { useContent } from '@hooks/Content/use-content.hooks'

export const useLogoContent = () => {
  const {
    content,
    contentPending,
    contentFetching,
    contentSuccess,
    contentError
  } = useContent('logo')
  const { alt = '' } = content || {}

  return {
    content,
    contentPending,
    contentFetching,
    contentSuccess,
    contentError,
    alt
  }
}
