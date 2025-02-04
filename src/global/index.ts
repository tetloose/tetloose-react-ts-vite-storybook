import { ReactNode } from 'react'

export type GlobalColor =
    | 'dark'
    | 'light'

export type GlobalColorProp = {
    color?: GlobalColor
}

export type GlobalBgProp = {
    bg?: GlobalColor
}

export type GlobalSize =
    | 'sml'
    | 'med'
    | 'lrg'
    | 'xlrg'

export type GlobalSizeProp = {
    size?: GlobalSize
}

export type GlobalModifiers = {
    modifiers?: string[]
}

export type GlobalChildren = {
    children?: ReactNode | ReactNode[]
}
