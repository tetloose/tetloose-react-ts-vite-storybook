import { Grid } from '@foundations'
import { Meta, StoryObj } from '@storybook/react'
import { Footer, Header } from '@routes/routes.paths'
import NotFound from './Not-found.component'

const meta: Meta<typeof NotFound> = {
  title: 'Layouts/Not Found',
  component: NotFound,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof NotFound>

const RenderStory = () => (
  <Grid rows={{ default: ['60px', 'auto', '40px'] }} columns={{ default: [1] }}>
    <Header />
    <NotFound />
    <Footer />
  </Grid>
)

const RenderStoryError = () => (
  <Grid rows={{ default: ['60px', 'auto', '40px'] }} columns={{ default: [1] }}>
    <Header />
    <NotFound
      error={{
        message: 'This is an error',
        name: 'Error Name',
        stack: 'Stack Name'
      }}
    />
    <Footer />
  </Grid>
)

export const Primary: Story = {
  render: RenderStory
}

export const Error: Story = {
  render: RenderStoryError
}
