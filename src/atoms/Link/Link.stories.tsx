import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link.component'

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Link>

export const Dark: Story = {
  args: {
    variant: 'dark',
    to: 'https://google.com',
    title: 'Dark Link',
    typography: {
      padding: {
        default: 6
      },
      size: 'body-lrg'
    }
  }
}

export const Light: Story = {
  args: {
    variant: 'light',
    to: 'https://google.com',
    title: 'Light Link',
    typography: {
      padding: {
        default: 6
      },
      size: 'body-lrg'
    }
  },
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  }
}

export const Grey: Story = {
  args: {
    variant: 'grey',
    to: 'https://google.com',
    title: 'Grey Link',
    typography: {
      padding: {
        default: 6
      },
      size: 'body-lrg'
    }
  }
}
