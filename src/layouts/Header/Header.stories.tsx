import { Meta, StoryObj } from '@storybook/react'
import Header from './Header.component'

const meta: Meta<typeof Header> = {
  title: 'Layouts/Header',
  component: Header,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Header>

export const Primary: Story = {
  args: {}
}
