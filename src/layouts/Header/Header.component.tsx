import { Column, GridItem, Row } from '@foundations'

const Header = () => {
  return (
    <GridItem
      tag={'header'}
      rows={[1]}
      columns={[1]}
      border={{
        bottom: true
      }}
    >
      <Row
        gutter={{
          left: true,
          right: true
        }}
      >
        <Column
          gutter={{
            left: true,
            right: true
          }}
        >
          Header
        </Column>
      </Row>
    </GridItem>
  )
}

export default Header
