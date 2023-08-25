import type {Meta, StoryObj} from '@storybook/react'

import {Home} from '.'

const meta: Meta<typeof Home> = {
  title: 'Home',
  component: Home,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Home>

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
