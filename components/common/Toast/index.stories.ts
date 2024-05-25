import type { Meta, StoryObj } from '@storybook/react'

import Toast from '.'

const meta = {
  title: 'Toast',
  component: Toast,
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultToast: Story = {
  args: {},
}