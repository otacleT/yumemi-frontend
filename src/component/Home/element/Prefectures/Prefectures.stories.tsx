import type {Meta, StoryObj} from '@storybook/react'

import {Prefectures} from '.'

const meta: Meta<typeof Prefectures> = {
  title: 'Prefectures',
  component: Prefectures,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Prefectures>

export const Primary: Story = {
  args: {
    prefectures: [
      {
        prefCode: 1,
        prefName: '北海道',
      },
      {
        prefCode: 2,
        prefName: '青森県',
      },
    ],
  },
}
