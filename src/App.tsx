import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Grid } from '@foundations'
import { useAnimate } from '@hooks'
import { routes } from '@routes'
import { Footer, Header } from '@routes/routes.paths'
import { Loading } from '@atoms'

const App = () => {
  const animation = useAnimate()

  return (
    <Suspense fallback={<Loading position={'center'} />}>
      <Grid
        modifiers={['animate', animation]}
        rows={[0.2, 6, 0.2]}
        columns={[1]}
      >
        <Header />
        <Routes>
          {routes.map(({ path, element }, routeIndex) => (
            <Route key={routeIndex} path={path} element={element} />
          ))}
        </Routes>
        <Footer />
      </Grid>
    </Suspense>
  )
}

export default App
