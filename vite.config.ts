import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import sass from 'sass'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
    return {
        plugins: [
            react(),
            !process.env.VITEST
                ? checker({
                    typescript: { buildMode: true },
                    overlay: {
                        initialIsOpen: true,
                        position: 'bl'
                    },
                    enableBuild: true,
                    terminal: true
                })
                : undefined,
            viteTsconfigPaths(),
            svgr()
        ],
        build: {
            manifest: true,
            sourcemap: mode === 'development',
            outDir: resolve(__dirname, 'build')
        },
        esbuild: {
            logLevel: 'error'
        },
        resolve: {
            alias: {
                '@context/*': resolve(__dirname, 'src/context/*'),
                '@context': resolve(__dirname, 'src/context'),
                '@atoms/*': resolve(__dirname, 'src/atoms/*'),
                '@atoms': resolve(__dirname, 'src/atoms'),
                '@components/*': resolve(__dirname, 'src/components/*'),
                '@components': resolve(__dirname, 'src/components'),
                '@layouts/*': resolve(__dirname, 'src/layouts/*'),
                '@layouts': resolve(__dirname, 'src/layouts'),
                '@hooks/*': resolve(__dirname, 'src/hooks/*'),
                '@hooks': resolve(__dirname, 'src/hooks'),
                '@loaders/*': resolve(__dirname, 'src/loaders/*'),
                '@loaders': resolve(__dirname, 'src/loaders'),
                '@crud/*': resolve(__dirname, 'src/crud/*'),
                '@crud': resolve(__dirname, 'src/crud'),
                '@utils/*': resolve(__dirname, 'src/utils/*'),
                '@utils': resolve(__dirname, 'src/utils'),
                '@global/*': resolve(__dirname, 'src/global/*'),
                '@global': resolve(__dirname, 'src/global'),
                '@styles': resolve(__dirname, 'src/styles'),
                '@images': resolve(__dirname, 'src/images'),
                '@constants': resolve(__dirname, 'src/constants'),
                '@constants/*': resolve(__dirname, 'src/constants/*'),
                '@routes': resolve(__dirname, 'src/routes'),
                '@routes/*': resolve(__dirname, 'src/routes/*')
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    implementation: sass,
                    quietDeps: false
                }
            }
        },
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: ['.vitest/vitest.setup.ts'],
            include: ['./src/**/*.test.{ts,tsx}'],
            exclude: [
                '.scripts',
                'node_modules',
                'build',
                'storybook-static',
                'coverage'
            ]
        },
        assetsInclude: ['/sb-preview/runtime.js'],
        server: {
            port: 3000,
            open: true
        }
    }
})
