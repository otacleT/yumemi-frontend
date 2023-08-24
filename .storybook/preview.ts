import Image from 'next/image'
import '../src/styles/globals.css'
import type {Preview} from '@storybook/react'

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

Image.defaultProps = {
  unoptimized: true,
}

export default preview
