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
      direction={{ default: 'column', med: 'row' }}
      padding={{ default: 6 }}
      align={{ med: 'center' }}
      justify={{ med: 'center' }}
    >
      <Button
        variant={'dark'}
        justify={{ default: 'center' }}
        align={{ default: 'center' }}
        width={{ default: 'full', med: 'auto' }}
        label={'Button 1'}
      />
      <Button
        variant={'dark'}
        justify={{ default: 'center' }}
        align={{ default: 'center' }}
        width={{ default: 'full', med: 'auto' }}
        label={'Button 2'}
      />
    </Action>
  )
}

export const Primary: Story = {
  render: renderPrimary
}
