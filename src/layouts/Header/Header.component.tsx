import { useAnimate } from '@hooks/Animate/use-animate.hooks'
import { GridItem } from '@foundations/Grid/Grid-item.component'
import { Column } from '@foundations/Row/Column.component'
import { Row } from '@foundations/Row/Row.component'
import { Typography } from '@foundations/Typography/Typography.component'

const Header = () => {
  const animation = useAnimate()

  return (
    <GridItem
      modifiers={['animate', animation]}
      tag={'header'}
      bg={'dark'}
      rows={{ default: [1] }}
      columns={{ default: [1] }}
    >
      <Row
        height={{ default: 'parent-fullscreen' }}
        padding={{
          top: { default: 6 },
          left: { default: 6 },
          bottom: { default: 6 },
          right: { default: 6 }
        }}
        align={{
          default: 'center'
        }}
      >
        <Column
          padding={{
            left: { default: 6 },
            right: { default: 6 }
          }}
        >
          <Typography
            tag={'span'}
            display={{ default: 'block' }}
            textAlign={{ med: 'center' }}
            size={'body-xxlrg'}
            text={'Header'}
            color={'light'}
            fontWeight={'bold'}
          />
        </Column>
      </Row>
    </GridItem>
  )
}

export default Header
