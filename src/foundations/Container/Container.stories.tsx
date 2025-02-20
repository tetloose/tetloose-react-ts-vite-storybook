import { Meta, StoryObj } from '@storybook/react'
import { Typography } from '@foundations'
import { Container } from './Container.component'
import { Color } from '@global'

const meta: Meta<typeof Container> = {
  title: 'Foundations/Container',
  component: Container,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    docs: {
      disable: true
    },
    fullscreen: true
  }
}

export default meta

type Story = StoryObj<typeof Container>

type WrapperProps = {
  color: Color
}

const Wrapper = ({ color }: WrapperProps) => (
  <>
    <Typography
      tag={'h1'}
      size={'h1'}
      text={'Lorem ipsum dolor'}
      color={color}
    />
    <Typography
      tag={'h2'}
      size={'body-xlrg'}
      padding={{ default: 6 }}
      text={'Molestias nisi adipisci commodi perferendis, amet recusandae.'}
      color={color}
    />
    <Typography
      tag={'p'}
      size={'body-med'}
      padding={{ default: 8 }}
      text={
        'Molestias nisi adipisci commodi perferendis, amet recusandae, mollitia atque illo tempore modi doloremque, doloribus libero quae eos veritatis quis distinctio dolorum assumenda.'
      }
      color={color}
    />
  </>
)

export const Light: Story = {
  args: {
    border: {
      top: true,
      right: true,
      bottom: true,
      left: true
    },
    padding: {
      top: {
        default: 6,
        sml: 2,
        med: 4,
        lrg: 6,
        xlrg: 8,
        xxlrg: 10
      },
      right: {
        default: 6,
        sml: 2,
        med: 4,
        lrg: 6,
        xlrg: 8,
        xxlrg: 10
      },
      bottom: {
        default: 6,
        sml: 2,
        med: 4,
        lrg: 6,
        xlrg: 8,
        xxlrg: 10
      },
      left: {
        default: 6,
        sml: 2,
        med: 4,
        lrg: 6,
        xlrg: 8,
        xxlrg: 10
      }
    },
    bg: 'light',
    children: <Wrapper color={'dark'} />
  }
}

export const Dark: Story = {
  args: {
    modifiers: ['class-name'],
    border: {
      top: true,
      right: true,
      bottom: true,
      left: true
    },
    padding: {
      top: {
        default: 6,
        sml: 2,
        med: 4,
        lrg: 6,
        xlrg: 8,
        xxlrg: 10
      },
      right: {
        default: 6,
        sml: 2,
        med: 4,
        lrg: 6,
        xlrg: 8,
        xxlrg: 10
      },
      bottom: {
        default: 6,
        sml: 2,
        med: 4,
        lrg: 6,
        xlrg: 8,
        xxlrg: 10
      },
      left: {
        default: 6,
        sml: 2,
        med: 4,
        lrg: 6,
        xlrg: 8,
        xxlrg: 10
      }
    },
    bg: 'dark',
    children: <Wrapper color={'light'} />
  }
}
