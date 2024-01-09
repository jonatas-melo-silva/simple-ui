import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '.'
import { Box } from '..'

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Stack>

export const Default: Story = {
  render: (args) => (
    <Stack className="gap-4 bg-gray-400 p-4" {...args}>
      <Box className="h-24 w-24 bg-primary-500" />
      <Box className="h-24 w-24 bg-primary-500" />
      <Box className="h-24 w-24 bg-primary-500" />
    </Stack>
  ),
}
