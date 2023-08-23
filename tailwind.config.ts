import type {Config} from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(7rem, 1fr))',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)'],
      },
    },
  },
  plugins: [],
}
export default config
