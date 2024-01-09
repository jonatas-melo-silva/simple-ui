import { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from '.'

const meta: Meta<typeof LoginForm> = {
  title: 'Exemples/Form',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof LoginForm>

export const Login: Story = {}
