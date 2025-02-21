import { GridItem } from '@foundations/Grid/Grid-item.component'
import { Column } from '@foundations/Row/Column.component'
import { Row } from '@foundations/Row/Row.component'
import { Typography } from '@foundations/Typography/Typography.component'

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
        padding={{
          left: { default: 6 },
          right: { default: 6 }
        }}
        align={'center'}
      >
        <Column
          padding={{
            left: { default: 6 },
            right: { default: 6 }
          }}
        >
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
