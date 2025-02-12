import { borderClassNames } from '@utils'
import { GridProps } from './Grid.types'
import cs from 'classnames'
import styles from './Grid.module.scss'

export const Grid = ({
  modifiers = [],
  tag = 'main',
  rows,
  columns,
  border,
  children,
  ...rest
}: GridProps) => {
  const borders = borderClassNames(border)

  const gridStyles = {
    gridTemplateRows: rows
      .map((row) => (row === 'auto' ? 'auto' : `${row}fr`))
      .join(' '),
    gridTemplateColumns: columns.map((column) => `${column}fr`).join(' ')
  }

  const Element = tag

  return (
    <Element
      className={cs(
        styles['grid'],
        borders && borders.map((name) => styles[name]),
        ...modifiers
      )}
      style={gridStyles}
      {...rest}
    >
      {children}
    </Element>
  )
}
