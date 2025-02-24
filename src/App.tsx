import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAnimate } from '@hooks/Animate/use-animate.hooks'
import { navigation } from '@routes/navigation.routes'
import { Grid } from '@foundations/Grid/Grid.component'
import { Loading } from '@atoms/Loading/Loading.component'

const Header = lazy(() => import('@layouts/Header/Header.component'))
const Footer = lazy(() => import('@layouts/Footer/Footer.component'))

const App = () => {
  const animation = useAnimate()

  return (
    <Suspense fallback={<Loading center={true} />}>
      <Grid
        modifiers={['animate', animation]}
        height={{ default: 'viewport-fullscreen' }}
        rows={{ default: ['60px', 'auto', '40px'] }}
        columns={{ default: [1] }}
      >
        <Header />
        <Routes>
          {navigation.map(({ path, element }, navigationIndex) => (
            <Route key={navigationIndex} path={path} element={element} />
          ))}
        </Routes>
        <Footer />
      </Grid>
    </Suspense>
  )
}

export default App
