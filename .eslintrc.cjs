module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'prettier'
  ],
  ignorePatterns: [
    '.azuredevops',
    '.scripts',
    '.vscode',
    'node_modules',
    'public',
    'build',
    'storybook-static',
    'coverage'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-refresh',
    'simple-import-sort',
    'prettier'
  ],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@context/index',
            message: 'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@atoms/index',
            message: 'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@layouts/index',
            message: 'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@partials/index',
            message: 'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@components/index',
            message: 'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@hooks/index',
            message: 'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@loaders/index',
            message: 'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@crud/index',
            message: 'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@utils/index',
            message: 'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@global/index',
            message: 'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@styles/index',
            message: 'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@images/index',
            message: 'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@lottie/index',
            message: 'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@constants/index',
            message: 'Direct import of index file is restricted. Please import specific modules.'
          },
          {
            name: '@routes/index',
            message: 'Direct import of index file is restricted. Please import specific modules.'
          }
        ]
      }
    ],
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off',
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
            '^@loaders',
            '^@crud',
            '^@utils',
            '^@components',
            '^@atoms',
            '^@partials',
            '^@layouts',
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
            '^@lottie',
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
    ],
    'prefer-destructuring': [
      'error',
      {
        object: true,
        array: false
      }
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    indent: 'off',
    '@typescript-eslint/indent': ['error'],
    'no-multi-spaces': ['error'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'space-in-parens': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-uses-react': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }
    ],
    'react/no-unknown-property': ['warn', { ignore: ['hu-tooltip-field'] }]
  },
  overrides: [
    {
      files: [
        '**/*.stories.tsx',
        '**/*.stories.ts'
      ],
      rules: {
        'react-hooks/rules-of-hooks': 'off',
        'react-hooks/exhaustive-deps': 'off'
      }
    }
  ],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      typescript: {}
    }
  }
}
