import { Column, GridItem, Row, Typography } from '@foundations'

const Footer = () => {
  return (
    <GridItem
      tag={'footer'}
      bg={'dark'}
      rows={{ default: [3] }}
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
            text={'Footer'}
            color={'light'}
            fontWeight={'bold'}
          />
        </Column>
      </Row>
    </GridItem>
  )
}

export default Footer
