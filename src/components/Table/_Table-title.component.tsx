import { forwardRef } from 'react'
import { Typography } from '@foundations/index'
import { Ti } from './_T-i.component'
import { TableTitleProps } from './Table.types'
import styles from './Table.module.scss'

export const TableTitle = forwardRef<HTMLElement, TableTitleProps>(
  (props, ref) => {
    const { modifiers = [] } = props

    return (
      <Ti
        ref={ref}
        modifiers={[styles['table-title'], ...modifiers]}
        tag={'td'}
      >
        <Typography tag={'span'} {...props} modifiers={[]} />
      </Ti>
    )
  }
)

TableTitle.displayName = 'TableTitle'
