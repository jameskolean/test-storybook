module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // {
    //   name: '@storybook/addon-docs',
    //   options: {
    //     sourceLoaderOptions: {
    //       injectStoryParameters: false,
    //     },
    //   },
    // },
  ],
}
