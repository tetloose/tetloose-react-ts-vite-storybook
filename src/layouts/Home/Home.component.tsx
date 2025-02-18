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
          left: { med: 6 },
          right: { med: 6 },
          bottom: {
            default: 6,
            med: 0,
            lrg: 0,
            xlrg: 0,
            xxlrg: 0
          }
        }}
        height={'parent-fullscreen'}
      >
        {content.map(({ image, title, body }, contentIndex) => (
          <Column
            key={contentIndex}
            width={{
              med: 4
            }}
            padding={{
              top: {
                default: 6,
                med: 0,
                lrg: 0,
                xlrg: 0,
                xxlrg: 0
              },
              left: { default: 6 },
              right: { default: 6 }
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
