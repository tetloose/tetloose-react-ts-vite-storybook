import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import { useNotification } from '@hooks'
import { Button } from './Button.component'
import { ButtonProps } from './Button.types'

const RenderButton = (args: ButtonProps) => {
  const notify = useNotification()

  const handleClick = () => {
    notify('Button Clicked', 'success')
  }

  return <Button {...args} onClick={handleClick} />
}

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  },
  argTypes: {
    onClick: { action: 'clicked' }
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    label: 'No Style',
    onClick: action('No Style Button Clicked')
  }
}

export const Children: Story = {
  args: {
    label: 'No Style With Children',
    onClick: action('No Style With Children Button Clicked'),
    children: (
      <>
        <br />
        <span>Child</span>
      </>
    )
  }
}

export const Primary: Story = {
  render: () =>
    RenderButton({
      variant: 'primary',
      type: 'button',
      label: 'Primary'
    })
}

export const PrimaryLink: Story = {
  render: () =>
    RenderButton({
      variant: 'primary',
      label: 'Primary Link',
      url: 'https://google.com',
      target: '_blank'
    })
}

export const PrimaryDisabled: Story = {
  render: () =>
    RenderButton({
      variant: 'primary',
      label: 'Primary Disabled',
      disabled: true
    })
}
