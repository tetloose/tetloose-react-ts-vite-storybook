import { Meta, StoryObj } from '@storybook/react'
import { Column } from './Column.component'
import { Row } from './Row.component'

const Text = ({
  text,
  num,
  odd
}: {
  text?: string
  num?: number
  odd: boolean
}) => (
  <div
    style={{
      height: '100px',
      backgroundColor: odd ? '#7bff69' : '#ff69b4'
    }}
  >
    <span>
      {num && num} {text && text}
    </span>
  </div>
)

const meta: Meta<typeof Row> = {
  title: 'Foundations/Row',
  component: Row,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type ColumnStory = StoryObj<typeof Row>

export const Size: ColumnStory = {
  render: () => (
    <>
      <Row>
        <Column>
          <Text odd={true} text={'Full width'} />
        </Column>
      </Row>
      <Row>
        <Column auto={true}>
          <Text odd={false} text={'Auto Width'} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 1 }}>
          <Text odd={true} num={1} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 2 }}>
          <Text odd={false} num={2} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 3 }}>
          <Text odd={true} num={3} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 4 }}>
          <Text odd={false} num={4} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 5 }}>
          <Text odd={true} num={5} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 6 }}>
          <Text odd={false} num={6} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 7 }}>
          <Text odd={true} num={7} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 8 }}>
          <Text odd={false} num={8} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 9 }}>
          <Text odd={true} num={9} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 10 }}>
          <Text odd={false} num={10} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 11 }}>
          <Text odd={true} num={11} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 12 }}>
          <Text odd={false} num={12} />
        </Column>
      </Row>
    </>
  )
}

export const Breakpoints: ColumnStory = {
  render: () => (
    <>
      <Row>
        <Column
          width={{
            default: 6,
            sml: 4,
            med: 6,
            lrg: 8,
            xlrg: 10,
            xxlrg: 12
          }}
        >
          <Text
            odd={false}
            text={'default: 6, sml: 4, med: 6, lrg: 8, xlrg: 10, xxlrg: 12'}
          />
        </Column>
        <Column
          width={{
            default: 6,
            sml: 8,
            med: 6,
            lrg: 4,
            xlrg: 2,
            xxlrg: 12
          }}
        >
          <Text
            odd={true}
            text={'default: 6, sml: 8, med: 6, lrg: 4, xlrg: 2, xxlrg: 12'}
          />
        </Column>
      </Row>
    </>
  )
}

export const Gutter: ColumnStory = {
  render: () => (
    <>
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
          width={{ default: 6 }}
        >
          <Text odd={false} text={'Left Column'} />
        </Column>
        <Column
          gutter={{
            left: true,
            right: true
          }}
          width={{ default: 6 }}
        >
          <Text odd={true} text={'Right Column'} />
        </Column>
      </Row>
    </>
  )
}

export const AllOptions: ColumnStory = {
  render: () => (
    <>
      <Row
        direction={'row-reverse'}
        justify={'center'}
        align={'center'}
        wrap={'nowrap'}
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
          width={{ default: 8 }}
        >
          <Text odd={false} text={'Center Column'} />
        </Column>
      </Row>
    </>
  )
}
