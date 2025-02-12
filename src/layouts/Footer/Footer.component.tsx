import { Column, GridItem, Row } from '@foundations'

const Footer = () => {
  return (
    <GridItem
      tag={'footer'}
      rows={[3]}
      columns={[1]}
      border={{
        top: true
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
          Footer
        </Column>
      </Row>
    </GridItem>
  )
}

export default Footer
