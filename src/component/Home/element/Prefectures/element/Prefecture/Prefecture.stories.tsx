import type {Meta, StoryObj} from '@storybook/react'

import {Prefecture} from '.'

const meta: Meta<typeof Prefecture> = {
  title: 'Prefecture',
  component: Prefecture,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Prefecture>

export const Primary: Story = {
  args: {
    prefCode: 1,
    prefName: '北海道',
  },
}
