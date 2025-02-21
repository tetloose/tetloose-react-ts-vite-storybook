import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import type { Meta, StoryObj } from '@storybook/react'
import { useNotification } from '@hooks/Notification/use-notification.hooks'
import { Spacer } from '@foundations/Spacer/Spacer.component'
import { Typography } from '@foundations/Typography/Typography.component'
import { Input } from './_Input.component'
import { Label } from './_Label.component'
import { Textarea } from './_Textarea.component'
import { Form } from './Form.component'

const meta: Meta<typeof Form> = {
  title: 'Atoms/Form',
  component: Form,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
}

export default meta

type Story = StoryObj<typeof Form>

const RenderForm = () => {
  type Inputs = {
    username: string
    password: string
    message: string
  }

  const defaultValues: Inputs = {
    username: '',
    password: '',
    message: ''
  }

  const notify = useNotification()

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid }
  } = useForm<Inputs>({ defaultValues })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!data) return

    const { username, password, message } = data

    if (username) notify(`username: ${username}`, 'success')

    if (password) notify(`password: ${password}`, 'success')

    if (password) notify(`message: ${message}`, 'success')

    reset()
  }

  const handleReset = () => {
    notify('Form Reset', 'success')

    reset()
  }

  const { username: usernameError, password: passwordError } = errors

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      onReset={handleReset}
      actions={{
        actionOptions: {
          gap: 6,
          justify: 'flex-end',
          padding: {
            default: 6
          }
        },
        submitButton: {
          variant: 'light',
          label: 'Submit',
          disabled: !isValid
        },
        resetButton: {
          variant: 'light',
          label: 'reset'
        }
      }}
    >
      <Label
        htmlFor={'username'}
        label={{
          text: `Username ${usernameError ? '(required)' : ''}`,
          size: 'body-med',
          fontWeight: 'medium'
        }}
        error={!!usernameError}
      />
      <Spacer display={'block'} padding={{ default: 2 }} />
      <Input
        placeholder={'Username'}
        id={'username'}
        error={!!usernameError}
        {...register('username', { required: true })}
      />
      <Spacer display={'block'} padding={{ default: 6 }} />
      <Label
        htmlFor={'password'}
        label={{
          text: `Password ${passwordError ? '(required)' : ''}`,
          size: 'body-med',
          fontWeight: 'medium'
        }}
        error={!!passwordError}
      />
      <Spacer display={'block'} padding={{ default: 2 }} />
      <Input
        type={'password'}
        placeholder={'Password'}
        id={'password'}
        error={!!passwordError}
        {...register('password', { required: true })}
      />
      <Spacer display={'block'} padding={{ default: 6 }} />
      <Label
        htmlFor={'message'}
        label={{
          text: 'Message',
          size: 'body-med',
          fontWeight: 'medium'
        }}
      />
      <Spacer display={'block'} padding={{ default: 2 }} />
      <Textarea
        placeholder={'Enter your message'}
        id={'message'}
        {...register('message')}
      />
      <Typography
        tag={'p'}
        size={'body-sml'}
        padding={{ default: 10 }}
        text={`Watch Username: ${watch('username') ? watch('username') : ''}`}
      />
      <Typography
        tag={'p'}
        size={'body-sml'}
        padding={{ default: 6 }}
        text={`Watch Password: ${watch('password') ? watch('password') : ''}`}
      />
      <Typography
        tag={'p'}
        size={'body-sml'}
        padding={{ default: 6 }}
        text={`Watch Message: ${watch('message') ? watch('message') : ''}`}
      />
    </Form>
  )
}

export const Primary: Story = {
  render: () => RenderForm()
}
