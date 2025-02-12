import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppProvider } from '@context'
import { queryClient, QueryClientProvider } from '@hooks'
import { Notification } from '@components'
import { HandleBoundary } from '@layouts'
import App from './App'
import '@styles/app.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <QueryClientProvider client={queryClient}>
    <ErrorBoundary FallbackComponent={HandleBoundary}>
      <Notification />
      <BrowserRouter>
        <React.StrictMode>
          <AppProvider>
            <App />
          </AppProvider>
        </React.StrictMode>
      </BrowserRouter>
    </ErrorBoundary>
    <ReactQueryDevtools position={'bottom'} initialIsOpen={false} />
  </QueryClientProvider>
)
