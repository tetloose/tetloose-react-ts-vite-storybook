import { ButtonHTMLAttributes } from 'react'
import { GlobalChildren, GlobalModifiers, GlobalSizeProp } from '@global'

type ButtonVariant =
    | 'primary'
    | 'secondary'

type ButtonType =
    | 'button'
    | 'submit'
    | 'reset'

export type ButtonProps = {
    variant?: ButtonVariant
    type?: ButtonType
    label?: string
} & ButtonHTMLAttributes<HTMLElement> & GlobalModifiers & GlobalSizeProp & GlobalChildren
