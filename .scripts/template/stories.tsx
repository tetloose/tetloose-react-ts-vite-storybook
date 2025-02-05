import { Meta, StoryObj } from '@storybook/react'
import { EXPORT_NAME } from './COMPONENT_NAME.component'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof EXPORT_NAME> = {
  title: 'TITLE_NAME',
  component: EXPORT_NAME,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  },
  argTypes: {
    onClick: { action: 'clicked' }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof EXPORT_NAME>

export const Primary: Story = {
  args: {
    onClick: action('button-click')
  }
}
