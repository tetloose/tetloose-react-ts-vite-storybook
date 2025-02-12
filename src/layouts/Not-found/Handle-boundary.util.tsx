import { NotFound } from './Not-found.layout'

export const HandleBoundary = ({ error }: { error: Error }) => (
  <NotFound error={error} />
)
