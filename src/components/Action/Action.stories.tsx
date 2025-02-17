import { Meta, StoryObj } from '@storybook/react'
import { Button } from '@atoms'
import { Action } from './Action.component'

const meta: Meta<typeof Action> = {
  title: 'Components/Action',
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
    <Action gap={6} padding={{ default: 10 }} justify={'center'}>
      <Button variant={'primary'} label={'Button 1'} />
      <Button variant={'primary'} label={'Button 2'} />
    </Action>
  )
}

export const Primary: Story = {
  render: renderPrimary
}
