import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import { useNotification } from '@hooks/Notification/use-notification.hooks'
import { Action } from '@foundations/Action/Action.component'
import { Button } from './Button.component'
import type { ButtonProps } from './Button.types'

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

export const Buttons: Story = {
  render: () => (
    <Action
      gap={{ default: 4 }}
      align={{
        default: 'center'
      }}
    >
      <RenderButton variant={'dark'} label={'Dark'} />
      <RenderButton variant={'dark'} label={'Dark Disabled'} disabled={true} />
      <RenderButton
        variant={'dark'}
        url={'https://google.com'}
        label={'Dark Link'}
      />
      <RenderButton variant={'light'} label={'Light'} />
      <RenderButton
        variant={'light'}
        url={'https://google.com'}
        label={'Light Link'}
      />
      <RenderButton
        variant={'light'}
        label={'Light Disabled'}
        disabled={true}
      />
    </Action>
  )
}

export const LinkDark: Story = {
  args: {
    variant: 'link-dark',
    label: 'Link Dark',
    url: 'http://www.googe.com'
  }
}

export const LinkLight: Story = {
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  },
  args: {
    variant: 'link-light',
    label: 'Link Dark',
    url: 'http://www.googe.com'
  }
}
