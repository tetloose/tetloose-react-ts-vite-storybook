import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import pluginQuery from '@tanstack/eslint-plugin-query'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

const ignoreConfig = {
  ignores: [
    '**/.husky/**',
    '**/.scripts/**',
    '**/.vscode/**',
    '**/node_modules/**',
    '**/public/**',
    '**/build/**',
    '**/storybook-static/**',
    '**/coverage/**'
  ]
}

const mainConfig = {
  plugins: {
    react,
    '@typescript-eslint': typescriptEslint,
    'simple-import-sort': simpleImportSort,
    'react-refresh': reactRefresh,
    'react-hooks': reactHooks,
    ...pluginQuery.configs['flat/recommended'],
    prettier: prettier
  },
  languageOptions: {
    globals: { ...globals.browser },
    parser: tsParser,
    ecmaVersion: 12,
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: { jsx: true },
      sourceType: 'module'
    }
  },
  settings: { react: { version: 'detect' } },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'react/display-name': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@context/index',
            message:
              'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@foundations/index',
            message:
              'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@atoms/index',
            message:
              'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@components/index',
            message:
              'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@layouts/index',
            message:
              'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@hooks/index',
            message:
              'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@crud/index',
            message:
              'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@utils/index',
            message:
              'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@global/index',
            message:
              'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@styles/index',
            message:
              'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@images/index',
            message:
              'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@constants/index',
            message:
              'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@routes/index',
            message:
              'Direct import of index file is restricted. Please import specific modules.'
          }
        ]
      }
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            '^react',
            '^@?\\w',
            '^\\u0000',
            '^@context',
            '^@hooks',
            '^@routes',
            '^@constants',
            '^@crud',
            '^@utils',
            '^@components',
            '^@foundations',
            '^@atoms',
            '^@layouts',
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
            '^@global',
            '^.*\\.types$',
            '^@?\\w\\.types$',
            '^.+\\.(svg|png|jpe?g|gif|webp|avif|ico|bmp|tiff?)$',
            '^classnames',
            '^.*\\.module\\.scss$',
            '^.+\\.s?css$'
          ]
        ]
      }
    ]
  }
}

export default [
  ignoreConfig,
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ),
  mainConfig
]
