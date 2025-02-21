import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('@layouts/Home/Home.component'))
const NotFound = lazy(() => import('@layouts/Not-found/Not-found.component'))

export const navigation: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '*',
    element: <NotFound />
  }
]
