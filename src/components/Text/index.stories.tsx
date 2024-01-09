import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '.'

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Text',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children: 'lorem ipsum dolor sit amet',
  },
}
