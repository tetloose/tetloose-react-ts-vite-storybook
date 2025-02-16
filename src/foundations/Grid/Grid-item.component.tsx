import { WheelEvent } from 'react'
import { useHorizontalScroll } from '@hooks'
import { getBorder } from '@utils'
import { GridItemProps } from './Grid.types'
import cs from 'classnames'
import styles from './Grid.module.scss'

export const GridItem = ({
  variants,
  modifiers = [],
  tag = 'section',
  rows,
  columns,
  border,
  borderColor = 'dark',
  horizontalScroll,
  onWheelHandler,
  children,
  ...rest
}: GridItemProps) => {
  const borders = getBorder(border, borderColor)
  const handleHorizontalScroll = useHorizontalScroll()

  const gridStyles = {
    gridRow: rows
      .map((row, rowIndex) => (rowIndex > 0 ? `/ ${row}` : `${row}`))
      .join(' '),
    gridColumn: columns
      .map((column, columnIndex) =>
        columnIndex > 0 ? `/ ${column}` : `${column}`
      )
      .join(' ')
  }

  const Element = tag

  const handleOnWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (horizontalScroll) handleHorizontalScroll(event)

    if (onWheelHandler) onWheelHandler(event)
  }

  return (
    <Element
      className={cs(
        styles['grid__item'],
        variants && variants.map((variant) => styles[variant]),
        borders && borders.map((name) => styles[name]),
        ...modifiers
      )}
      style={gridStyles}
      onWheel={handleOnWheel}
      {...rest}
    >
      {children}
    </Element>
  )
}
