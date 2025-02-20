import type { RouteObject } from 'react-router-dom'
import { Home, NotFound } from './routes.paths'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '*',
    element: <NotFound />
  }
]
