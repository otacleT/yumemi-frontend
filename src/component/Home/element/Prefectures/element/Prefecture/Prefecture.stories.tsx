import type {Meta, StoryObj} from '@storybook/react'

import {Prefecture} from '.'

const meta: Meta<typeof Prefecture> = {
  title: 'Prefecture',
  component: Prefecture,
}

export default meta
type Story = StoryObj<typeof Prefecture>

export const Primary: Story = {}
