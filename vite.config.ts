import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      !process.env.VITEST &&
        checker({
          typescript: { buildMode: true },
          eslint: {
            useFlatConfig: true,
            lintCommand: 'eslint ./src'
          },
          stylelint: {
            lintCommand: 'stylelint "./src/**/*.scss"'
          },
          overlay: {
            initialIsOpen: true,
            position: 'bl'
          },
          enableBuild: true,
          terminal: true
        }),
      viteTsconfigPaths(),
      svgr()
    ].filter(Boolean),
    build: {
      manifest: true,
      sourcemap: mode === 'development',
      outDir: resolve(__dirname, 'build'),
      rollupOptions: {
        output: {
          manualChunks(id) {
            const chunks: { [key: string]: string } = {
              [resolve(__dirname, 'src/foundations')]: 'foundations',
              [resolve(__dirname, 'src/atoms')]: 'atoms',
              [resolve(__dirname, 'src/components')]: 'components',
              [resolve(__dirname, 'src/layouts')]: 'layouts',
              [resolve(__dirname, 'src/hooks')]: 'hooks',
              [resolve(__dirname, 'src/crud')]: 'crud',
              [resolve(__dirname, 'src/utils')]: 'utils',
              [resolve(__dirname, 'src/global')]: 'global',
              [resolve(__dirname, 'src/styles')]: 'styles',
              [resolve(__dirname, 'src/images')]: 'images',
              [resolve(__dirname, 'src/constants')]: 'constants',
              [resolve(__dirname, 'src/routes')]: 'routes'
            }

            for (const [aliasPath, chunkName] of Object.entries(chunks)) {
              if (id.includes(aliasPath)) {
                return chunkName
              }
            }
          }
        }
      }
    },
    resolve: {
      alias: {
        '@context/*': resolve(__dirname, 'src/context/*'),
        '@context': resolve(__dirname, 'src/context'),
        '@foundations/*': resolve(__dirname, 'src/foundations/*'),
        '@foundations': resolve(__dirname, 'src/foundations'),
        '@atoms/*': resolve(__dirname, 'src/atoms/*'),
        '@atoms': resolve(__dirname, 'src/atoms'),
        '@components/*': resolve(__dirname, 'src/components/*'),
        '@components': resolve(__dirname, 'src/components'),
        '@layouts/*': resolve(__dirname, 'src/layouts/*'),
        '@layouts': resolve(__dirname, 'src/layouts'),
        '@hooks/*': resolve(__dirname, 'src/hooks/*'),
        '@hooks': resolve(__dirname, 'src/hooks'),
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
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['.vitest/vitest.setup.ts'],
      include: ['./src/**/*.test.{ts,tsx}'],
      exclude: [
        '.husky',
        '.scripts',
        '.vscode',
        'node_modules',
        'public',
        'build',
        'storybook-static',
        'coverage'
      ]
    },
    server: {
      port: 3000,
      open: true
    }
  }
})
