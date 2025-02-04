import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const brandTheme = create({
    base: 'dark',
    brandTitle: 'Tetloose React TS Vite Storybook',
    brandUrl: 'https://github.com/tetloose/tetloose-react-ts-vite-storybook',
    brandImage: '',
    brandTarget: '_blank'
})

addons.setConfig({
    theme: brandTheme
})
