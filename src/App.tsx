import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Typography } from '@foundations'
import { routes } from '@routes'

const App = () => {
  return (
    <Suspense
      fallback={<Typography tag={'h1'} size={'body-med'} text={'Loading...'} />}
    >
      <Routes>
        {routes.map(({ path, element }, routeIndex) => (
          <Route key={routeIndex} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
}

export default App
