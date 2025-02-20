import type {
  FormHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  TextareaHTMLAttributes
} from 'react'
import type { ActionProps } from '@components/Action/Action.types'
import type { TypographyProps } from '@foundations/Typography/Typography.types'
import type { ButtonProps } from '@atoms/Button/Button.types'
import type { GlobalChildren, GlobalModifiers } from '@global'

type Button = Pick<ButtonProps, 'variant' | 'label' | 'disabled'>

type Action = Omit<ActionProps, 'children' | 'modifiers'>

type Actions = {
  actions?: {
    actionOptions?: Action
    submitButton?: Button
    resetButton?: Button
  }
}

type inputType = {
  type?: 'number' | 'password' | 'tel' | 'text' | 'url'
}

type inputError = {
  error?: boolean
}

export type FormProps = FormHTMLAttributes<HTMLFormElement> &
  GlobalChildren &
  GlobalModifiers &
  Actions

export type LabelProps = {
  label?: Omit<TypographyProps, 'modifiers' | 'tag'>
} & LabelHTMLAttributes<HTMLLabelElement> &
  inputError &
  GlobalChildren &
  GlobalModifiers

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> &
  inputType &
  inputError &
  GlobalModifiers

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  inputError &
  GlobalModifiers
