import { lazy } from 'react'

export const Header = lazy(() => import('@layouts/Header/Header.component'))
export const Home = lazy(() => import('@layouts/Home/Home.component'))
export const Footer = lazy(() => import('@layouts/Footer/Footer.component'))
export const NotFound = lazy(
  () => import('@layouts/Not-found/Not-found.component')
)
