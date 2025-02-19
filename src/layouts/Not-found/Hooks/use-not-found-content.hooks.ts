import { useContent } from '@hooks'

export const useNotFoundContent = () => {
  const {
    content,
    contentPending,
    contentFetching,
    contentSuccess,
    contentError
  } = useContent('notFound')
  const { title = '', subtitle = '', link, button } = content || {}
  const {
    variant: linkVariant,
    label: linkLabel = '',
    target: linkTarget,
    rel: linkRel,
    url: linkUrl = ''
  } = link || {}
  const { variant: buttonVariant, label: buttonLabel = '' } = button || {}

  return {
    content,
    contentPending,
    contentFetching,
    contentSuccess,
    contentError,
    title,
    subtitle,
    linkVariant,
    linkLabel,
    linkTarget,
    linkRel,
    linkUrl,
    buttonVariant,
    buttonLabel
  }
}
