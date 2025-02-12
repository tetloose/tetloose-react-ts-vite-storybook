import { Meta, StoryObj } from '@storybook/react'
import NotFound from './Not-found.component'

const meta: Meta<typeof NotFound> = {
  title: 'Layouts/Not Found',
  component: NotFound,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof NotFound>

export const Primary: Story = {}
