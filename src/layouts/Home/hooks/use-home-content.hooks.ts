import { useContent } from '@hooks'

export const useHomeContent = () => {
  const {
    content,
    contentPending,
    contentFetching,
    contentSuccess,
    contentError
  } = useContent('homepage')

  return {
    content,
    contentPending,
    contentFetching,
    contentSuccess,
    contentError
  }
}
