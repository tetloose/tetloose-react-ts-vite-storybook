import { Column, GridItem, Row } from '@foundations'
import { Card } from '@components'
import { useHomeContent } from './hooks/use-home-content.hooks'

const Home = () => {
  const { content, contentFetching } = useHomeContent()

  if (!content) return

  return (
    <GridItem
      tag={'section'}
      rows={{ default: [2] }}
      columns={{ default: [1] }}
    >
      <Row
        align={'center'}
        gutter={{
          left: true,
          right: true
        }}
        height={'parent-fullscreen'}
      >
        {content.map(({ image, title, body }, contentIndex) => (
          <Column
            key={contentIndex}
            width={{
              med: 4
            }}
            gutter={{
              left: true,
              right: true
            }}
          >
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
