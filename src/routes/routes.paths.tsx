import { lazy } from 'react'

export const Home = lazy(() => import('@layouts/Home/Home.component'))

export const NotFound = lazy(
  () => import('@layouts/Not-found/Not-found.component')
)
