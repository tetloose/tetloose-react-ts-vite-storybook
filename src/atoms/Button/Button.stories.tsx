import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button.component'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Buttons',
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

export const PrimarySml: Story = {
  args: {
    variant: 'primary',
    size: 'sml',
    type: 'button',
    label: 'Primary sml',
    onClick: action('Primary Button Clicked')
  }
}

export const PrimaryMed: Story = {
  args: {
    variant: 'primary',
    size: 'med',
    type: 'button',
    label: 'Primary med',
    onClick: action('Primary Button Clicked')
  }
}

export const PrimaryLrg: Story = {
  args: {
    variant: 'primary',
    size: 'lrg',
    type: 'button',
    label: 'Primary lrg',
    onClick: action('Primary Button Clicked')
  }
}

export const PrimaryXlrg: Story = {
  args: {
    variant: 'primary',
    size: 'xlrg',
    type: 'button',
    label: 'Primary xlrg',
    onClick: action('Primary Button Clicked')
  }
}

export const SecondarySml: Story = {
  args: {
    variant: 'secondary',
    size: 'sml',
    type: 'button',
    label: 'Secondary sml',
    onClick: action('Secondary Button Clicked')
  }
}

export const SecondaryMed: Story = {
  args: {
    variant: 'secondary',
    size: 'med',
    type: 'button',
    label: 'Secondary med',
    onClick: action('Secondary Button Clicked')
  }
}

export const SecondaryLrg: Story = {
  args: {
    variant: 'secondary',
    size: 'lrg',
    type: 'button',
    label: 'Secondary lrg',
    onClick: action('Secondary Button Clicked')
  }
}

export const SecondaryXlrg: Story = {
  args: {
    variant: 'secondary',
    size: 'xlrg',
    type: 'button',
    label: 'Secondary xlrg',
    onClick: action('Secondary Button Clicked')
  }
}
