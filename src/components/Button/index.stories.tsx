import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Click me',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Button>

export const Solid: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
  },
}
export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
}
export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
}
