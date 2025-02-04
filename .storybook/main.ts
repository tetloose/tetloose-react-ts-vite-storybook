import type { StorybookConfig } from '@storybook/react-vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const thePath = resolve(__dirname, '../src')

const config: StorybookConfig = {
    stories: [
        '../docs/**/*.mdx',
        '../src/**/*.mdx',
        '../src/**/*.stories.@(ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-designs',
        'storybook-addon-remix-react-router'
    ],
    docs: {
        autodocs: false,
    },
    core: {
        disableWhatsNewNotifications: true,
        disableTelemetry: true,
        builder: '@storybook/builder-vite'
    },
    framework: {
        name: '@storybook/react-vite',
        options: {}
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
                        lintCommand: `eslint ${thePath} --ext .ts`
                    },
                    stylelint: {
                        lintCommand: `stylelint "${thePath}/**/*.{css,scss}"`
                    },
                    overlay: {
                        initialIsOpen: true,
                        position: 'bl'
                    },
                    enableBuild: false,
                    terminal: true
                })
            ]
        })
    }
}

export default config
