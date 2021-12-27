module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    '../node_modules/storybook-addon-customize-antd-theme/dist/esm/stories/index.js'
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    'storybook-addon-customize-antd-theme'
  ],
  framework: "@storybook/react",
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push(
      {
        test: /\.less$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
            },
          },
          require.resolve('less-loader')
        ]
      },
    );
    return config;
  },
}