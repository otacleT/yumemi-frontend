import type {Config} from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(7rem, 1fr))',
        custom: 'minmax(20rem, 2fr) 3fr',
      },
    },
  },
  plugins: [],
}
export default config
