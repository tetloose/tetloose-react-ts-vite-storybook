import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import type { Preview } from '@storybook/react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { withRouter } from 'storybook-addon-remix-react-router'
import { Notification } from '../src/components/Notification/Notification.component'
import { AppProvider } from '../src/context/App/App.context'
import {
  clearQueryCache,
  queryClient,
  QueryClientProvider
} from '../src/hooks/Query/query-client.hooks'
import { HandleBoundary } from '../src/layouts/Not-found/utils/Handle-boundary.util'
import '../src/styles/app.scss'

const preview: Preview = {
  decorators: [
    (Story) => {
      clearQueryCache()

      return (
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary FallbackComponent={HandleBoundary}>
            <Notification />
            <AppProvider>
              <Story />
            </AppProvider>
          </ErrorBoundary>
          <ReactQueryDevtools position={'bottom'} initialIsOpen={false} />
        </QueryClientProvider>
      )
    },
    withRouter
  ],
  parameters: {
    options: {
      storySort: {
        order: [
          'Documentation',
          [
            'Introduction',
            'CRUD',
            'Best Practices',
            'Architecture',
            'Workflow',
            'Component Generation',
            'Git Commit',
            'Styles',
            'Variables',
            'Colors',
            'Typography',
            'Fluid Sizing',
            'Notification'
          ],
          'Foundations',
          'Atoms',
          'Components',
          'Layouts'
        ]
      }
    },
    backgrounds: {
      default: 'Light',
      values: [
        {
          name: 'Light',
          value: '#fff'
        },
        {
          name: 'Dark',
          value: '#000'
        }
      ]
    }
  }
}

export default preview
