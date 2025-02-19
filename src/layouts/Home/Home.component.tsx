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
        padding={{
          bottom: { default: 10 },
          left: { default: 5 },
          right: { default: 5 }
        }}
        height={'parent-fullscreen'}
      >
        {content.map(({ image, title, body, link }, contentIndex) => (
          <Column
            key={contentIndex}
            width={{
              med: 4
            }}
            padding={{
              top: { default: 10 },
              left: { default: 5 },
              right: { default: 5 }
            }}
          >
            <Card
              image={image}
              title={title}
              body={body}
              link={link}
              loading={contentFetching}
            />
          </Column>
        ))}
      </Row>
    </GridItem>
  )
}

export default Home
