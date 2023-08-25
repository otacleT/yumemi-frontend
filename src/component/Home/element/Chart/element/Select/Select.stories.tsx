import type {Meta, StoryObj} from '@storybook/react'

import {Select} from '.'

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Select>

export const Primary: Story = {}
