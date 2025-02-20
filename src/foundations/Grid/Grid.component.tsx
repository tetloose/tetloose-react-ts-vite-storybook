import { useMemo } from 'react'
import { createPortal } from 'react-dom'
import type { GridProps } from './Grid.types'
import { getClassName, getStyles } from './utils'
import cs from 'classnames'
import styles from './Grid.module.scss'

export const Grid = ({
  modifiers = [],
  tag = 'main',
  bg = 'light',
  rows,
  columns,
  children,
  ...rest
}: GridProps) => {
  const Element = tag
  const className = getClassName(styles['grid'])

  const inlineStyles = useMemo(
    () =>
      getStyles({
        className,
        rows,
        columns,
        template: true
      }),
    [rows, columns, className]
  )

  return (
    <>
      {createPortal(<style>{inlineStyles}</style>, document.body)}

      <Element
        className={cs(
          styles['grid'],
          styles[`bg-${bg}`],
          className,
          ...modifiers
        )}
        {...rest}
      >
        {children}
      </Element>
    </>
  )
}
