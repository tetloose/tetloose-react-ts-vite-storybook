import {
  FormHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  TextareaHTMLAttributes
} from 'react'
import { GlobalChildren, GlobalModifiers } from '@global'
import { ButtonProps } from '@atoms/Button/Button.types'
import { ActionProps } from '@components/Action/Action.types'
import { TypographyProps } from '@foundations/Typography/Typography.types'

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
