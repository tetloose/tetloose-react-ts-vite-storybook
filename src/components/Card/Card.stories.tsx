import { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card.component'
import Desktop from '@images/test/desktop.jpg'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Card>

export const Primary: Story = {
  args: {
    image: Desktop,
    title: 'Lorem ipsum dolor sit amet consectetur',
    body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, laudantium! Facilis iste sit, assumenda quod aliquam, ab harum molestiae sequi repellat delectus at placeat, ducimus laborum labore voluptatum blanditiis optio?',
    loading: false
  }
}
