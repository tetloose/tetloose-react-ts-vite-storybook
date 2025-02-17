import { Column, Row, Typography } from '@foundations'
import { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon.component'
import { IconNames } from './Icon.types'

const meta: Meta<typeof Icon> = {
  title: 'Foundations/Icon',
  component: Icon,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
}

export default meta
type Story = StoryObj<typeof Icon>

const renderIcons = () => {
  const icons: IconNames[] = ['happy', 'angry']

  return (
    <Row
      gutter={{
        left: true,
        right: true
      }}
    >
      <Column
        gutter={{
          left: true,
          right: true
        }}
      >
        {icons.map((icon) => (
          <Typography
            key={icon}
            display={'block'}
            textTransform={'capitalize'}
            fontWeight={'bold'}
            size={'body-med'}
            tag={'span'}
            padding={{ default: 6 }}
            text={icon}
          >
            <br />
            <Icon name={icon} size={'sml'} />
            <Icon name={icon} size={'med'} />
            <Icon name={icon} size={'lrg'} />
            <Icon name={icon} size={'xlrg'} />
            <Icon name={icon} size={'xxlrg'} />
          </Typography>
        ))}
      </Column>
    </Row>
  )
}

export const Icons: Story = {
  render: renderIcons
}
