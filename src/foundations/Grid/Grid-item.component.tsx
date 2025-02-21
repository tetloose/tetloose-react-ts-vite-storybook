import type { WheelEvent } from 'react'
import { useMemo } from 'react'
import { createPortal } from 'react-dom'
import { useHorizontalScroll } from '@hooks/Scroll/use-horizontal-scroll.hooks'
import { getClassName } from './utils/get-class-name.utils'
import { getStyles } from './utils/get-styles.utils'
import type { GridProps } from './Grid.types'
import cs from 'classnames'
import styles from './Grid.module.scss'

export const GridItem = ({
  modifiers = [],
  tag = 'section',
  rows,
  columns,
  bg,
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
          bg && styles[`bg-${bg}`],
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
