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
  const icons: IconNames[] = ['face']

  return (
    <Row>
      <Column>
        {icons.map((icon) => (
          <Typography key={icon} display={'block'} tag={'span'} text={icon}>
            <Icon name={icon} />
          </Typography>
        ))}
      </Column>
    </Row>
  )
}

export const Icons: Story = {
  render: renderIcons
}
