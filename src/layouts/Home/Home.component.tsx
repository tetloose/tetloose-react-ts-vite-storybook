import { Column, Row } from '@foundations'
import { useAnimate } from '@hooks'
import { Card } from '@components'
import { useHomeContent } from './hooks/use-home-content.hooks'

export const Home = () => {
  const animation = useAnimate()
  const { content, contentFetching } = useHomeContent()

  if (!content) return

  return (
    <Row
      modifiers={['animate', animation]}
      align={'center'}
      height={'fullscreen'}
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
          <Card
            image={image}
            title={title}
            body={body}
            loading={contentFetching}
          />
        </Column>
      ))}
    </Row>
  )
}

export default Home
