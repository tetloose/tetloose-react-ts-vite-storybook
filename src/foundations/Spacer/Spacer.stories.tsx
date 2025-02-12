import { ReactNode } from 'react'
import { Column, Row } from '@foundations'
import { Meta, StoryObj } from '@storybook/react'
import { Spacer } from './Spacer.component'

const Text = ({ odd, children }: { odd?: boolean; children: ReactNode }) => (
  <div
    style={{
      minHeight: '40px',
      backgroundColor: odd ? '#7bff69' : '#ff69b4'
    }}
  >
    <span>{children && children}</span>
  </div>
)

const meta: Meta<typeof Spacer> = {
  title: 'Foundations/Spacer',
  component: Spacer,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    docs: {
      disable: true
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Spacer>

export const Padding: Story = {
  render: () => (
    <Row
      align={'center'}
      justify={'center'}
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
        width={{
          med: 8
        }}
      >
        <Spacer display={'block'} padding={1}>
          <Text odd={true}>Padding 1</Text>
        </Spacer>
        <Spacer display={'block'} padding={2}>
          <Text>Padding 2</Text>
        </Spacer>
        <Spacer display={'block'} padding={3}>
          <Text odd={true}>Padding 3</Text>
        </Spacer>
        <Spacer display={'block'} padding={4}>
          <Text>Padding 4</Text>
        </Spacer>
        <Spacer display={'block'} padding={5}>
          <Text odd={true}>Padding 5</Text>
        </Spacer>
        <Spacer display={'block'} padding={6}>
          <Text>Padding 6</Text>
        </Spacer>
        <Spacer display={'block'} padding={7}>
          <Text odd={true}>Padding 7</Text>
        </Spacer>
        <Spacer display={'block'} padding={8}>
          <Text>Padding 8</Text>
        </Spacer>
        <Spacer display={'block'} padding={9}>
          <Text odd={true}>Padding 9</Text>
        </Spacer>
        <Spacer display={'block'} padding={10}>
          <Text>Padding 10</Text>
        </Spacer>
      </Column>
    </Row>
  )
}

export const Margin: Story = {
  render: () => (
    <Row
      align={'center'}
      justify={'center'}
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
        width={{
          med: 8
        }}
      >
        <Spacer display={'block'} margin={1}>
          <Text odd={true}>Margin 1</Text>
        </Spacer>
        <Spacer display={'block'} margin={2}>
          <Text>Margin 2</Text>
        </Spacer>
        <Spacer display={'block'} margin={3}>
          <Text odd={true}>Margin 3</Text>
        </Spacer>
        <Spacer display={'block'} margin={4}>
          <Text>Margin 4</Text>
        </Spacer>
        <Spacer display={'block'} margin={5}>
          <Text odd={true}>Margin 5</Text>
        </Spacer>
        <Spacer display={'block'} margin={6}>
          <Text>Margin 6</Text>
        </Spacer>
        <Spacer display={'block'} margin={7}>
          <Text odd={true}>Margin 7</Text>
        </Spacer>
        <Spacer display={'block'} margin={8}>
          <Text>Margin 8</Text>
        </Spacer>
        <Spacer display={'block'} margin={9}>
          <Text odd={true}>Margin 9</Text>
        </Spacer>
        <Spacer display={'block'} margin={10}>
          <Text>Margin 10</Text>
        </Spacer>
      </Column>
    </Row>
  )
}

export const MixedMarginPadding: Story = {
  render: () => (
    <Row
      align={'center'}
      justify={'center'}
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
        width={{
          med: 8
        }}
      >
        <Spacer display={'block'} padding={6}>
          <Text odd={true}>
            <p>Padding 6</p>
          </Text>
        </Spacer>
      </Column>
      <Column
        gutter={{
          left: true,
          right: true
        }}
        width={{
          med: 8
        }}
      >
        <Spacer display={'block'} padding={10}>
          <Text odd={false}>
            <p>Padding 10</p>
          </Text>
        </Spacer>
      </Column>
    </Row>
  )
}
