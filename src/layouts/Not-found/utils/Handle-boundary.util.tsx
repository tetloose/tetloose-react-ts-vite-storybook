import { NotFound } from '../Not-found.component'

export const HandleBoundary = ({ error }: { error: Error }) => (
  <NotFound error={error} />
)
