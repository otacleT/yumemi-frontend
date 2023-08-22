import type {Meta, StoryObj} from '@storybook/react'

import {NoData} from '.'

const meta: Meta<typeof NoData> = {
  title: 'NoData',
  component: NoData,
}

export default meta
type Story = StoryObj<typeof NoData>

export const Primary: Story = {}