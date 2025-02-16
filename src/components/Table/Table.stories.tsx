import { Container, Typography } from '@foundations'
import { Meta, StoryObj } from '@storybook/react'
import { Table } from './Table.component'
import { Tbody } from './Tbody.component'
import { Td } from './Td.component'
import { Tfoot } from './Tfoot.component'
import { Th } from './Th.component'
import { Thead } from './Thead.component'
import { Tr } from './Tr.component'

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
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
    return (
      <Container
        padding={{
          top: { default: 10 },
          right: { default: 10 },
          bottom: { default: 10 },
          left: { default: 10 }
        }}
      >
        <Table
          border={{
            top: true,
            right: true,
            bottom: true,
            left: true
          }}
        >
          <Thead>
            <Tr>
              <Th>
                <Typography tag={'span'} size={'body-med'} text={'Th'} />
              </Th>
              <Th
                bg={'dark'}
                borderColor={'light'}
                border={{
                  right: true,
                  left: true
                }}
                textAlign={'center'}
              >
                <Typography
                  color={'light'}
                  tag={'span'}
                  size={'body-med'}
                  text={'Th'}
                />
              </Th>
              <Th textAlign={'right'}>
                <Typography
                  color={'light'}
                  tag={'span'}
                  size={'body-med'}
                  text={'Th'}
                />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr border={{ top: true }}>
              <Td>
                <Typography tag={'span'} size={'body-med'} text={'TD'} />
              </Td>
              <Td
                border={{
                  right: true,
                  left: true
                }}
                textAlign={'center'}
              >
                <Typography tag={'span'} size={'body-med'} text={'TD'} />
              </Td>
              <Td textAlign={'right'}>
                <Typography tag={'span'} size={'body-med'} text={'TD'} />
              </Td>
            </Tr>
          </Tbody>
          <Tfoot bg={'dark'}>
            <Tr border={{ top: true }}>
              <Td>
                <Typography
                  tag={'span'}
                  size={'body-med'}
                  text={'Footer'}
                  color={'light'}
                />
              </Td>
              <Td
                textAlign={'center'}
                border={{
                  right: true,
                  left: true
                }}
              >
                <Typography
                  tag={'span'}
                  size={'body-med'}
                  text={'Footer'}
                  color={'light'}
                />
              </Td>
              <Td textAlign={'right'}>
                <Typography
                  tag={'span'}
                  size={'body-med'}
                  text={'Footer'}
                  color={'light'}
                />
              </Td>
            </Tr>
          </Tfoot>
        </Table>
      </Container>
    )
  }
}
