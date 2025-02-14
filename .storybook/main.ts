import type { StorybookConfig } from '@storybook/react-vite'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const src = resolve(__dirname, '../src')

const config: StorybookConfig = {
  stories: [
    '../docs/**/*.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(ts|tsx)'
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-designs',
    'storybook-addon-remix-react-router'
  ],
  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true
  },
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: true
  },
  typescript: {
    reactDocgen: false
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite')
    const checker = await import('vite-plugin-checker')
    const checkerPlugin = checker.default

    return mergeConfig(config, {
      plugins: [
        checkerPlugin({
          typescript: { buildMode: true },
          eslint: {
            useFlatConfig: true,
            lintCommand: `eslint ${src}`
          },
          stylelint: {
            lintCommand: `stylelint "${src}/**/*.scss"`
          },
          overlay: {
            initialIsOpen: true,
            position: 'bl'
          },
          enableBuild: true,
          terminal: true
        })
      ]
    })
  }
}

export default config
