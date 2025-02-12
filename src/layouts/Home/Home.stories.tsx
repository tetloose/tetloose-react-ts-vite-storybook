import { Meta, StoryObj } from '@storybook/react'
import Home from './Home.component'

const meta: Meta<typeof Home> = {
  title: 'Layouts/Home',
  component: Home,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Home>

export const Primary: Story = {}
