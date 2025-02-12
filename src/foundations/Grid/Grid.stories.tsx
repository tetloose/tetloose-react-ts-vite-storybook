import { Meta, StoryObj } from '@storybook/react'
import { Grid } from './Grid.component'
import { GridItem } from './Grid-item.component'

const meta: Meta<typeof Grid> = {
  title: 'Foundations/Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Grid>

const renderPrimary = () => {
  return (
    <Grid rows={[0.2, 3, 0.1]} columns={[0.5, 1.5]}>
      <GridItem
        rows={[1]}
        columns={[1, 3]}
        border={{
          bottom: true,
          left: true
        }}
      >
        Header
      </GridItem>
      <GridItem
        rows={[2]}
        columns={[1, 2]}
        border={{
          left: true,
          right: true
        }}
      >
        Sidebar
      </GridItem>
      <GridItem rows={[2]} columns={[2, 3]}>
        Content
      </GridItem>
      <GridItem
        rows={[3]}
        columns={[1, 3]}
        border={{
          top: true,
          left: true
        }}
      >
        Footer
      </GridItem>
    </Grid>
  )
}

export const Primary: Story = {
  render: renderPrimary
}
