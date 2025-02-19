import { Container, Typography } from '@foundations'
import { Meta, StoryObj } from '@storybook/react'
import { Ti } from './_T-i.component'
import { TableTitle } from './_Table-title.component'
import { Table } from './Table.component'

const meta: Meta<typeof Table> = {
  title: 'Atoms/Table',
  component: Table,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Table>

export const Primary: Story = {
  render: () => {
    const title1 = 'Table Title 1'
    const title2 = 'Table Title 2'
    const title3 = 'Table Title 3'

    return (
      <Container
        padding={{
          top: { default: 10 },
          right: { default: 10 },
          bottom: { default: 10 },
          left: { default: 10 }
        }}
      >
        <Table>
          <Ti tag={'thead'}>
            <Ti tag={'tr'}>
              <Ti
                tag={'th'}
                border={{
                  top: true,
                  right: true,
                  bottom: true,
                  left: true
                }}
              >
                <Typography tag={'span'} size={'body-med'} text={title1} />
              </Ti>
              <Ti
                tag={'th'}
                border={{
                  top: true,
                  right: true,
                  bottom: true,
                  left: true
                }}
                textAlign={'center'}
              >
                <Typography tag={'span'} size={'body-med'} text={title2} />
              </Ti>
              <Ti
                tag={'th'}
                border={{
                  top: true,
                  right: true,
                  bottom: true,
                  left: true
                }}
                textAlign={'right'}
              >
                <Typography tag={'span'} size={'body-med'} text={title3} />
              </Ti>
            </Ti>
          </Ti>
          <Ti tag={'tbody'}>
            <Ti tag={'tr'}>
              <TableTitle
                size={'h3'}
                fontWeight={'bold'}
                text={title1}
                padding={{ default: 5 }}
              />
              <Ti
                tag={'td'}
                border={{
                  top: true,
                  right: true,
                  bottom: true,
                  left: true
                }}
              >
                <Typography tag={'span'} size={'body-med'} text={'Tbody'} />
              </Ti>
              <TableTitle
                size={'h3'}
                fontWeight={'bold'}
                text={title2}
                padding={{ default: 5 }}
              />
              <Ti tag={'td'} bg={'dark'} textAlign={'center'}>
                <Typography
                  tag={'span'}
                  size={'body-med'}
                  text={'Tbody'}
                  color={'light'}
                />
              </Ti>
              <TableTitle
                size={'h3'}
                fontWeight={'bold'}
                text={title3}
                padding={{ default: 5 }}
              />
              <Ti
                tag={'td'}
                border={{
                  top: true,
                  right: true,
                  bottom: true,
                  left: true
                }}
                textAlign={'right'}
              >
                <Typography tag={'span'} size={'body-med'} text={'Tbody'} />
              </Ti>
            </Ti>
          </Ti>
          <Ti tag={'tfoot'}>
            <Ti tag={'tr'}>
              <TableTitle
                size={'h3'}
                fontWeight={'bold'}
                text={title1}
                padding={{ default: 5 }}
              />
              <Ti
                tag={'td'}
                border={{
                  top: true,
                  right: true,
                  bottom: true,
                  left: true
                }}
              >
                <Typography tag={'span'} size={'body-med'} text={'Tfoot'} />
              </Ti>
              <TableTitle
                size={'h3'}
                fontWeight={'bold'}
                text={title2}
                padding={{ default: 5 }}
              />
              <Ti
                tag={'td'}
                border={{
                  top: true,
                  right: true,
                  bottom: true,
                  left: true
                }}
                textAlign={'center'}
              >
                <Typography tag={'span'} size={'body-med'} text={'Tfoot'} />
              </Ti>
              <TableTitle
                size={'h3'}
                fontWeight={'bold'}
                text={title3}
                padding={{ default: 5 }}
              />
              <Ti
                tag={'td'}
                border={{
                  top: true,
                  right: true,
                  bottom: true,
                  left: true
                }}
                textAlign={'right'}
              >
                <Typography tag={'span'} size={'body-med'} text={'Tfoot'} />
              </Ti>
            </Ti>
          </Ti>
        </Table>
      </Container>
    )
  }
}
