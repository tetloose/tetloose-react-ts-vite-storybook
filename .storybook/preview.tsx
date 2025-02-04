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
        actions: { argTypesRegex: '^on[A-Z].*' },
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
                    'Partials',
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
                    name: 'Grey',
                    value: '#f8f8f8'
                },
                {
                    name: 'Dark',
                    value: '#000'
                }
            ]
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    }
}

export default preview
