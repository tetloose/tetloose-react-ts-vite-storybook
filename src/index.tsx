import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppProvider } from '@context/App/App.context'
import {
  queryClient,
  QueryClientProvider
} from '@hooks/Query/query-client.hooks'
import { Notification } from '@components/Notification/Notification.component'
import { HandleBoundary } from '@layouts/Not-found/utils/Handle-boundary.util'
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
