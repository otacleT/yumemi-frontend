import type {Meta, StoryObj} from '@storybook/react'

import {Prefectures} from '.'

const meta: Meta<typeof Prefectures> = {
  title: 'Prefectures',
  component: Prefectures,
}

export default meta
type Story = StoryObj<typeof Prefectures>

export const Primary: Story = {}
