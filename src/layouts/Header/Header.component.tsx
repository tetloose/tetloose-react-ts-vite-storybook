import { Column, GridItem, Row, Typography } from '@foundations'

const Header = () => {
  return (
    <GridItem
      tag={'header'}
      bg={'dark'}
      rows={{ default: [1] }}
      columns={{ default: [1] }}
    >
      <Row
        height={'parent-fullscreen'}
        gutter={{ left: true, right: true }}
        align={'center'}
      >
        <Column gutter={{ left: true, right: true }}>
          <Typography
            tag={'span'}
            display={'block'}
            textAlign={'center'}
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
