# SPG DJI RIPA

## Recommended VSCode Extensions

`cmd shift p` then type recommended.

The sidebar will open with a list of recommended extensions to be installed.

'Workspaces' is a great plugin that allows you to show hide files.

See [Workspaces](https://marketplace.visualstudio.com/items?itemName=Fooxly.workspace) docs.

## React Developer Tools

[https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

## Features

- Vite
- Typescript
- ViTest
- SCSS modules
- SCSS
- React Router
- React Query

## Commands

- `yarn setup` - Installs packages, setup husky and runs the app in development mode.
- `yarn start` - Runs the app in the development mode.
- `yarn build` - Builds the app for production to the `build` folder.
- `yarn test` - Launches the test runner in the interactive watch mode.
- `yarn test:coverage` - Get test runner coverage stats.
- `yarn test:clear-cache` - Clear test runner cache.
- `yarn lint` - Lint js / scss.
- `yarn lint:fix` - Lint js / scss and fix errors.
- `yarn storybook` - Runs Storybook in the development mode.
- `yarn build-storybook` - Builds Storybook for production.
- `yarn git:commit` - Commit working branch, pomps for commit message.
- `yarn gen:component` - Auto generates a component, follow steps in terminal.

## Setup

1. `git clone git@ssh.dev.azure.com:v3/HugoAndCat/StandardAndPoor/spg.dji-ripa`
2. `cmd shift p recommended` install recommended plugins
3. `yarn setup`
4. Web browser will open `http://localhost:6006/`

## Storybook

1. `yarn storybook` Launches Storybook in development mode.

## ViTest

1. `yarn test` - Launches the test runner in the interactive watch mode.

## Docs

Once the project is in Storybook mode, can view the docs here: `http://localhost:6006/`.
