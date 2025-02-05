import type { StorybookConfig } from '@storybook/react-vite'

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
        '@storybook/addon-interactions',
        '@storybook/addon-designs',
        'storybook-addon-remix-react-router',
        '@chromatic-com/storybook'
    ],
    docs: {
        defaultName: 'Documentation'
    },
    core: {
        disableWhatsNewNotifications: true,
        disableTelemetry: true
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
                    overlay: {
                        initialIsOpen: true,
                        position: 'bl'
                    },
                    enableBuild: false,
                    terminal: true
                })
            ],
            css: {
                devSourcemap: true
            }
        })
    }
}

export default config
