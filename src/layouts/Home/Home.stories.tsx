import type { Meta, StoryObj } from '@storybook/react'
import { Footer, Header } from '@routes/routes.paths'
import { Grid } from '@foundations'
import Home from './Home.component'

const meta: Meta<typeof Home> = {
  title: 'Layouts/Home',
  component: Home,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Home>

const RenderStory = () => (
  <Grid rows={{ default: ['60px', 'auto', '40px'] }} columns={{ default: [1] }}>
    <Header />
    <Home />
    <Footer />
  </Grid>
)

export const Primary: Story = {
  render: RenderStory
}
