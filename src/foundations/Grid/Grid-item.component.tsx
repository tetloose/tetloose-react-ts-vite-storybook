import { useMemo, WheelEvent } from 'react'
import { createPortal } from 'react-dom'
import { useHorizontalScroll } from '@hooks'
import { getClassName, getStyles } from './utils'
import { GridProps } from './Grid.types'
import cs from 'classnames'
import styles from './Grid.module.scss'

export const GridItem = ({
  modifiers = [],
  tag = 'section',
  rows,
  columns,
  bg = 'light',
  horizontalScroll,
  onWheelHandler,
  children,
  ...rest
}: GridProps) => {
  const Element = tag
  const handleHorizontalScroll = useHorizontalScroll()
  const className = getClassName(styles['grid__item'])

  const inlineStyles = useMemo(
    () =>
      getStyles({
        className,
        rows,
        columns,
        template: false
      }),
    [rows, columns, className]
  )

  const handleOnWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (horizontalScroll) handleHorizontalScroll(event)

    if (onWheelHandler) onWheelHandler(event)
  }

  return (
    <>
      {createPortal(<style>{inlineStyles}</style>, document.body)}
      <Element
        className={cs(
          styles['grid__item'],
          styles[`bg-${bg}`],
          className,
          ...modifiers
        )}
        onWheel={handleOnWheel}
        {...rest}
      >
        {children}
      </Element>
    </>
  )
}
