import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button.component'

const meta: Meta<typeof Button> = {
    title: 'Atoms/Buttons',
    component: Button,
    parameters: {
        design: {
            type: 'figma',
            url: ''
        },
        layout: 'fullscreen'
    }
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
    args: {
        label: 'No Style'
    }
}

export const Children: Story = {
    args: {
        label: 'No Style With Children',
        children: <><br /><span>Child</span></>
    }
}

export const PrimarySml: Story = {
    args: {
        variant: 'primary',
        size: 'sml',
        type: 'button',
        label: 'Primary sml'
    }
}

export const PrimaryMed: Story = {
    args: {
        variant: 'primary',
        size: 'med',
        type: 'button',
        label: 'Primary med'
    }
}

export const PrimaryLrg: Story = {
    args: {
        variant: 'primary',
        size: 'lrg',
        type: 'button',
        label: 'Primary lrg'
    }
}

export const PrimaryXlrg: Story = {
    args: {
        variant: 'primary',
        size: 'xlrg',
        type: 'button',
        label: 'Primary xlrg'
    }
}

export const SecondarySml: Story = {
    args: {
        variant: 'secondary',
        size: 'sml',
        type: 'button',
        label: 'Secondary sml'
    }
}

export const SecondaryMed: Story = {
    args: {
        variant: 'secondary',
        size: 'med',
        type: 'button',
        label: 'Secondary med'
    }
}

export const SecondaryLrg: Story = {
    args: {
        variant: 'secondary',
        size: 'lrg',
        type: 'button',
        label: 'Secondary lrg'
    }
}

export const SecondaryXlrg: Story = {
    args: {
        variant: 'secondary',
        size: 'xlrg',
        type: 'button',
        label: 'Secondary xlrg'
    }
}
