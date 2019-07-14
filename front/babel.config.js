const presets = [
  '@babel/env',
  '@babel/preset-react',
  '@babel/preset-typescript',
];

const styledComponentPlugins = {
  dev: { ssr: false, displayName: true, pure: false },
  prod: { ssr: false, displayName: true, pure: true, minify: true },
};
const plugins = [
  'react-hot-loader/babel',
  [
    'module-resolver',
    {
      alias: {
        styles: './src/styles',
      },
    },
  ],
];

module.exports = {
  env: {
    development: {
      presets,
      plugins: [
        ...plugins,
        ['babel-plugin-styled-components', styledComponentPlugins.dev],
      ],
    },
    production: {
      presets,
      plugins: [
        ...plugins,
        ['babel-plugin-styled-components', styledComponentPlugins.prod],
      ],
    },
  },
  plugins: [
    ...plugins,
    ['babel-plugin-styled-components', styledComponentPlugins.dev],
  ],
};
