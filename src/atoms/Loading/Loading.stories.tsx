import type { Meta, StoryObj } from '@storybook/react'
import { Loading } from './Loading.component'

const meta: Meta<typeof Loading> = {
  title: 'Atoms/Loading',
  component: Loading,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
}

export default meta

type Story = StoryObj<typeof Loading>

export const Dark: Story = {
  args: {
    color: 'dark'
  }
}

export const DarkCenter: Story = {
  args: {
    color: 'dark',
    position: 'center'
  }
}

export const Light: Story = {
  args: {
    color: 'light'
  },
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  }
}

export const LightCenter: Story = {
  args: {
    color: 'light',
    position: 'center'
  },
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  }
}
