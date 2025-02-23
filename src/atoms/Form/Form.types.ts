import type {
  FormHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  OptionHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes
} from 'react'
import type { ActionProps } from '@foundations/Action/Action.types'
import type { Spacers } from '@foundations/Spacer/Spacer.types'
import type { TypographyProps } from '@foundations/Typography/Typography.types'
import type { ButtonProps } from '@atoms/Button/Button.types'
import type {
  GlobalChildren,
  GlobalColor,
  GlobalModifiers
} from '@global/global.types'

type Button = Pick<ButtonProps, 'variant' | 'label' | 'disabled'>

type Action = Omit<ActionProps, 'children' | 'modifiers'>

type Actions = {
  actions?: {
    actionOptions?: Action
    submitButton?: Button
    resetButton?: Button
  }
}

type InputType = {
  type?: 'number' | 'password' | 'tel' | 'text' | 'url'
}

type Error = {
  error?: boolean
}

export type FormProps = FormHTMLAttributes<HTMLFormElement> &
  GlobalChildren &
  GlobalModifiers &
  Actions

export type LabelProps = {
  label?: Omit<
    TypographyProps,
    'modifiers' | 'tag' | 'padding' | 'margin' | 'color'
  >
} & LabelHTMLAttributes<HTMLLabelElement> &
  Spacers &
  Error &
  GlobalChildren &
  GlobalModifiers &
  GlobalColor

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> &
  InputType &
  Spacers &
  Error &
  GlobalModifiers &
  GlobalColor

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  Spacers &
  Error &
  GlobalModifiers &
  GlobalColor

export type RadioCheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> &
  LabelProps

export type Options = {
  text: string
} & OptionHTMLAttributes<HTMLOptionElement>

export type SelectProps = {
  options: Options[]
} & SelectHTMLAttributes<HTMLSelectElement> &
  LabelProps &
  GlobalColor
