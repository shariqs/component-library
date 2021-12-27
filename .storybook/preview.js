import { configure, addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import themes from '../src/common/themes';
import GlobalStyle from './decorators/globalStyle';
import themeLess from '../src/theme/theme.less';

const {
  original,
  rainyDay,
  vaporTeal,
  theSixtiesUSA,
  olive,
  tokyoDark,
  rose,
  plum,
  matrix,
  travel,
  ...otherThemes
} = themes;

const reorderedThemes = {
  original,
  rainyDay,
  vaporTeal,
  theSixtiesUSA,
  olive,
  tokyoDark,
  rose,
  plum,
  matrix,
  travel,
  ...otherThemes
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  customizeAntdTheme: {
    modifyVars: themeLess,
  },
}

addDecorator(GlobalStyle);
addDecorator(withThemesProvider(Object.values(reorderedThemes)));