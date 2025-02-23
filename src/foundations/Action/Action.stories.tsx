import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@atoms/Button/Button.component'
import { Action } from './Action.component'

const meta: Meta<typeof Action> = {
  title: 'Foundations/Action',
  component: Action,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: ''
    }
  }
}

export default meta

type Story = StoryObj<typeof Action>

const renderPrimary = () => {
  return (
    <Action
      gap={{ default: 6 }}
      padding={{ default: 10 }}
      justify={{ default: 'center' }}
    >
      <Button variant={'dark'} label={'Button 1'} />
      <Button variant={'dark'} label={'Button 2'} />
    </Action>
  )
}

export const Primary: Story = {
  render: renderPrimary
}
