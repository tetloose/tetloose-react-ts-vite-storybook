import React from 'react'
import { Preview } from '@storybook/react'
import { withRouter } from 'storybook-addon-remix-react-router'
import { StateProvider } from '../src/context'
import '../src/styles/app.scss'

const preview: Preview = {
  decorators: [
    (Story) => {

      return (
        <StateProvider>
          <Story />
        </StateProvider>
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
            'Typography',
            'Fluid Sizing'
          ],
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
