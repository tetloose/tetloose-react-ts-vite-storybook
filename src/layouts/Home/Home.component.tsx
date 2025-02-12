import { Column, GridItem, Row, Spacer } from '@foundations'
import { Card } from '@components'
import { useHomeContent } from './hooks/use-home-content.hooks'

const Home = () => {
  const { content, contentFetching } = useHomeContent()

  if (!content) return

  return (
    <GridItem tag={'section'} rows={[2]} columns={[1]}>
      <Row
        height={'fullscreen'}
        align={'center'}
        gutter={{
          left: true,
          right: true
        }}
      >
        {content.map(({ image, title, body }, contentIndex) => (
          <Column
            key={contentIndex}
            width={{
              lrg: 4
            }}
            gutter={{
              left: true,
              right: true
            }}
          >
            <Spacer padding={6} display={'block'} />
            <Card
              image={image}
              title={title}
              body={body}
              loading={contentFetching}
            />
          </Column>
        ))}
      </Row>
    </GridItem>
  )
}

export default Home
