import { SVGProps } from 'react'

declare module '*.svg' {
  import * as React from 'react'

  export const ReactComponent: React.FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string }
  >

  const src: string

  export default src
}
